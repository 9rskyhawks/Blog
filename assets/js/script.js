'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');


// navToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);



// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');


for (let i = 0; i < themeBtn.length; i++) {

  themeBtn[i].addEventListener('click', function () {

    // toggle `light-theme` & `dark-theme` class from `body`
    // when clicked `theme-btn`
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    for (let i = 0; i < themeBtn.length; i++) {

      // When the `theme-btn` is clicked,
      // it toggles classes between `light` & `dark` for all `theme-btn`.
      themeBtn[i].classList.toggle('light');
      themeBtn[i].classList.toggle('dark');

    }

  })

}

function openChat() {
    document.getElementById('chatPopup').style.display = 'block';
}

function closeChat() {
    document.getElementById('chatPopup').style.display = 'none';
}

function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const chatbox = document.getElementById('chatbox');

    if (userInput.trim() !== "") {
        const userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.textContent = "You: " + userInput;
        chatbox.appendChild(userMessage);

        const botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        botMessage.textContent = "Bot: " + getBotResponse(userInput);
        chatbox.appendChild(botMessage);

        document.getElementById('userInput').value = "";
        chatbox.scrollTop = chatbox.scrollHeight;
    }
}

function getBotResponse(input) {
    // Simple responses for demonstration
    const responses = {
        "hello": "Hi there!",
        "how are you": "I'm a bot, so I don't have feelings, but thanks for asking!",
        "bye": "Goodbye!"
    };

    return responses[input.toLowerCase()] || "I don't understand that.";
}
