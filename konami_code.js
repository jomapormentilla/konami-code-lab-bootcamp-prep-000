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
    let key = event.key;
    myArray.push(key)
    
    for(let i=0; i<codes; i++){
      if( myArray[i] === codes[i] ){
        return true
      } else {
        return false
      }
    }
  })
}
