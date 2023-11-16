// nodeJS mostly for backend

// import fs --> file system
// use writeFileSync to write a json file
// same with `homepage = '...'` in package.json

const fs = require('fs');
const packageJson = require('./package.json');

const setHomepage = () => {
    packageJson.homepage = 'https://shanshan-sg5507.github.io/final_project/';
    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
};

setHomepage();

