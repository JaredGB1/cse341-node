const testRoute1=(req, res) => {
    res.send("Hello 1");
  };
const testRoute2=(req, res) => {
    res.send("Hello 2");
  };
const testRoute3=(req, res) => {
    res.send("Hello 3");
  };  
module.exports = {
    testRoute1,
    testRoute2,
    testRoute3
};