const util = require('util')

module.exports = {


  friendlyName: 'Base Image Upload',


  description: 'Handles the large KVM image upload',

  files: ['file'],

  inputs: {
    id: {
      description: "Id of the base image to attach this upload to.",
      type: 'number',
      required: true
    },
    file: {
      example: '===',
      required: true
    }
  },

  exits: {

  },

  // TODO: Validate filename and image id are safe
  // TODO: Verify file type is a kvm compatible image
  // TODO: If the image already has an upload, reject any others until the current download is deleted.
  fn: async function (inputs) {
    id = parseInt(this.req.param('id'));
    directory = '/tmp';
    filename = inputs.file._files[0].stream.filename;
    inputs.file.upload({
      maxBytes: 10000000000,
      saveAs: filename,
      dirname: directory
    },
      async (err, uploadedFiles) => {
        var update = await BaseImages.updateOne({id: id})
        .set({
          file: directory + '/' + filename,
          file_size: uploadedFiles[0].size
        });

        if(update){
          console.log(update)
        } else {
          console.log(update)
        }
        console.log(uploadedFiles)
      });
    // All done.
    return inputs;
  }


};
