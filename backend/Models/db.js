const mongoose = require('mongoose')

const mongo_url = process.env.MONGO_URL

mongoose.connect(mongo_url)
    .then(() => {
        console.log('DB connected')
    }).catch((err) => {
        console.log('DB connection error', err)
    })