require(`dotenv`).config();

const express = require(`express`);
const bodyParser = require(`body-parser`);
const methodOverride = require('method-override');

const routes = require(`./routes`);

const app = express();  

app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.get(`/`, (req, res) => {
    res.render(`users/index.ejs`);
})

app.use('/auth', routes.auth);
app.use(`/books`, routes.books);
app.use(`/users`, routes.users);

app.listen(process.env.PORT, () =>{
    console.log(`I am listening`);
})