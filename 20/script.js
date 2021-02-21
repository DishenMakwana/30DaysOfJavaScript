window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// if ('SpeechRecognition' in window) {
//     // speech recognition API supported
//     console.log("In");
// } else {
//     // speech recognition API not supported
//     console.log("Out");
// }

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
    // console.log(e);
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript).join('');
    
    p.textContent = transcript;
    if(e.results[0].isFinal){
        p = document.createElement('p');
        words.appendChild(p);
    }

    console.log(transcript);
})

recognition.addEventListener('end',recognition.start)
recognition.start();