const texts = ['tropical', 'oriental', 'african', 'disco', 'downtempo', 'psychedelic', 'world', 'groove', 'organic', 'dub', 'beats', 'soul', 'jazz', 'bass', 'cumbia', 'experimental', 'trip-hop', 'deep', 'funk', 'hip-hop', 'house', 'tribal', 'acid'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';



(function type() {
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 300);

}) () ;

