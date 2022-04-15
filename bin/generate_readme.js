import fs from "fs";
import ora from "ora";
import chalk from "chalk";

function generate_readme(param_accept, infos, readme_model, my_path) {
  var models = [
    `<h1 align=center> ${infos.project_name} </h1>
<h3 align=center> ${infos.description} </h3>

<br>
<br>

<h2> ⭐ Objectives of this repository / project: </h2>
<p></p>

<br>

<h2> 🔬 Technologies / Tools / Programming languages ​​used: </h2>
<!--- Ex: HTML, CSS, JS, Node.Js, Yarn, NPM, PHP, Insomnia, Postman, Vs code... ---> 
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>

<br>

<h2> 💻 Prerequisites: </h2>
<!--- Ex: install node, npm, yarn... ---> 
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>

<br>

<h2> 🚀 Installing / using the project: </h2>
<p></p>

<br>

<h2> 👨‍💻 Developed by: </h2>
<strong> <p> ${infos.github_username} </p> </strong>
<img src="https://avatars.githubusercontent.com/${infos.github_username}" width="100px" height="100px">

<a href="https://github.com/${infos.github_username}"> 
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" width="100px">
</a> 

<br>

<a href="https://www.linkedin.com/in/user_name/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"width="100px">
</a>
`,

`<h1 align=center> ${infos.project_name} </h1>
<h3 align=center> ${infos.description} </h3>

<br>
<br>

<h2> ⭐ Objectives of this repository / project: </h2>
<p></p>
`,

`<img src="https://raw.githubusercontent.com/MicaelliMedeiros/micaellimedeiros/master/image/computer-illustration.png" min-width="400px" max-width="400px" width="400px" align="right" alt="Computer">

<h1 align="left"> 
  ${infos.project_name}
</h1>

<p align="left"> 
  ${infos.description}
</p>

<p align="left">
  🦄 Linguagens: <strong>used languages</strong>
</p>

<p align="left">
  💼 Ferramentas: <strong>tools used</strong>
</p>

<p align="left">
  💌 Contact: ⤵️
</p>

<p align="left">
  <a href="#" alt="Gmail">
  <img src="https://img.shields.io/badge/-Gmail-FF0000?style=flat-square&labelColor=FF0000&logo=gmail&logoColor=white&link=LINK-EMAIL" /></a>

  <a href="#" alt="Linkedin">
  <img src="https://img.shields.io/badge/-Linkedin-0e76a8?style=flat-square&logo=Linkedin&logoColor=white&link=LINK-LINKEDIN" /></a>

  <a href="#" alt="WhatsApp">
  <img src="https://img.shields.io/badge/-WhatsApp-25d366?style=flat-square&labelColor=25d366&logo=whatsapp&logoColor=white&link=API-WHATSAPP"/></a>

  <a href="#" alt="Facebook">
  <img src="https://img.shields.io/badge/-Facebook-3b5998?style=flat-square&labelColor=3b5998&logo=facebook&logoColor=white&link=LINK-FACEBOOK"/></a>

  <a href="#" alt="Instagram">
  <img src="https://img.shields.io/badge/-Instagram-DF0174?style=flat-square&labelColor=DF0174&logo=instagram&logoColor=white&link=LINK-INSTAGRAM"/></a>
</p>`
];

  if (readme_model == "0") {
    var content_file = models[0];
  }
  if (readme_model == "1") {
    var content_file = models[1];
  }
  if (readme_model == "2") {
    var content_file = models[2];
  }

  // seeing which files exist in the directory
  const files_in_dir = fs.readdirSync(my_path);

  // checking if "-y" parameter came in the command
  if (param_accept == "-y") {
    create_file(content_file);
  } else {
    verify_content(files_in_dir);
  }

  // checking if a readme file already exists in the directory
  function verify_content(files_in_dir) {
    const readme_exists = files_in_dir.includes("README.md");
    exists_readme(readme_exists);
  }

  // return if there is already a readme or not
  function exists_readme(readme_exists) {
    if (readme_exists == true) {
      const spinner = ora("🔧 Generating file").start(
        setTimeout(() => {
          spinner.color = "yellow";
          spinner.text = chalk.yellow("🔧 Generating file");
        }, 50)
      );

      setTimeout(() => {
        spinner.stop();
        spinner.warn("The file was not generated, it looks like there was an error! Check what happened below\n");
      }, 2000);

      setTimeout(() => {
        console.log(chalk.red(`🚫 There is already a README.md file in your directory ${my_path}`));
        console.log("🤷 If you want to replace this existing README.md with another one there are some alternatives, delete it, rename it or use -y parameter in CLI command execution. Ex: readme-cli-create -y")
        console.log("\nCheck this project for more infos: https://github.com/LuigiBelanda/readme-cli-create");
      }, 2250);
      
      return;
    } else {
      create_file(content_file);
    }
  }

  // function that creates the readme file
  function create_file(content_file) {
    const spinner = ora("🔧 Generating file").start(
      setTimeout(() => {
        spinner.color = "yellow";
        spinner.text = chalk.yellow("🔧 Generating file");
      }, 50)
    );

    setTimeout(() => {
      spinner.stop();
      spinner.succeed("No error occurred\n");
    }, 2000);

    setTimeout(() => {
      console.log(chalk.green(`✅ The file has been created in path ${my_path}, check if the README has all the necessary information and change it if necessary`));
      console.log("\nCheck this project for more infos: https://github.com/LuigiBelanda/readme-cli-create");
    }, 2250);

    fs.writeFile("README.md", content_file, (err) => {
      if (err) {
        spinner.stop();
        throw err;
      }
    });
  }
}

export default generate_readme;
