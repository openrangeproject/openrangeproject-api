module.exports = {


  friendlyName: 'Base images detail',


  description: '',


  inputs: {
    id: {
      description: "Id of the desired",
      type: 'number',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    id = parseInt(this.req.param('id'))
    var image = await BaseImages.findOne({ id: id })
    // All done.
    return image;

  }


};
