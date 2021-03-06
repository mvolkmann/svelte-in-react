// This generates custom elements from Svelte components.
// It creates a .js file in a specified directory
// for each .svelte file in the "src" directory
// that defines a custom element.
// This is determined by the presence of
// "<svelte:options tag=" in a .svelte file.
// The code for custom elements is generated by the Svelte compiler.
// It uses many fs "Sync" methods because this is a
// command-line utility and multi-threading isn't important here.
// This also copies the required code from the "svelte" npm dependency
// so using apps do not need to install "svelte".

const fs = require('fs');
const readline = require('readline');
const compiler = require('svelte/compiler');

const inDir = 'src';
const outDir = process.argv[2];
if (!outDir) {
  console.error('usage: node compile {out-dir}');
  process.exit();
}

const compilerOptions = {
  css: false,
  customElement: true,
  hydratable: true,
  immutable: true
};

function compileToCustomElement(fileName) {
  const name = fileName.split('.')[0];
  const source = fs.readFileSync(`${inDir}/${fileName}`, {
    encoding: 'utf8'
  });

  const result = compiler.compile(source, compilerOptions);

  if (result.warnings.length) {
    console.warning(`Warnings for ${name}:`);
    for (const warning of result.warnings) {
      console.warning(warning.message);
    }
  } else {
    const path = `${outDir}/${name}.js`;
    let {code} = result.js;

    // Don't require "svelte" to be installed in using apps.
    code = code.replace('svelte/internal', './svelte-internal');

    fs.writeFileSync(path, code);
    console.log('created', path);
  }
}

// This copies the Svelte source file that defines
// utility functions used by custom elements
// so using apps don't have to install Svelte.
// It omits lines related to ESLint TypeScript support
// because using applications may not support those.
function copySvelteInternals() {
  const output = fs.createWriteStream(`${outDir}/svelte-internal.js`);
  const input = fs.createReadStream('node_modules/svelte/internal/index.js');
  const readInterface = readline.createInterface({input});
  return new Promise(resolve => {
    readInterface.on('line', line => {
      if (!line.includes('@typescript-eslint')) {
        output.write(line + '\n');
      }
    });
    readInterface.on('close', () => {
      output.close();
      resolve();
    });
  });
}

async function processSvelteFile(fileName) {
  const input = fs.createReadStream(`${inDir}/${fileName}`);
  const readInterface = readline.createInterface({input});
  return new Promise(resolve => {
    readInterface.on('line', line => {
      if (line.includes('<svelte:options tag=')) {
        readInterface.close(); // no need to read more lines
        compileToCustomElement(fileName);
      }
    });
    readInterface.on('close', () => resolve());
  });
}

// Create target directory for .js files if it doesn't exist.
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

async function doIt() {
  // Find and process all the .svelte files in inDir.
  const promises = fs
    .readdirSync(inDir)
    .filter(name => name.endsWith('.svelte'))
    .map(processSvelteFile);

  promises.push(copySvelteInternals());
  await Promise.all(promises);
}

doIt();
