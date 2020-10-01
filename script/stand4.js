const definition =  function (word, displayElem){
  let defsBad ='https://www.stands4.com/services/v2/defs.php?uid=8018&tokenid=Fq9JjFM6sNuGbpL9&word=consistent&format=json'
  // this is incorrect

  let defs = 'https://www.abbreviations.com/services/v2/defs.php?uid=8018&tokenid=Fq9JjFM6sNuGbpL9&format=json&word='+ word;
  console.log(url)

  let quotes ='https://www.abbreviations.com/services/v2/quotes.php?uid=8018&tokenid=Fq9JjFM6sNuGbpL9&format=json&word=book'

  let lyrics ='https://www.abbreviations.com/services/v2/lyrics.php?uid=8018&tokenid=Fq9JjFM6sNuGbpL9&format=json&term=love'

  let poetry ='https://www.abbreviations.com/services/v2/poetry.php?uid=8018&tokenid=Fq9JjFM6sNuGbpL9&format=json&term=travel'
/*
  let res = await fetch (url)
  let defs = await res.json()
  let result = defs.result
  console.log(result[0])
  */
 
  debugger
  fetch(defs)
   .then(res => res.json())
   .then(data => data.result)
   .then(function(rest) { 
      console.log("Result in json: " + rest)
      displayElem.innerText = 'Result= ' + rest[0].definition; 

      })
   .catch(function(error) {
      console.log(error);
    });

}