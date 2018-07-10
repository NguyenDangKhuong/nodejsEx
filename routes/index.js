var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log("nhan mot get req ve Homepage")
  res.send('Hello get')
});

// Phuong thuc post() phan hoi mot POST Request ve Homepage
// router.post('/', function(req, res) {
//     console.log("Nhan mot POST Request ve Homepage");
//     res.send('Hello POST');
// });
//
// // Phuong thuc delete() phan hoi mot DELETE Request ve /del_user page.
// router.delete('/del_user', function (req, res) {
//     console.log("Nhan mot DELETE Request ve /del_user");
//     res.send('Hello DELETE');
// })
//
// // Phuong thuc nay phan hoi mot GET Request ve /list_user page.
// router.get('/list_user', function (req, res) {
//     console.log("Nhan mot GET Request ve /list_user");
//     res.send('Page Listing');
// })
//
// // Phuong thuc nay phan hoi mot GET Request ve abcd, abxcd, ab123cd, ...
// router.get('/ab*cd', function(req, res) {
//     console.log("Nhan mot GET request ve /ab*cd");
//     res.send('Page Pattern Match');
// })
//
// router.get('/hello', function(req, res){
//     res.send("Hello World!");
// });

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
