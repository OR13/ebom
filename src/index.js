const exitCodes = {
  success: 0,
};

const generate = async (options = {}) => {
  console.log("generate called with options", options);
  return exitCodes.success;
};

module.exports = { generate };
