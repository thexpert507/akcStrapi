module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c2e0f0ef5788b4c6da082ee5acaefe89'),
  },
});
