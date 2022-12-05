const express= require('express');
const app= express();
const port=8000;

//set up the view engine
app.set('view engine','ejs');
app.set('views', './views');

//use express router
app.use('/',require('./routes'));



app.listen(port,function(err){
if(err){
    console.log(`Error in running the server: ${port}`);
}
console.log(`Server is running on port: ${port}`);
});
