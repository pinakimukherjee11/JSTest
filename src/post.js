var postHelper = require('../posts/postHelper')


function getPostDetails(post)  {


  var result = postHelper.getPostByCriteria(post);// query to db

  console.log('result is', result);
 // result.title = result.title + ' - Woolha';
  return result;

};



module.exports= getPostDetails;