module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'stranger--questions',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
