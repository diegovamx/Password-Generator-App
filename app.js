const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let generateButton = document.getElementById('generate');
let passwordsContainer = document.getElementById('passwords');
generateButton.addEventListener('click', generatePassword);

function generatePassword () {
  let newPassword = "";
  for (let i = 0; i < 10; i++) {
      let randomInt = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomInt];
  }

  let passwordEntry = document.createElement('div');
  passwordEntry.className = 'passwordEntry';
  passwordEntry.textContent = newPassword;
  passwordEntry.addEventListener('click', function() {
      navigator.clipboard.writeText(newPassword);
      alert("Password copied to clipboard: " + newPassword);
  });

  passwordsContainer.appendChild(passwordEntry);
}


