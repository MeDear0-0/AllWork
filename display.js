function display(content) {
  if(content === null || content === undefined){
    return 'no message'
  }
  else{
    return 'your message is ' + content
  }

}

module.exports = display
