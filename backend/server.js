import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb  from './conf/mongodb.js'
import connectCloudinary from './conf/cloudinary.js';
import userRouter from './routes/userRoute.js';
import ProductRouter from './routes/productRoute.js';

//App confiq
const app = express();
const port = process.env.port || 4000;
connectDb();
connectCloudinary();

//middleware
app.use(express.json());
app.use(cors());

//api endpoint
app.use('/api/user',userRouter);
app.use('api/product',ProductRouter);

app.listen(port, () => console.log("server is running bro"));

