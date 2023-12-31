const express = require("express");
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser')
require('dotenv').config()
require("./config/mongoose.config");
app.use(cors({credentials:true, origin:'http://localhost:5173'}));
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cookieParser())

require("./routes/user.routes")(app);
require("./routes/product.routes")(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));
