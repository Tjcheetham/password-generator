//Generate Random Password
//Prompt password length between 8-128 characters
//Confirm if users want to generate random password with these specifications:
    //Special Chars? Numeric Chars? Lowercase Chars? Uppercase Chars?
//One character type must be selected
//Once all prompts answered, generate random password matching user selected criteria

//Generate Random Password
document.getElementById("password-btn").addEventListener("click", function(){
    getPasswordOptions();
});

//Prompt password length between 8-128 characters
function getPasswordOptions() {
    var length = parseInt(
        prompt("How many characters would you like your password to contain?")
        );

        if(isNaN(length)){
            alert("Password length must be a number");
            return;
        }

        if(length < 8) {
            alert("Password length must be greater than 8 characters");
            return;
        }
        
        if(length > 128) {
            alert("Password length must be less than 128 characters");
            return;
            
        }
        
        //Confirm if users want to generate random password with these specifications:
        //Special Chars? Numeric Chars? Lowercase Chars? Uppercase Chars?
        var specialChars = confirm("Would you like to use special characters?");
        if (specialChars) {
            
          }
          else {
            
          }
        var numericChars = confirm("Would you like to use numeric characters?");
        if (numericChars) {
            
          }
          else {
            
          }
        var uppercaseChars = confirm("Would you like to use uppercase characters?");
        if (uppercaseChars) {
            
          }
          else {
            
          }
        var lowercaseChars = confirm("Would you like to use lowercase characters?");
        if (lowercaseChars) {
            
          }
          else {
            
          }
        

          
          
          //One character type must be selected
          if(!specialChars && !numericChars && !uppercaseChars && !lowercaseChars){
            alert("We can't help you.")
            return;
        }
        
        var passwordOptions = {
            specialChars,
            numericChars,
            uppercaseChars,
            lowercaseChars,
        };
        
        return passwordOptions;
        
    }
        
        //create array of all chars
        //use math.random to generate random position number in chars array
        //repeat "var length" x amount of times
        //return char
        //concat into string?
        
        //create array of all chars
        var lowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        var uppercaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
        var numberList = ["0","1","2","3","4","5","6","7","8","9"];
        var specialList = ["!","@","#","$","%","^","&","*","(",")","<",">","?"];
        
        
        //use math.random to generate random position number in chars array
        var randomLcChar= lowercaseList[Math.round(Math.random() * (lowercaseList.length-1))];
        var randomUcChar= uppercaseList[Math.round(Math.random() * (uppercaseList.length-1))];
        var randomNlChar= numberList[Math.round(Math.random() * (numberList.length-1))];
        var randomSlChar= specialList[Math.round(Math.random() * (specialList.length-1))];
        
        var randomChar = [randomLcChar,randomUcChar,randomNlChar,randomSlChar];
            console.log(randomChar);

        var code =randomChar[Math.round(Math.random() * (length))];
          console.log(code);
        
        // var $password = document.querySelector("code").innerText;
        // document.getElementById("password").innerText = $password;
        
        // for (var i=0; i < length; i++) {
        // console.log(randomChar);
        // }
        
        
        //repeat "var length" amount of times
        for (var i=0; i < length; i++) {
            console.log([i]);
            
        }
        //return char
        //concat into string?
        
// function randomString(length, chars) {
//     var mask = '';
//     if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
//     if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     if (chars.indexOf('#') > -1) mask += '0123456789';
//     if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
//     var result = '';
//     for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
//     return result;
// }

// console.log(randomString(16, 'aA'));
// console.log(randomString(32, '#aA'));
// console.log(randomString(64, '#A!'));

