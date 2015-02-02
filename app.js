var express = require('express')
, load = require('express-load')
, app = express();

console.log("\nCarregando:");

// CookieParser
var cookieParser = require('cookie-parser');
app.use(cookieParser('ntalk'));

// Session tem que instalar
var session = require('express-session');
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

// Method-override
var methodOverride = require('method-override');
app.use(methodOverride('X-HTTP-Method'))          // Microsoft
app.use(methodOverride('X-HTTP-Method-Override')) // Google/GData
app.use(methodOverride('X-Method-Override'))      // IBM

load('models')
.then('controllers')
.then('routes')
.into(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use("/stylesheets", express.static(__dirname + '/public/stylesheets')); 
app.use(express.static(__dirname + '/public'));

app.listen(3000, function(){
	console.log("\n");
    console.log("_________Ntalk no ar_________");
});