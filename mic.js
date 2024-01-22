const microphone = document.getElementById("microphone");
        const audio = new Audio("audio.wav");
        const outputText = document.getElementById("outputText");

        microphone.addEventListener("click", toggleSpeechRecognition);
        

        function toggleSpeechRecognition() {
            microphone.classList.toggle("active");
            audio.play();
            if (microphone.classList.contains("active")) {
              startMicrophone();
          }
          else {
            stopMicrophone();
        }
        }