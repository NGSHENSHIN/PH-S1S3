let randomNumber = generateRandomNumber();
    let attempts = 0;

    function generateRandomNumber() {
      return Math.floor(Math.random() * 100) + 1;
    }

    function checkGuess() {
      const userGuess = parseInt(document.getElementById("userGuess").value);

      if (isNaN(userGuess)) {
        showMessage("Please enter a valid number.");
      } else {
        attempts++;

        if (userGuess === randomNumber) {
          showMessage(`Congratulations! You guessed the correct number in ${attempts} attempts!`);
          // Display a pop-up message
          window.alert(`Congratulations! You guessed the correct number (${randomNumber}) in ${attempts} attempts!`);
          // Reset the game after the player wins
          resetGame();
        } else if (userGuess < randomNumber) {
          showMessage("Try a higher number.");
        } else {
          showMessage("Try a lower number.");
        }
      }
    }

    function showMessage(message) {
      document.getElementById("message").innerText = message;
    }

    function resetGame() {
      attempts = 0;
      showMessage("");
      document.getElementById("userGuess").value = "";
      randomNumber = generateRandomNumber();
    }