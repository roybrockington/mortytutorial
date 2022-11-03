// Target the div where results should be shown
const results = document.getElementById("results")

// Set API URL from where to fetch data
const api = 'https://rickandmortyapi.com/api/character/[1,2,3,4]'

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
             <div class="name">
             <p>${index + 1}. ${character.name}</p>
             <img src="${character.image}"/>
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
}
