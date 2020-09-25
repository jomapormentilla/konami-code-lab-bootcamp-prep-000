const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let myArray = []
  document.body.addEventListener('keydown', (event)=>{
    myArray.push(event.key)
    
    for(let i=0; i<codes; i++){
      if( myArray[i] === codes[i] ){
        alert('Well done!')
        return true
      } else {
        return false
      }
    }
  })
}
