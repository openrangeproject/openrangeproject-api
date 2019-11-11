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
    mode: {
      description: 'Network routing mode',
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
    badCidr: {
      statusCode: 400,
      description: "CIDR notation is not valid"
    }
  },


  fn: async function (inputs) {
    console.log("...Building new network.");
    
    // Check if cidr is a valid cidr notation
    const regex = '^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}\\/(3[0-2]|[12]?[0-9])$';
    const cidr = new RegExp(regex)
    if(!cidr.test(this.req.param('cidr'))) throw 'badCidr';
    
    

    console.log("Number of networks: " + libvirt.libvirtDo("virConnectListAllNetworks", connString));
    xml = `<network>
      <name>` + this.req.param('name') + `</name>
      <forward mode='` + this.req.param('mode') + `'/>
      <ip family='ipv4' address='10.0.2.1' prefix='24'>
        <dhcp>
          <range start='10.0.2.2' end='10.0.2.254'/>
        </dhcp>
      </ip>
    </network>`
    // All done.
    libvirt.libvirtDo("virNetworkDefineXML", connString, xml);
    return;

  }


};
