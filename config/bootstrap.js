/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```
  await BaseImages.createEach([
    { name: "Ubuntu Server", description: "Barebones Ubuntu Linux Server", os_name: "Ubuntu", os_version: "18.04", file: '', username: "ubuntu", password: "ubuntu"},
    { name: 'Basic Linux Web Server', description: "Centos7 Apache Web Server", os_name: "Centos", os_version: "7", file: '', username: "root", password: "centos"},
    { name: "Windows Work Station", description: "Barebones Windows Workstaion", os_name: "Windows", os_version: "10", file: '', username: "administrator", password: "admin"},
  ]);

};
