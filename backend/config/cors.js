module.exports = {
    settings: {
      cors: {
        enabled: true,
        headers: '*',
        expose: ['WWW-Authenticate', 'Server-Authorization'],
        maxAge: 31536000,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
        origins: ['*'],
      },
    },
  };
  