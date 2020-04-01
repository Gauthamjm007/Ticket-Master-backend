const express = require("express");
const userController = require("../app/controllers/userControllers");
const customerController = require("../app/controllers/customerControllers");
const departmentController = require("../app/controllers/departmentControllers");
const employeeController = require("../app/controllers/employeeControllers");
const ticketController = require("../app/controllers/ticketControllers");
const router = express();

router.get("/users", userController.list);
router.get("/user/:id", userController.show);
router.post("/user", userController.create);
router.put("/user/:id", userController.update);
router.delete("/user/:id", userController.destroy);

router.get("/customers", customerController.list);
router.get("/customer/:id", customerController.show);
router.post("/customer", customerController.create);
router.put("/customer/:id", customerController.update);
router.delete("/customer/:id", customerController.destroy);

router.get("/departments", departmentController.list);
router.get("/department/:id", departmentController.show);
router.post("/department", departmentController.create);
router.put("/department/:id", departmentController.update);
router.delete("/department/:id", departmentController.destroy);

router.get("/employees", employeeController.list);
router.get("/employee/:id", employeeController.show);
router.post("/employee", employeeController.create);
router.put("/employee/:id", employeeController.update);
router.delete("/employee/:id", employeeController.destroy);

router.get("/tickets", ticketController.list);
router.get("/ticket/:id", ticketController.show);
router.post("/ticket", ticketController.create);
router.put("/ticket/:id", ticketController.update);
router.delete("/ticket/:id", ticketController.destroy);

module.exports = router;
