module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'answer-my-question',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
