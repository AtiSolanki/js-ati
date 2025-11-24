const name = "hitesh"
const repoCount = 50

console.log(name  +  repoCount + " value"); // old way syntex outdated

console.log(`Hello My Name Is ${name} and my repo count is ${repoCount}` )


const gameName = new String('abcdefgh-ij-kl-mn-op-qr')  

console.log(gameName[0]);
console.log(gameName.__proto__);



console.log(gameName.length);

console.log(gameName.toUpperCase());


console.log(gameName.charAt(6));

console.log(gameName.indexOf('d'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-2, 8)
console.log(anotherString);



const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'))
console.log(url.includes('sundar'))

console.log(gameName.split('-'));