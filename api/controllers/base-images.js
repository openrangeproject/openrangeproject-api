module.exports = {


  friendlyName: 'Base images',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    var images = await BaseImages.find()
    // All done.
    return images;

  }


};
