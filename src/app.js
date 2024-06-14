import express from 'express'

const app = express();

// app.use(cors({
//     origin: process.env.CORS_ORIGIN
// }))
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(cookieParser())



app.use('/api/v1/test', (req, res) => {
    res.send({
        testingAPI: "working"
    })
})



export { app } 