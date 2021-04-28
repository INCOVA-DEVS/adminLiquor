//All rendering views control are here.
const router = require('express').Router();

router.get('/',(req, res) => {
    res.send("Funciona we")
});

module.exports = router;