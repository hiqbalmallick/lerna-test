//Load the library
const replace = require("replace-in-file");
const versionDoctor = require("./packages/doctor/package.json").version;
const versionPatient = require("./packages/patient/package.json").version;
const versionScheduler = require("./packages/scheduler/package.json").version;
// path for metro config file
const pathDoctor = "packages/doctor/lib/doctor.js";
const pathPatient = "packages/patient/lib/patient.js";
const pathScheduler = "packages/scheduler/lib/scheduler.js";
// creating options for editing the file
const options = [
  {
    files: pathDoctor,
    from: "__HOST_PACKAGE_VERSION__",
    to: versionDoctor,
  },
  {
    files: pathPatient,
    from: "__HOST_PACKAGE_VERSION__",
    to: versionPatient,
  },
  {
    files: pathScheduler,
    from: "__HOST_PACKAGE_VERSION__",
    to: versionScheduler,
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
