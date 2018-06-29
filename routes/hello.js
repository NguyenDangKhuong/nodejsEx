var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/hello', function(req, res, next) {
//     res.render('hello', { title: 'Hello' });
// });

router.get('/hello', function(req, res){
    res.send("Hello World!");
});

// // router.get('/hello/:id', function(req, res){
// //   res.send('The id you find is' + req.params.id)
// // })
//
// router.get('/hello/:name/:id', function(req, res){
//     res.send('Hello Mr:' +req.params.name+ 'with id:' + req.params.id)
// })
//
// //using regex, must insert id > 5 to have a valid id
// router.get('/hello/:id([0-9]{5})', function(req, res){
//     res.send('id valid with regex condition:' + req.params.id);
// });
//
// //Other routes here
// router.get('*', function(req, res){
//     res.send('Sorry, this is an invalid URL.');
// });


module.exports = router;