// 'use strict';

/**
 * contact router
 */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::contact.contact');

'use strict';

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::contact.contact', {
  routes: [
    {
      method: 'POST',
      path: '/contact',
      handler: 'contact.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
});
