function shout(string) {
    return string.toUpperCase();
    
  }
console.log(shout("Hello!"));

  function whisper(string){
    return string.toLowerCase();
  }
  console.log(whisper("HELLO"));

  function logShout(string){
    console.log(string.toUpperCase());
  }
  logShout("hello");

  function logWhisper(string){
    console.log(string.toLowerCase());
  }
  logWhisper("HELLO");

  function sayHiToHeadphonedRoommate(string){
    if (string.toLowerCase() === string){
      return "I can't hear you!";
    
    } else if (string.toUpperCase() === string){
      return "YES INDEED!";
    }else {
      return "I would love to!"
    
  }
  console.log(string("Let's have dinner together!"));
}


   
