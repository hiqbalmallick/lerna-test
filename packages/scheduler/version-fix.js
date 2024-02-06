//Load the library
const replace = require("replace-in-file");
const version = require("./package.json").version;
// path for metro config file
const path = "lib/scheduler.js";
// creating options for editing the file
const options = [
  {
    files: path,
    from: "__HOST_PACKAGE_VERSION__",
    to: version,
  },
];

try {
  let results;
  // looping on each option
  options.forEach((e) => {
    results = replace.sync(e);
    console.log('Replacing "' + e.from + '" by "' + e.to);
  });
} catch (error) {
  console.error("Error occurred:", error);
}
