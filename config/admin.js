module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cf73e7310b1d2325854703583cc8ca15'),
  },
});
