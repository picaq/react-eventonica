var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.post('/users', (req, res) => {
  eventonica.addUser(res.body).then(() => res.sendStatus(204));
});
module.exports = router;
