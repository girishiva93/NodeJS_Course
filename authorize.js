// yesle first ma check garxa ani matra vanxa thick xa ke nai banera

const authorize = (req, res, next) => {
  const { user, id } = req.query;
  if (user == "shiva" && id == 1) {
    console.log("Welcome");
    next();
  } else {
    res
      .status(401)
      .send("Khai sir hajur ko user id ra user name nai xaina raixa ");
  }
};

module.exports = authorize;
