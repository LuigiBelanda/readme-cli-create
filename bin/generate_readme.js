const fs = require("fs");

function generate_readme(param_accept, infos, readme_model, my_path) {
  models = [
`<h1 align=center> ${infos[0]} </h1>
<h3 align=center> ${infos[1]} </h3>

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
<strong> <p> ${infos[2]} </p> </strong>
<img src="https://avatars.githubusercontent.com/${infos[2]}" width="100px" height="100px">

<a href="https://github.com/${infos[2]}"> 
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" width="100px">
</a> 

<br>

<a href="https://www.linkedin.com/in/user_name/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"width="100px">
</a>
`,

`<h1 align=center> ${infos[0]} </h1>
<h3 align=center> ${infos[1]} </h3>

<br>
<br>

<h2> ⭐ Objectives of this repository / project: </h2>
<p></p>
`
  ];

  if (readme_model == "0") {
    var content_file = models[0];
  }
  if (readme_model == "1") {
    var content_file = models[1];
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
      console.log("🔧 Generating file\n");
      setTimeout(() => { console.log(`\x1b[31m%s\x1b[0m`,`🚫 There is already a README.md file in your directory ${my_path}`); }, 1000);
      setTimeout(() => { console.log( "🤷 If you want to replace this existing README.md with another one there are some alternatives, delete it, rename it or use -y parameter in CLI command execution. Ex: readme-cli-create -y"); }, 1000);
      return;
    } else {
      create_file(content_file);
    }
  }

  // function that creates the readme file
  function create_file(content_file) {
    console.log("🔧 Generating file\n");
    setTimeout(() => {
      fs.writeFile("README.md", content_file, (err) => {
        if (err) throw err;
      });
      console.log("\x1b[32m%s\x1b[0m",`✅ The file has been created in path ${my_path}`);
    }, 1000);
  }
}

module.exports = generate_readme;
