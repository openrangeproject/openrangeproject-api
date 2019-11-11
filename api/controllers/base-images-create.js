module.exports = {


  friendlyName: 'Base images create',


  description: 'Creates an image shell. Image file containing the operating system is uplaoded after creation',


  inputs: {
    name: {
      description: 'Common name for the image',
      type: 'string',
      required: true
    },
    description: {
      description: 'Description of the image (purpose, installed services, etc.)',
      type: 'string',
      required: true
    },
    os_name: {
      description: 'Name of the operating system (Windows, Ubuntu, RHEL, etc)',
      type: 'string',
      required: true
    },
    os_version: {
      description: 'Operating system version (7, 10, 18.04, etc.)',
      type: 'string',
      required: true
    },
    username: {
      description: 'Username use to login to the operating system',
      type: 'string',
      required: true
    },
    password: {
      description: 'Password for the username to login to the operating system',
      type: 'string',
      required: true
    }
  },


  exits: {
  },


  fn: async function (inputs) {
    console.log(this.req.param('name'))
    var createdImage = await BaseImages.create({
      name: this.req.param('name'),
      description: this.req.param('description'),
      os_name: this.req.param('os_name'),
      os_version: this.req.param('os_version'),
      username: this.req.param('username'),
      password: this.req.param('password')
    }).fetch();
    // All done.
    return createdImage;
  }
};
