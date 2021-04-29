// All rendering views controls are here
const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("Funcionando crack");
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard/dashboard')
});

//error response
/*
app.use(function(req, res, next) {
    res.status(404).render('404');
});
*/

module.exports = router;