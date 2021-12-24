module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-54-235-79-88.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'akcStrapi'),
      user: env('DATABASE_USERNAME', 'oroywksbzqcbuo'),
      password: env('DATABASE_PASSWORD', '8c5fdb64dce20da7936659c5472389b95d25a49a1ba597fc9547a515a2ee6b41'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
