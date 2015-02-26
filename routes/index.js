var projects = require("../projects.json")
/*
 * GET home page.
 */

exports.view = function(req, res){
  // Here you should implement your random landing page rendering functionality
  var x = Math.random();
  console.log(x);
  if(x>0.5){
  	res.render("index_alternate",projects);
  }else{
  res.render("index", projects);
}};