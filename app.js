// NPM -> Global cammond, comes with node
// npm --version

// local dependency -> use it only in this particular project

// global dependency - use it any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual apporach (crate package.josn in the root, create properties ect)
// npm init (step by stem, press enter to skip)
// nmp init -y (everything default)

const _ = require('loadash');
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);