//Create a function of Random Numbers
// function randomNum() {
//   document.getElementById('status').innerText = ' '
//   document.querySelector('.chek').innerText = ''
//   document.getElementById('chek2').innerText = ''


//   let odun = Math.floor(Math.random() * 5)
  
//   // const synth = window.speechSynthesis;



//     setTimeout(() => {
//       console.log('3')
//       document.getElementById('status').innerText = 3

//       setTimeout(() => {
//         console.log('2')
//         document.getElementById('status').innerText = 2

//         setTimeout(() => {
//           console.log('1')
//           document.getElementById('status').innerText = 1

//           setTimeout(() => {
//             console.log('READY?')
//             document.getElementById('status').innerText = 'Ready?'

//             setTimeout(() => {
//               console.log(odun)
//               document.getElementById('status').innerText = ' '
//               document.querySelector('.chek').innerText = odun

//             }, 3000)
//           }, 2500)
//         }, 2000)
//       }, 1500)
//     }, 1000)

//   let ayo = Math.floor(Math.random() * 5)
//     // setTimeout(() => {
//       console.log(ayo)
//       document.getElementById('chek2').innerText = ayo

//     // }, 1000) 

//     // Increase playerScore by 1 if a condition is met

//     // Insert Player1 Score in the DOM and Local Storage
//     if( odun > ayo){

//       let default_score1 = Number(localStorage.getItem('Player 1'))
//       default_score1 +=1
//       localStorage.setItem('Player 1' , default_score1)

//       setTimeout(() => {
//         document.getElementById('status').innerText = `${localStorage.getItem('Player Name')} Wins`
//         p1_Score.innerText = localStorage.getItem('Player 1')

//       }, 11000) 
//       // console.log('Odun')
    
//     // Insert Player2 Score in the DOM and Local Storage

//     }else if(ayo> odun) {

//       let default_score2 = Number(localStorage.getItem('Player 2'))
//       default_score2 +=1
//       localStorage.setItem('Player 2' , default_score2)


//       setTimeout(() => {
//         document.getElementById('status').innerText = `${localStorage.getItem('Computer')} Wins`
//         p2_Score.innerText = localStorage.getItem('Player 2')    
//       }, 11000)
    
//       // console.log('Ayo')

//     } else {
//       setTimeout(() => {
//         document.getElementById('status').innerText = 'TIE!!'
//       }, 11000)

//     }
// }

//////////// MISCELEANOUS CODE
// function newUser(){
//   // localStorage.clear()
//   let default_score = 0
//   p1_Score.innerText = default_score
//   p2_Score.innerText = default_score

//////////// }


////////////// MISCALEANOUS CODE
//         // document.querySelector('#player1').src = data.cards[0].image
//         // setTimeout(() => {
//         // document.querySelector('#player1').src = data.cards[0].image
//         // }, 4000)
//////////////


// // Miscalleanous Code
// document.querySelector('.chek').innerText = ''
// document.getElementById('chek2').innerText = ''