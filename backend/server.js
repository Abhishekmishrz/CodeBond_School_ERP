const express = require("express");
const errorHandeler = require("./middleware/errorHandelr");
const connectDb= require("./config/dbConnection");
<<<<<<< HEAD
=======
const cors = require('cors');
>>>>>>> 3c13f692b9f231ada8433d8752ec2236dc1761ef

const dotenv = require("dotenv").config()
const app =express();
const port =process.env.PORT || 5000;

<<<<<<< HEAD
connectDb();

app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"))
app.use("/api/users",require("./routes/userRoutes"))
=======
const corsOptions={
	origin:'http://localhost:3000',
	methods: "GET,PUT,POST,DELETE",
};
app.use(cors(corsOptions));


connectDb();

  

app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"))
app.use("/",require("./routes/userRoutes"))
>>>>>>> 3c13f692b9f231ada8433d8752ec2236dc1761ef
app.use(errorHandeler);


app.listen(port,()=>{
    console.log(`Server running on the port ${port}`); 
})
