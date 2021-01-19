const { Router } = require('express');
const router     = Router();

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Цифровой профиль муниципалитета',
        isHome: true,
    });
})

module.exports = router;
