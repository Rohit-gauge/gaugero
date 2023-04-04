module.exports = ({ env }) => ({
    // ...
    plugins: {
      email: {
        provider: "smtp",
        providerOptions: {
          host: env("SMTP_HOST"),
          port: env("SMTP_PORT", 587),
          secure: false,
          username: env("SMTP_USERNAME"),
          password: env("SMTP_PASSWORD"),
          rejectUnauthorized: true,
          requireTLS: true,
          connectionTimeout: 5000,
        },
        settings: {
          defaultFrom: "no-reply@example.com",
          defaultReplyTo: "support@example.com",
        },
      },
      // ...
    },
    // ...
  });
  
  