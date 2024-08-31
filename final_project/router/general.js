const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
   // Send JSON response with formatted users data
    res.send(JSON.stringify(users,null,4));
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here 
  // Retrieve the public_users parameter from the request URL and send the corresponding booklist details
  const public_users = req.params.public_users;
  res.send(books[public_users]);
  return res.status(300).json({message: "Yet to be implemented"});
});

//SAMPLE SOLUTION CODE router.get
router.get('/:email', function(req, res) {
    // Retrieve the email parameter from the request URL and send the corresponding friend's details
    const email = req.params.email;
    res.send(friends[email]);
});


// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
 // Retrieve the public_users parameter from the request URL and send the correspondingbooklist details
 const public_users = req.params.public_users;
 res.send(books[isbn]);
 return res.status(300).json({message: "Yet to be implemented"});
});

 
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});

   // Retrieve the public_users parameter from the request URL and send the correspondingbooklist details
 const public_users = req.params.public_users;
 res.send(books[isbn]);
 return res.status(300).json({message: "Yet to be implemented"});
});
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});

   // Retrieve the public_users parameter from the request URL and send the correspondingbooklist details
 const public_users = req.params.public_users;
 res.send(books[isbn]);
 return res.status(300).json({message: "Yet to be implemented"});
});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});

   // Retrieve the public_users parameter from the request URL and send the correspondingbooklist details
 const public_users = req.params.public_users;
 res.send(books[isbn]);
 return res.status(300).json({message: "Yet to be implemented"});
});
});

module.exports.general = public_users;
