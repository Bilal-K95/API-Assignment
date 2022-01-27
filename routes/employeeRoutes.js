const {
  postdata,
  getdata,
  putdata,
  deletedata,
} = require("../controller/empController");
const { body, validationResult } = require("express-validator");

const express = require("express");
const router = express.Router();

router.get("/get", async (req, res) => {
  res.send(await getdata());
});

router.post(
  "/post",
  body("name").isEmail,
  body("age").isLength({ min: 18 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      postdata(req.body);
      res.send("data added");
    }
  }
);

router.delete("/delete/:id", (req, res) => {
  deletedata(req.params.id);
  res.send("data deleted");
});

router.put("/put/:id", (req, res) => {
  putdata(req.params.id, req.body);
  res.send("updated data");
});

module.exports = router;
