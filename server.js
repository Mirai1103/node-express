const express =require("express");
const app = express();

app.set("view engine", "ejs")

app.get('/', (req, res) => {
        res.send('it works /')
})

app.get('/home', (req, res) => {
        res.render('home')
})
app.get('/about-us', (req, res) => {
        res.render('about-us')
})
app.get('/contact-us', (req, res) => {
        res.render('contact-us')
})

app.listen(3000);
console.log("running in port 3000")