const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/' , (req, res) => {

  console.log('Hitting the GET ROUTE to GET MOVIES');

  const sqlText = `SELECT * FROM "movies"`;
  pool.query(sqlText)
  .then((response)=>{
    res.send(response.rows)
  }).catch((error)=>{
    console.log('Error with getting Movies from DataBase', error);
    res.send(500);
    
  })

  
}) // end GET ROUTE



module.exports = router;