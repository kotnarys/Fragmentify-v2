module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/Index",
        permanent: true,
      },
    ];
  },
};
