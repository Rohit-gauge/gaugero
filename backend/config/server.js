
module.exports = ({ env }) => ({
  load: {
    before: ['timer', 'responseTime', 'logger', 'cors', 'responses', 'gzip'],
    after: ['parser', 'router'],
  },
  settings: {
    cors: {
      enabled: true,
      origin: '*',
      headers: ["Content-Type", "Authorization"],
      expose: ["WWW-Authenticate", "Server-Authorization"],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    },
  },
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
