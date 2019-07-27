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

router.get('/:id', (req, res)=> {
  console.log('In ROUTER GET ID');
  const sqlText =  `SELECT movies.title , movies.description, genres.name, movies.id 
                    FROM "movie_genres"
                    JOIN "movies" ON "movies"."id" = "movie_genres"."movie_id"
                    JOIN "genres" ON "genres"."id" = "movie_genres"."genre_id"
                    WHERE "movies"."id" = $1;`;
  value = [req.params.id]                  

  pool.query(sqlText, value )
  .then((response)=>{
    
    res.send(response.rows[0])
  })
  .catch((error) => {
    res.sendStatus(500);
  })

  
})



module.exports = router;