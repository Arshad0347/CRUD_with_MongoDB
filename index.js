const PORT=5500;
const express =require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const {engine} = require('express-handlebars');
const connectDB = require('./models/db');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
connectDB();

app.get('/', (req, res) => {
    res.render('home');
});


app.use('/emp', require('./controllers/routes'));
app.use('/emp', require('./controllers/routes'));


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
});