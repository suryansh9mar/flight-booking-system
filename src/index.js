const express = require('express');
const {serverConfig}  = require('./config');
const apiRourtes = require('./routes');
const app = express();

app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on port ${serverConfig.PORT}`);

});
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api',apiRourtes);