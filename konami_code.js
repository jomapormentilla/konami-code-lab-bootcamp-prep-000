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
  let input = []
  document.body.addEventListener('keydown', (event)=>{
    input.push(event.key)
  })
  
  if(input === codes){
    return true
  } else {
    return false
  }
}
