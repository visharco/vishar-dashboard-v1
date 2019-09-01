 
 //
 // email checker function return true or false
 //

 const EnglishChecker = (words) => {
    let reg = new RegExp(/^[a-zA-Z]+$/);
    if(reg.test(words) === false)
       return false
    
    return true
  }
  
  export default EnglishChecker;


 
