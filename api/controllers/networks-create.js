var libvirt = require("../../build/Release/openrangelibvirt");

var connString = "qemu:///system";

module.exports = {


  friendlyName: 'Networks create',


  description: '',


  inputs: {
    name: {
      description: 'Common name for the network', // Must be unique
      type: 'string',
      required: true
    },
    description: {
      description: 'Description of the network',
      type: 'string',
      required: true
    },
    cidr: {
      description: 'CIDR range for the network',
      type: 'string',
      required: true
    }

  },


  exits: {

  },


  fn: async function (inputs) {
    console.log("I am here!!!");
    xml = `<network>
      <name>60net-Team02</name>
      <forward mode='route'/>
      <ip family='ipv4' address='10.0.2.1' prefix='24'>
        <dhcp>
          <range start='10.0.2.2' end='10.0.2.254'/>
        </dhcp>
      </ip>
    </network>`
    // All done.
    libvirt.libvirtDo("virNetworkCreateXML", connString, xml);
    return;

  }


};
