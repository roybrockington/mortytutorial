// Target the div where results should be shown
const results = document.getElementById("results")

// Choose character IDs to getElementById
const randomArray = (length, max) => 
  Array(length).fill().map(() => Math.round(Math.random() * max))


// Set API URL from where to fetch data
let api = `https://rickandmortyapi.com/api/character/${randomArray(4, 40)}`

// Function that runs when the button is pressed
const findCharacters = async () => {

  // Show in the console that the button is working correctly
  console.log('Button triggered!')

  // Fetch the JSON data from the API
  const response = await fetch(api)
  const data = await response.json()

  // Show the raw data that has been fetched in the console
  console.log(data)

  // Format the data for each result captured using a dynamic "template literal"
  const mappedCharacters = data.map((character, index) => {

    return `<div class="character" key="{index}"> 
             <div class="attributes">
             <p class="name">${index + 1}. ${character.name}</p>
             <img class="avatar" src="${character.image}"/>
             </div>
            </div>`
      }).join('') // Remove automatic comma delimiter

  // Insert the new character HTML into the 'results'
  results.innerHTML = mappedCharacters

  // Add reset button to bottom of results
  const resetButton = document.createElement('button')
  resetButton.textContent = 'Clear results'
  resetButton.onclick = () => clearCharacters() // Add function to run when clicked
  results.appendChild(resetButton)
}

// Function to clearing the results element
const clearCharacters = () => {
  results.innerHTML = ''
  api = `https://rickandmortyapi.com/api/character/${randomArray(4, 40)}`

}
