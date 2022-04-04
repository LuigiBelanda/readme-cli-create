const generate_readme = require("./generate_readme");

function main(all_params, infos) {
  console.log("🔎 Verify params");

  // seeing which directory path we are running command
  const my_path = process.cwd();

  console.log(`🏠 Command run in path: ${my_path} \n`);

  if (all_params.length == 3) {
    if (all_params[2] == "-y") {
      // leaving only parameter "-y"
      param_accept = all_params[2];
      readme_model = infos[3];

      generate_readme(param_accept, infos, readme_model, my_path);
    }
  }

  // If nothing comes up with the readme-cli-create command
  if (all_params.length == 2) {
    readme_model = infos[3];
    param_accept = "";

    generate_readme(param_accept, infos, readme_model, my_path);
  }
}

module.exports = { main };
