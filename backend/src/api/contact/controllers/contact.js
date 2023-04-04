// 'use strict';


// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::contact.contact');

'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact.contact', {
  async create(ctx) {
    return await strapi
      .service('api::contact.contact')
      .create(ctx.request.body);
  },
});
