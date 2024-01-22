var typingTimer;
var doneTypingInterval = 2000; // 2 seconds

document.getElementById("sourceText").addEventListener("input", function() {
  var inputText = this.value;
  clearTimeout(typingTimer);

  typingTimer = setTimeout(function(){    
    if (inputText.length > 3) {
      translateText();
  }
  },doneTypingInterval)
});

function clearTypingIndicator() {
  document.getElementById("translationResult").innerText = document.getElementById("translationResult").innerText.replace("typing...", "");
}

function translateText() {
    document.getElementById("translationResult").innerText += "typing...";
    const sourceLanguage = document.getElementById("sourceLanguage").value;
    const targetLanguage = document.getElementById("targetLanguage").value;
    const contentText = document.getElementById("sourceText").value;
    const sourceText = `convert ${document.getElementById("sourceText").value} to ${targetLanguage} and only give the translated language in the output without inverted commas and dont give things in note`;
    const OPENROUTER_API_KEY ="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";
    const YOUR_SITE_URL ="http://127.0.0.1:5500/index.html";
    const YOUR_SITE_NAME="hackathon";
    fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization":  `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer": `${YOUR_SITE_URL}`, // Optional, for including your app on openrouter.ai rankings.
        "X-Title": `${YOUR_SITE_NAME}`, // Optional. Shows in rankings on openrouter.ai.
      },
      body: JSON.stringify({
        model: "mistralai/mixtral-8x7b-instruct",
        messages: [
          { role: "user", content: sourceText }
        ]
      })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.choices[0].message.content);
        const translation = data.choices[0].message.content;
       

        document.getElementById("translationResult").innerHTML = `${translation}`;
    })
  }

let recognition; 

  // Function to start the microphone and speech recognition
function startMicrophone() {
    // Check if SpeechRecognition is supported
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      // Initialize SpeechRecognition object
      recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  
        recognition.onstart = function() {
            console.log('Speech recognition started');
        };
  
        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            console.log(transcript)
            document.getElementById('outputText').textContent = `Recognized Speech: ${transcript}`;
        };
  
        recognition.onend = function() {
            console.log('Speech recognition ended');
        };
  
        recognition.onerror = function(event) {
            console.error('Speech recognition error:', event.error);
        };
  
      // Start recognition
        recognition.start();
    } else {
        console.error('SpeechRecognition is not supported in this browser');
    }
  }
  
  // Function to stop the microphone and speech recognition
  function stopMicrophone() {
    if (recognition) {
      recognition.stop();
    }
  }
  
  function clickButton(){
    document.getElementById("outputTextt").innerHTML = 'typing.....';
    const transcript = document.getElementById('outputText').textContent
    const reqSpokenlang=document.getElementById("reqSpokenlang").value;
    const sourceText = `convert ${transcript} to ${reqSpokenlang} and only give the translated language in the output without inverted commas and dont give things in note`;
    const OPENROUTER_API_KEY ="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";
    const YOUR_SITE_URL ="http://127.0.0.1:5500/index.html";
    const YOUR_SITE_NAME="hackathon";
    fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization":  `Bearer ${OPENROUTER_API_KEY}`,
            "HTTP-Referer": `${YOUR_SITE_URL}`, // Optional, for including your app on openrouter.ai rankings.
            "X-Title": `${YOUR_SITE_NAME}`, // Optional. Shows in rankings on openrouter.ai.
        },
        body: JSON.stringify({
            model: "mistralai/mixtral-8x7b-instruct",
            messages: [
                { role: "user", content: sourceText }
            ]
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.choices[0].message.content);
        const translation = data.choices[0].message.content;
          document.getElementById("outputTextt").innerHTML = `Converted Speach:  ${translation}`;
    })
  }

  function readText(){
    const text=document.getElementById("outputTextt").innerText;
    console.log(text);
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }
  
const box=document.getElementById("detailbox");
function getdetail(){
  box.classList.add("detailbox1");
  box.innerHTML = "Please Wait ....";
  const sourceLanguage = document.getElementById("sourceLanguage").value;
  const targetLanguage = document.getElementById("targetLanguage").value;
  const sourceText = `give some 40 commonly used words in ${targetLanguage} language which are useful for a tourist also write how to pronounce them in ${sourceLanguage}  and their meanings in ${sourceLanguage} only.And remember to give only the required output and don't give things in note`;
  const OPENROUTER_API_KEY ="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";
    const YOUR_SITE_URL ="http://127.0.0.1:5500/index.html";
    const YOUR_SITE_NAME="hackathon";
    fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization":  `Bearer ${OPENROUTER_API_KEY}`,
            "HTTP-Referer": `${YOUR_SITE_URL}`, // Optional, for including your app on openrouter.ai rankings.
            "X-Title": `${YOUR_SITE_NAME}`, // Optional. Shows in rankings on openrouter.ai.
        },
        body: JSON.stringify({
            model: "mistralai/mixtral-8x7b-instruct",
            messages: [
                { role: "user", content: sourceText }
            ]
        })
    })
    .then(response => response.json())
    .then(data => {
        
        const translation = data.choices[0].message.content;
        console.log(translation);
        box.innerHTML = `Converted Speach:  ${translation}`;
    })
  
}