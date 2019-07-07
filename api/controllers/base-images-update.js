module.exports = {


  friendlyName: 'Base images update',


  description: '',


  inputs: {
    id: {
      description: "Id of the image to be updated",
      type: "number",
      required: true
    },
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
    var update = await BaseImages.updateOne({id: parseInt(this.req.param('id'))})
    .set({
      name: this.req.param('name'),
      description: this.req.param('description'),
      os_name: this.req.param('os_name'),
      os_version: this.req.param('os_version'),
      username: this.req.param('username'),
      password: this.req.param('password'),
    });

    // All done.
    return update;

  }


};
