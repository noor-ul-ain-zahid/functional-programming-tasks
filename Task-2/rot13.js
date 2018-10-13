const rot13=(str)=> { // LBH QVQ VG!
    const decodedString= str.split('').map((char)=>{
      if(char.charCodeAt(0)>64 && char.charCodeAt(0)<91){
        let charAscii= char.charCodeAt(0) + 13;
        if(charAscii > 90)
          charAscii-=26;
          
        char= String.fromCharCode(charAscii);
      }
      return char;
    }).join('');
    return decodedString;
}
    
// Change the inputs below to test
console.log( rot13("SERR PBQR PNZC") );
