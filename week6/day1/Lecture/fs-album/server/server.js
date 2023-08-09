const express = require("express");
const cors = require('cors')
const app = express();
require("./config/mongoose.config");
    
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors({origin:'http://127.0.0.1:5173'}))
const albumRoutes = require("./routes/album.routes");
albumRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));
