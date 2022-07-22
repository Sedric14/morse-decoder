const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let s = expr;
    // write your solution here
    arr =[];
    let numberLetters = expr.length/10;
    for(let i = 0; i < numberLetters; i++){
        let str ='';
       arr[i] = expr.slice(0, 10);
       expr = expr.slice(10, expr.length);

       if(arr[i] == '**********') str = str + ' ';
       if(arr[i].slice(0, 2) === '10') str = str + '.';
       if(arr[i].slice(0, 2) === '11') str = str + '-';
       if(arr[i].slice(2, 4) === '10') str = str + '.';
       if(arr[i].slice(2, 4) === '11') str = str + '-';
       if(arr[i].slice(4, 6) === '10') str = str + '.';
       if(arr[i].slice(4, 6) === '11') str = str + '-';
       if(arr[i].slice(6, 8) === '10') str = str + '.';
       if(arr[i].slice(6, 8) === '11') str = str + '-';
       if(arr[i].slice(8, 10) === '10') str = str + '.';
       if(arr[i].slice(8, 10) === '11') str = str + '-';
       arr[i] =str;
    }

    let resultString = '';

    for (let arrKey in arr){
        if (arr[arrKey] === ' ') resultString = resultString + ' ';
        for(let key in MORSE_TABLE){
            if(key === arr[arrKey]){
                resultString = resultString + MORSE_TABLE[key];
            }
        }
    }

    // for(let key in MORSE_TABLE){
    //     for (let arrKey in arr){
    //         if(key === arr[arrKey]){
    //             resultString = resultString + MORSE_TABLE[key];
    //         }
    //     }
    // }

    return resultString;
}



module.exports = {
    decode
}