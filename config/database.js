module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "161.35.63.16"),
      port: env.int("DATABASE_PORT", 32852),
      database: env("DATABASE_NAME", "akcStrapi"),
      user: env("DATABASE_USERNAME", "root"),
      password: env("DATABASE_PASSWORD", "aka2100"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
