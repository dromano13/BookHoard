require(`dotenv`).config();

const express = require(`express`);
const bodyParser = require(`body-parser`);
const methodOverride = require('method-override');

const routes = require(`./routes`);

const app = express();  

app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.use('/auth', routes.auth);
app.use(`/fruits`, routes.books);
app.use(`/users`, routes.users);

app.listen(process.env.PORT, () =>{
    console.log(`I am listening`);
})