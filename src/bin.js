#!/usr/bin/env node

const path = require("path");

const { generate } = require("./index");

const commandHandlers = {
  generate,
};
const cliOptions = {
  verbose: "verbose",
};

const cli = async () => {
  const { argv } = process;
  const [
    absolutePathToNodeBinary,
    absolutePathToScriptEntryPoint,
    command,
    relativePathToPackageRoot,
    ...opts
  ] = argv;

  const absolutePathToPackageRoot = path.resolve(
    process.cwd(),
    relativePathToPackageRoot
  );
  const target = absolutePathToPackageRoot;
  const options = opts.map((opt) => opt.replace("--", ""));

  if (options.includes(cliOptions.verbose)) {
    console.info({ argv });
  }
  const exitCode = await commandHandlers[command]({ command, target, options });
  process.exit(exitCode);
};

cli();
