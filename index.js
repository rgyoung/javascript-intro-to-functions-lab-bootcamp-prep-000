function shout (string) {
  return string.toUpperCase ()
}
function whisper (string) {
  return string.toLowerCase()
}
/// logshout difficult
function logShout (string) {
  console.log(string.toUpperCase())
}
///logWhisper difficult
function logWhisper (string) {
  console.log(string.toLowerCase())
}
function sayHiToGrandma (string) {
<<<<<<< HEAD
  if (string  === string.toLowerCase()){
    return "I can't hear you!"
  }
  if (string=== string.toUpperCase()){
    return "YES INDEED!"
  }
  if(string==="I love you, Grandma."){
  return "I love you, too."
=======
  if (string  === string.toLowerCase){
    return "I can't hear you!"
  }
  if (string=== string.toUpperCase){
    return "YES INDEED!"
  }
  if(string==="I love you, Grandma"){
  return "I love you, too"
>>>>>>> b438c24c6be6d16868dcb61a3e9d571e98b52977
}
}