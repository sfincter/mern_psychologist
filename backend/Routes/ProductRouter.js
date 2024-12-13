const ensureAuthenticated = require('../Middlewares/Auth')

const router = require('express').Router()

router.get('/', ensureAuthenticated, (req, res) => {
    console.log('logged', req.user)
    res.status(200).json([
        {
            name: 'mobile',
            price: 4000
        },
        {
            name: 'iphone',
            price: 2500
        }
    ])
})

module.exports = router