const Employee = require("../models/employee");

module.exports.list = (req, res) => {
  Employee.find()
    .populate("department")
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  Employee.findById(id)
    .populate("department")
    .then((employee) => {
      if (employee) {
        res.json(employee);
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
  const employee = new Employee(body);
  employee
    .save()
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Employee.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Employee.findByIdAndDelete(id)
    .then((employee) => {
      employee ? res.json(employee) : res.json({});
    })
    .catch((err) => {
      res.json(err);
    });
};
