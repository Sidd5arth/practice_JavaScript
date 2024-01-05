// there is an encryption procedure where a sentence/message is encrypted with a sentence/key
// the first word will be encrypted with the last word of the key the 2nd with last 2nd and so on...
// the encryption is done as if the key length is even we must increase each charecter of the word by the key length and if odd we decrese by that length
// if on increment is greater than the upper bound say "z" then it will rotate back to "a" and vice-versa for lower bound "a";

// write a code to decypt on reciving the message;

function decrypt(str, key) {
  let tobeDecrypt = str.split(" ");
  let dycrptionKey = key.split(" ");
  if (tobeDecrypt.length !== dycrptionKey.length) return "invalid input";
  let decryptedValue = [];

  for (let i = 0; i < tobeDecrypt.length; i++) {
    // as per question if string has any uppercase letter return invalid
    if (tobeDecrypt[i] !== tobeDecrypt[i].toLowerCase()) return "invalid input";
    // the question says the key will the taken from the last;
    let len = dycrptionKey[tobeDecrypt.length - i - 1].length;
    //since I will be replacing the current iterator value to the charecter calculated so I need an array becaue stirng are immutable;
    const newStr = tobeDecrypt[i].split("");

    for (let j = 0; j < newStr.length; j++) {
      let charCode = newStr[j].charCodeAt(0);

      //checking for odd even cases
      // as per question if key char length is even increment by the length of char but here we are decypting not encrypting
      // so I will substract for even and add for odd;
      if (len % 2 === 0) {
        charCode = charCode - len;
        //since charecter code for lowercase letter ranges from 97-122
        if (charCode < 97) {
          // if goes out of bounds on the lower end
          charCode = 122 - (97 - charCode) + 1;
        }
        newStr[j] = String.fromCharCode(charCode);
      } else {
        charCode = charCode + len;
        if (charCode > 122) {
          // if goes out of bounds on the upper end
          charCode = charCode - 122 + 97 - 1;
        }
        newStr[j] = String.fromCharCode(charCode);
      }
    }
    // creating the string again from the array after charecter calculation
    decryptedValue.push(newStr.join(""));
  }
  return decryptedValue.join(" ");
}

const encrypted = "luaxzn vsa filmrh bpm jxoh";
const key = "the greatest game ever played";
console.log(decrypt(encrypted, key));
