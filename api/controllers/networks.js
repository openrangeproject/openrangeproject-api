var libvirt = require("../../build/Release/openrangelibvirt");
var connString = "qemu:///system";

module.exports = {


  friendlyName: 'Networks',


  description: 'Networks something.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    console.log("Number of networks: " + libvirt.libvirtDo("virConnectListAllNetworks", connString));
    // All done.
    return;

  }


};
