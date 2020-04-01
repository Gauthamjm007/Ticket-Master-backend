const User = require("../models/user");

module.exports.list = (req, res) => {
  User.find()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.json({});
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.create = (req, res) => {
  const body = req.body;
  const user = new User(body);
  user
    .save()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  User.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete(id)
    .then((user) => {
      user ? res.json(user) : res.json({});
    })
    .catch((err) => {
      res.json(err);
    });
};
