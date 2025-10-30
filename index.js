const fs = require('fs');

const username = "Unknownzop";
const skills = ["js","ts","html","css"];
const discord = "https://discord.com/users/1092773378101882951";
const email = "editunknownnz@gmail.com";

// Generate skill icons HTML
const skillIcons = skills.map(skill => 
  `<img src="https://skillicons.dev/icons?i=${skill}" height="80" alt="${skill} logo" />\n  <img width="15" />`
).join('');

// Create README content
const readme = `
<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&pause=1000&color=00F7FF&center=true&vCenter=true&width=600&lines=${username};Tech+Enthusiast+from+India;Always+Learning;Always+Building" alt="Typing SVG" />
</p>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=${username.toLowerCase()}&color=0e75b6&style=flat-square" alt="Profile Views" />
</p>

<p align="center">
  <strong style="font-size: 28px;">I KNOWS</strong>
</p>

<div align="center"> 
  ${skillIcons}
</div>

###

<div align="center">
  <a href="${discord}" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Discord&logo=discord&label=&color=7289DA&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="discord logo"  />
  </a>
  <a href="mailto:${email}" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Gmail&logo=gmail&label=&color=D14836&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="gmail logo"  />
  </a>
</div>
`;

// Write to README.md
fs.writeFileSync('README.md', readme);
console.log("README.md generated!");
