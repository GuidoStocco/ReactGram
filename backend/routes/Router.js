const express = require("express");
const router = express();

//API TESTE
router.get("/", (req, res) => {
    res.send("API working");
});


module.exports = router;