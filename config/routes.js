/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  'GET /': 'home',
  'GET /base_images': 'base-images',
  'POST /base_images': 'base-images-create',
  'GET /base_images/:id': 'base-images-detail',
  'PUT /base_images/:id': 'base-images-update',
  'POST /base_images/:id/upload': 'base-image-uploads',
  'GET /networks': 'networks',
  'POST /networks': 'networks-create',
  'GET /networks/:id': 'networks-detail',
  'PUT /networks/:id': 'networks-update',
  'GET /machines/vms': 'vms',
  'GET /machines/vms/:id': 'vms-detail',
  'POST /machines/vms/create': 'vms-create',
  'POST /machines/vms/:id/update': 'vms-update',
  'GET /machines/vms/:id/interfaces': 'vms-interfaces',
  'POST /machines/vms/:id/interfaces/create': 'vms-interfaces-create',
  'DELETE /machines/vms/:id/interfaces/:ifid/delete': 'vms-interfaces-delete'



  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
