//Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
  // const choice = document.querySelector('input').value

// }


  document.querySelector('button').addEventListener('click', getFate)



  function getFate(){
    const userPick = document.querySelector('input').value
  const url = `https://fakestoreapi.com/products/${userPick}`
  document.querySelector('h1').style.display = 'block'
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.category)
        document.querySelector('img').src = data.image
        document.querySelector('h2').innerText = data.category
        document.querySelector('h3').innerText = data.title
        document.querySelector('p').innerText = data.description
        document.querySelector('span').innerText = data.price
        
        const magicSt = userPick * Math.random()
        console.log(magicSt)
        if( magicSt <= userPick * 0.5){
          document.querySelector('h1').innerText = 'YOU LOST THIS AMAZING PRICE'
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
    }
//pick a number. If that number multiplied by math.random is < the number multiplied by 0.5 you won. then it will display the gift at the index picked