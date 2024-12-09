var express = require('express');
var router = express.Router();

// GET route to render the calculator page
router.get('/', function(req, res) {
  res.render('arithmetic-calc', { title: 'Arithmetic Calculator', display: '' });
});

// POST route to handle button presses
router.post('/', function(req, res) {
  let display = req.body.display || ''; // Get the current display value
  const buttonPressed = req.body.button; 

  // Handle button presses
  if (buttonPressed === 'C') {
    display = ''; 
  } 
  else if (buttonPressed === '%') {
    try {
      // Extract all numbers in the original expression (before evaluation)
      const num = display.match(/-?\d+(\.\d+)?/g).map(Number);

      const result = eval(display);

      const temp = result / num.length;

      display = temp;
    } catch (e) {
      display = 'Error'; 
    } 
  } 
  else if (buttonPressed === '=') {
    // Evaluate the expression in the display if '=' is pressed
    try {
      display = eval(display); 
    } catch (e) {
      display = 'Error'; 
    }
  } else {
    
    display += buttonPressed;
  }

  // Re-render the page with the updated display value
  res.render('arithmetic-calc', { title: 'Arithmetic Calculator', display });
});

module.exports = router;
