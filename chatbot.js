
const messageList = document.getElementById('message-list');
const inputMessage = document.getElementById('input-message');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click');

// Define a function to handle user input and generate bot responses
function chatBot(input) {
    // Convert user input to lowercase for easier handling
    var userInput = input.toLowerCase();
  
    // Bot's predefined responses
    var botResponses = {
      "hello": "Hello! How can I assist you today?",
      "how are you": "I'm a bot, so I don't have feelings, but thanks for asking!",
      "goodbye": "Goodbye! Have a great day!",
      "default": "I'm sorry, I didn't understand that. Can you please rephrase?"
    };
  
    // Check if the user input matches any predefined responses
    if (botResponses[userInput]) {
      return botResponses[userInput];
    } else {
      return botResponses["default"];
    }
  }
  
  // Example usage:
  var userInput = prompt("Ask me a question or say something:");
  var botResponse = chatBot(userInput);
  console.log(botResponse);