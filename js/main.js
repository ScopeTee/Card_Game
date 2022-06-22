const p1_Score = document.getElementById('player1_Score')
const p2_Score = document.getElementById('player2_Score')
// let cards = document.querySelector('.drawCard').addEventListener('click', randomNum)
document.querySelector('.reset').addEventListener('click', newGame)
document.getElementById("mainBody").style.display= "none"

// Let Player and Bot Score Value be Empty on Start
p1_Score.innerText = localStorage.getItem('Player 1')
p2_Score.innerText = localStorage.getItem('Player 2')

// Start a New Game
document.querySelector('.reset').addEventListener('click', function newGame(){
//Clear localstorage
  localStorage.clear()
// Make Status segment empty
  document.getElementById('status').innerText = ' '
// Reset Score to Default
  let default_score = 0
// Put Default Score into DOM
  p1_Score.innerText = default_score
  p2_Score.innerText = default_score
})

//Get the deck
let deckId = ''

// Click Event on Proceed Button
  document.querySelector("#proceed").addEventListener("click", () => {
  fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(res => res.json()) // parse response as JSON
        .then(data => {
          deckId = data.deck_id
          console.log(deckId)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
// Start New Game on Click Event
   newGame()
// Get Opponent (BOT) username on Click Event
      botUsername()
// Remove a segment of the Dom on Click
      document.getElementById("preForm").style.display= "none"
      // document.getElementById("footer").style.display= "none"
// Add a Player Name Function
 playerUsername()

  })

function playerUsername() {
// Store input Value into Variable
      let username = document.getElementById("username").value
// Conditionals
// Check IF input field is NOT empty 
      if(username !== ''){  
//   Run this Code
        document.getElementById("mainBody").style.display= "block"
// Player Name in Local Storage should Equal Value from the Input Field
        let name = username
// Set a local storage to hold Player Name
        localStorage.setItem('Player Name', name) 
// Conditionals
// check IF Player Name length is less than or equals 8 characters  
            if (localStorage.getItem('Player Name').length <= 8){
//   Run this Code
            document.getElementById("user").innerText = localStorage.getItem('Player Name') 
// If Player Name length is More than 8 characters, only display the first 8 characters
            } else {
//   Run this Code
              document.getElementById("user").innerText = localStorage.getItem('Player Name').substr(0, 8)
            }
      }
// Check IF input field is empty 
      else {
//   Run this Code
        alert ('Empty Field')  
        document.getElementById("preForm").style.display= "block"
      }
    }

    function newGame(){
      localStorage.clear('Player 1')
      document.getElementById('status').innerText = ' '
      let default_score = 0
      p1_Score.innerText = default_score
      p2_Score.innerText = default_score
      document.querySelector('.chek').innerText = ''
      document.getElementById('chek2').innerText = ''
    }

    // function countdown(){
    //   setTimeout(() => {
    //           console.log('3')
    //           document.querySelector('.chek').innerText = 3
    
    //           setTimeout(() => {
    //             console.log('2')
    //             document.querySelector('.chek').innerText = 2
        
    //             setTimeout(() => {
    //               console.log('1')
    //               document.querySelector('.chek').innerText = 1
        
    //               setTimeout(() => {
    //                 console.log('READY?')
    //                 document.querySelector('.chek').innerText = 'Ready?'
        
    //                 setTimeout(() => {
    //                   document.querySelector('.chek').innerText = ' '
    //                   // document.querySelector('#player1').src = data.cards[0].image
        
    //                 }, 3000)
    //               }, 2500)
    //             }, 2000)
    //           }, 1500)
    //         }, 1000)
    // }

// Click Event on 'Draw Card' Button
document.querySelector('.drawCard').addEventListener('click', getFetch)

function getFetch(){
// Put Api Url into a variable
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

// Load Url on CLick
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
// log data into the browser console
        console.log(data)
// Put Card Values in Numbers and store in a Variable
        let val1 = Number(cardValue( data.cards[0].value ))
        let val2 = Number(cardValue( data.cards[1].value ))
// Image Section of the DOM empty
        document.querySelector('#player1').src = ' '
        document.querySelector('#player2').src = ' '

// Load Opponent Image Immediately
        document.querySelector('#player2').src = data.cards[1].image
// Load Player Image after CountDown is Complete
        countdown()
        setTimeout(() => {
          // document.querySelector('.chek').innerText = ' '
          document.querySelector('#player1').src = data.cards[0].image
        }, 3000)


// CONDITIONALS
// Check IF the Value of Player Card is greater than bot card Value
        if(val1 > val2){
  // Run this Code
  // Turn Player Score from Local storage to Number and store in a variable
          let default_score1 = Number(localStorage.getItem('Player 1'))
// Increase Player Score by 1
                default_score1 +=1
// Save Player 1 Score in Local Storage
                localStorage.setItem('Player 1' , default_score1)
// Show that Player 1 wins and Update ScoreBoard after 11 seconds
                    setTimeout(() => {
                              document.getElementById('status').innerText = `${localStorage.getItem('Player Name')} Wins`
                              p1_Score.innerText = localStorage.getItem('Player 1')
                      
                            }, 11000) 

// Check IF the Value of Player Card is less than bot card Value

        }else if(val1 < val2){
    // Run this Code
    // Turn Bot Score from Local storage to Number and store in a variable
          let default_score2 = Number(localStorage.getItem('Player 2'))
// Increase Bot Score by 1
                default_score2 +=1
// Save Bot Score in Local Storage
                localStorage.setItem('Player 2' , default_score2)
// Show that Bot wins and Update ScoreBoard after 11 seconds 
                  setTimeout(() => {
                    document.getElementById('status').innerText = `${localStorage.getItem('Computer')} Wins`
                    p2_Score.innerText = localStorage.getItem('Player 2')    
                  }, 11000)             
// Check IF the Value of Player Card is equal to bot card Value
        }else{
  // Run this Code
  // Show that Bot wins and Update ScoreBoard after 11 seconds

            setTimeout(() => {
              document.getElementById('status').innerText = 'TIE!!'
            }, 11000)
}
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// Create a function that returns value to other tiers of Cards
function cardValue(val){
  if(val === "ACE"){
    return 14
  }else if (val === "KING"){
    return 13
  }else if(val === "QUEEN"){
    return 12
  }else if(val === "JACK"){
    return 11
  }else{
    return val
  }
}


function countdown(){
  setTimeout(() => {
          console.log('3')
          document.querySelector('.chek').innerText = 3

          setTimeout(() => {
            console.log('2')
            document.querySelector('.chek').innerText = 2
    
            setTimeout(() => {
              console.log('1')
              document.querySelector('.chek').innerText = 1
    
              setTimeout(() => {
                console.log('READY?')
                document.querySelector('.chek').innerText = 'Ready?'
    
                setTimeout(() => {
                  document.querySelector('.chek').innerText = ' '
                  // document.querySelector('#player1').src = data.cards[0].image
    
                }, 3000)
              }, 2500)
            }, 2000)
          }, 1500)
        }, 1000)
}



// Input Random Bot names into DOM
// CREATE A FUNCTION THAT GIVES RANDOM NAMES TO BOTS AS OPPONENTS

function botUsername() {
  let botName = Math.random()
  if(botName < 0.1){
    let computerName = localStorage.getItem('Computer')
    computerName = 'Jake'
    document.getElementById('botName').innerText = computerName
    localStorage.setItem('Computer' , computerName)
    console.log(botName)    
  } else if (botName <= 0.2){
    let computerName = localStorage.getItem('Computer')
    computerName = 'Anita'
    document.getElementById('botName').innerText = computerName
    localStorage.setItem('Computer' , computerName)
    console.log(botName) 
  } else if(botName <= 0.3){
    let computerName = localStorage.getItem('Computer')
    computerName = 'King'
    document.getElementById('botName').innerText = computerName
    localStorage.setItem('Computer' , computerName)
    console.log(botName) 
  } else if (botName <= 0.4){
    let computerName = localStorage.getItem('Computer')
    computerName = 'Ruth'
    document.getElementById('botName').innerText = computerName
    localStorage.setItem('Computer' , computerName)
    console.log(botName) 
  } else if(botName <= 0.5){
    let computerName = localStorage.getItem('Computer')
    computerName = 'Leon'
    document.getElementById('botName').innerText = computerName
    localStorage.setItem('Computer' , computerName)
    console.log(botName) 
  } else if (botName <= 0.6){
    let computerName = localStorage.getItem('Computer')
    computerName = 'Fave'
    document.getElementById('botName').innerText = computerName
    localStorage.setItem('Computer' , computerName)
    console.log(botName) 
  } else if(botName <= 0.7){
    let computerName = localStorage.getItem('Computer')
    computerName = 'Muiz'
    document.getElementById('botName').innerText = computerName
    localStorage.setItem('Computer' , computerName)
    console.log(botName) 
  } else if (botName <= 0.8){
    let computerName = localStorage.getItem('Computer')
    computerName = 'Esther'
    document.getElementById('botName').innerText = computerName
    localStorage.setItem('Computer' , computerName)
    console.log(botName) 
  } else if(botName <= 0.9){
    let computerName = localStorage.getItem('Computer')
    computerName = 'Coker'
    document.getElementById('botName').innerText = computerName
    localStorage.setItem('Computer' , computerName)
    console.log(botName) 
  } else if (botName <= 1){
    let computerName = localStorage.getItem('Computer')
    computerName = 'Kate'
    document.getElementById('botName').innerText = computerName
    localStorage.setItem('Computer' , computerName)
    console.log(botName) 
  }

}


// CREATE A FUNCTION THAT RESETS EVERY ACTION FOR A NEW GAME



// SPEECH SYNTHESIS


// const synth = window.speechSynthesis;
// // document.querySelector('#proceed').addEventListener('click', run)

// function run() {
//   let yellText =  `${username} `
//   document.querySelector('#placeToYell').innerText = yellText

//   let yellThis = new SpeechSynthesisUtterance(yellText);

//   synth.speak(yellThis);
// }
