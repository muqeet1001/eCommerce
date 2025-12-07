import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb  from './conf/mongodb.js'

//App confiq
const app = express();
const port = process.env.port || 4000;
connectDb();


//middleware
app.use(express.json());
app.use(cors());

//api endpoint
app.get('/', (req, res) => {
    res.send("API Working");
})


app.listen(port, () => console.log("server is running bro"));

