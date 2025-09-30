#!/usr/bin/env node

const { execSync } = require("child_process");

function run(command) {
  try {
    console.log(`$ ${command}`);
    return execSync(command, { stdio: "inherit" });
  } catch (err) {
    console.error(`Error running command: ${command}`);
    process.exit(1);
  }
}

const branchName = process.argv[2];

if (!branchName) {
  console.error("Usage: node create-branch.js <branch-name>");
  process.exit(1);
}

// Create and switch to the branch
run(`git checkout -b ${branchName}`);

// Make an empty commit with the branch name as the message
run(`git commit --allow-empty -m "${branchName}"`);

// Push the branch + commit to origin
// run(`git push -u origin ${branchName}`);
