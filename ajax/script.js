// alert("script linked")

const URL = "https://pokeapi.co/api/v2/pokemon/"
const resultDiv = document.querySelector('#pokeResult')
const nameInput = document.querySelector('#pokeName')


function getPoke(event){
    event.preventDefault()
    console.log("button clicked")
    resultDiv.innerHTML = "Loading....."
    fetch(URL + nameInput.value)
        .then(res => res.json() )
        .then(data => {
            console.log(data)
            console.log('during')
            resultDiv.innerHTML = `
                <h3> Poke No: ${data.id} ${data.name}</h3>
                <img src='${data.sprites.front_default}' alt='${data.name}'>
            `
        })
        .catch(err => {
            resultDiv.innerHTML = "Not found"
        })
    console.log(data)
    console.log('after')
}

async function randomPoke(){
    console.log("random clicked")
    let rand = Math.floor(Math.random() * 900)
    let res = await fetch(URL + rand)
    console.log('rand during')
    let data = await res.json()
    console.log(data)
    resultDiv.innerHTML = `
        <h3> Poke No: ${data.id} ${data.name}</h3>
        <img src='${data.sprites.front_default}' alt='${data.name}'>
    `
    console.log('rand after')
}