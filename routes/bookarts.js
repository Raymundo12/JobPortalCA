const express = require('express')
const Book= require('../models/books')//books is where my schema is
const router = express.Router()

//this call view/bookart/new 
router.get('/new', (req, res) => {
    res.render('bookart/new', {part: new Book() })//book input is passed to the database collection model.
})

router.get('/edit/:id', async (req, res) => {// defining new route to edit 
  const part = await Book.findById(req.params.id) // passing the user selected id to the database collection and the document is found using 
  // id and render to the edit page all the user selected id's data.
  res.render('bookart/edit', { part: part })
})


router.get('/:id', async (req, res) => {// getting a car part details from database collection using id
  const part = await Book.findById()
  if (part == null) { // checking if part is null. if true sending a status code 404 and a error message.
 return res.status(404).json({message: 'Cannot find Book by id'})
  } 
  res.redirect('/')// redirect user to the homepage after the id is found
   
})

// creating new record.
// post is used to create a new record with the information submited in the user in the form.
router.post('/', async (req, res, next) => {
  req.part = new Book() // this is passed on to the database schema and new record is created.
  next()
  }, saveBooktAndRedirect('new')) // calling the function to create new record


// put is used to update a record in the collection
// a put request is sent using the document id to the database and the document 
router.put('/:id', async (req, res, next) => { 
  req.part = await Book.findById(req.params.id) // finding the document with the help of id request by user.
  next()

}, saveBooktAndRedirect('edit')) // calling the function to edit the document




//delete request is used to deleted a document
router.delete('/:id', async (req, res)=> {  // getting the document id from the user
    await Book.findByIdAndDelete(req.params.id)// finding the document and deleting the document from the collection
  res.redirect('/#Audiobook')// rediricting the user to products page.


})


function saveBooktAndRedirect(path) { // this function is used to pass all the user input to schema to create/ update
  return async (req, res) => {
    let part = req.part
    part.item = req.body.item
    part.price = req.body.price
    part.name = req.body.name
    
    try {
      part = await part.save() // everything is saved to the Rest database collection

     res.redirect(`/#Audiobook`)// redirect user to the product page .
    } catch (e) {
 
 return res.status(400).json({message: 'Ops! Validation fail for the request'}) // sending a status code 400 if we have a bad request.
    }
  }
}






module.exports = router