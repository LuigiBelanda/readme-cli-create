import ora from "ora";
import chalk from "chalk";
import generate_readme from "./generate_readme.js";

function main(all_params, infos) {
  // seeing which directory path we are running command
  const my_path = process.cwd();

  console.log(`🏠 Command run in path: ${my_path} \n`);

  const spinner = ora("🔎 Verify params").start(
    setTimeout(() => {
      spinner.color = "yellow";
      spinner.text = chalk.yellow("🔎 Verify params");
    }, 50)
  );

  setTimeout(() => {
    spinner.stop();
    spinner.succeed("The parameters used seem to be ok\n");
  }, 2000);

  setTimeout(() => {
    if (all_params.length == 3) {
      if (all_params[2] == "-y") {
        // leaving only parameter "-y"
        let param_accept = all_params[2];
        let readme_model = infos.readme_model;

        generate_readme(param_accept, infos, readme_model, my_path);
      }
    }

    // If nothing comes up with the readme-cli-create command
    if (all_params.length == 2) {
      let readme_model = infos.readme_model;
      let param_accept = "";

      generate_readme(param_accept, infos, readme_model, my_path);
    }
  }, 2250);
}

export default main;
