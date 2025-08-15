import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './Config/Db_config.js';
import connectCloudinary from './Config/Coludnary_config.js';
import userRoute from './Routes/UserRoutes.js';
import productRoute from './Routes/ProductRoutes.js';
import CartRouter from './Routes/CartRoutes.js';
import orderRoute from './Routes/OrderRoutes.js';

//app config
const app = express();
const port = process.env.PORT || 3000;
connectDb();
connectCloudinary();

//middlewares
app.use(express.json());
app.use(cors());

//api end-points
app.use("/api/user",userRoute);
app.use("/api/products",productRoute);
app.use("/api/cart",CartRouter);
app.use("/api/order",orderRoute);


app.get('/',(req,res)=>res.send("Started server"));


app.listen(port,()=>console.log(`Server started at http://localhost:${port}`));



