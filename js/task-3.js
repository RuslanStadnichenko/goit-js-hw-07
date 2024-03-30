const userInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

userInput.addEventListener('input', () => {
    const messageInput = userInput.value.trim();
    
   if (messageInput === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = messageInput;
    }  
    
});
