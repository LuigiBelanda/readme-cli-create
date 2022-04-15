#!/usr/bin/env node

import chalk from "chalk";
import readline from "readline";
import main from "../bin/verify_params.js";

// taking the parameters that come from the command in the terminal
const all_params = process.argv;

var rl = readline.createInterface(process.stdin, process.stdout);

var infos = new Object();

var infos = {
  project_name: "",
  description: "",
  github_username: "",
  readme_model: "",
}

rl.question("💻 Project name: ", (project_name) => {
  infos.project_name = project_name;
  rl.question("📝 Description: ", (description) => {
    infos.description = description;
    rl.question("👤 Github username: ", (github_username) => {
      infos.github_username = github_username;
      rl.question("🖼️  Choose a template for your readme (0, 1 or 2): ", (readme_model) => {
          infos.readme_model = readme_model;
          console.log(chalk.green("\n⏭  Send answers for next step \n"));
          rl.close();
          main(all_params, infos);
        }
      );
    });
  });
});
