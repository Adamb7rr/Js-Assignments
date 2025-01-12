// console.log('Adam \'Bahr\'')
// console.log("Adam \"Bahr\"")
// console.log("Adam \\ Bahr")
// console.log("Adam\nBahr")

// a = 'Adam'
// b = 'Bahr'
// console.log(a + ' ' + b)
// console.log(`${a} ${b}`)

// let title = 'Elzero'
// let desc = 'Elzero Web School'
// let markUp = `
//     <div>
//         <div class='header'>
//             <h1>${title}<h1/>
//             <p>${desc}<p/>
//         <div/>
//     <div/>
// `
// document.write(markUp)

// let theCard = {
//     title: 'Elzero',
//     desc: 'Elzero Web School',
//     date: '25/10'
// }
// console.log(theCard)
// let markUp = `
//     <div class='card'>
//         <h3>${theCard.title}<h3/>
//         <p>${theCard.desc}<p/>
//         <span>${theCard.date}<span/>
//     <div/>
// `
// document.write(markUp.repeat(4))

// var a = "10"
// var b = 20
// var c = true
// console.log(a + b)
// console.log(+a + b + c)
// console.log(a + b + c)

// let a = 10;
// let b = '20';
// let c = 80;
// console.log(++a + +b++ + +c++ - +a++) // 11 + 20 + 80 - 11 = 102
// console.log(++a) // 11 - 20 + 10 + 11 + 10 = 102

// let price = 100;
// let discount = true;
// let discountAmount = 20;

// // if (discount === true) {
// //     price -= discountAmount;
// // }


// discount ? price -= discountAmount : price;
// console.log(price);

// let day = 6;

// switch (day) {
//     case 1:
//         document.write(`Today is Saturday.`);
//         break;

//     case 2:
//         document.write('Today is Sunday.');
//         break;

//     case 3:
//         document.write('Today is Monday.');
//         break;

//     case 4:
//         document.write('Today is Thuesday.');
//         break;

//     case 5:
//         document.write('Today is Wednesday.');
//         break;

//     case 6:
//         document.write('Today is Thursday.');
//         break;
    
//     case 7:
//         document.write('Today is Friday.');
//         break;
    
//     default:
//         document.write('Unknown Day.')
// }

// let zero = 0;
// let counter = 3;
// let my = [1, 32, 213, 12, "Ahmed", 'Mazero', "Elham", 123, 123, 544, "Osama", "Gamal", "Ameer"];

// // console.log(my)

// let onlyNames = []
// for (let i = 0; i <= my.length; i++) {
//     if (typeof my[i] === "string") {
//         onlyNames.push(my[i])
//     }
// }
// console.log(onlyNames)

// let product = ['Keyboard', 'Mouse', 'Pen', 'pad', 'Monitor'];
// let colors = ['Red', 'Green', 'Black'];
// let Models = [2020, 2021]

// for (let i = 0; i < product.length; i++) {
//     console.log('#'.repeat(15))
//     console.log(`# ${product[i]}`)
//     console.log('#'.repeat(15))

//     console.log(`Colors:`)
//     for (let i = 0; i < colors.length; i++) {
        
//         console.log(`- ${colors[i]}`)
//     }

//     console.log(`Models:`)
//     for (let i = 0; i < Models.length; i++) {
        
//         console.log(`- ${Models[i]}`)
//     }
// }

// let product = ['Keyboard', 'Mouse', 'Pen', 'pad', 'Monitor', 'Iphone', 'Tablet'];
// let colors = ['Red', 'Green', 'Black'];
// let showCount = 2;

// document.write(`<h1>Show ${showCount} Products</h1>`);

// for (let i = 0; i < showCount; i++) {
//     document.write(`<div>`)
//     document.write(` <h3>[${i + 1}] ${product[i]}</h3>`)
//     for (let j = 0; j < colors.length; j++) {
//         document.write(`<p>${colors[j]}</p>`)
//     }
//     document.write(`</div>`)
// }

// function sayHello(userName) {
//     console.log(`Welcome ${userName}`)
// }
// sayHello('Adam')
// sayHello('Yousef')
// function sum(num1, num2) {
//     let sumNum = num1 + num2
//     console.log(`${num1} + ${num2} is ${sumNum}`)
// }
// sum(1210, 5125)
// function generateYears(start, end, exclude) {
//     for (let i = start; i <= end; i++) {
//         if (i === exclude) {
//             continue;
//         }
//         console.log(i);
//     }
// }
// generateYears(2002, 2024, 2020)
// function sayHello(userName = 'Unknown') {
//     return `Hello ${userName}`
// }
// console.log(sayHello())
// function Cv(userName = 'Unknown', age = 'Unknown', rate = 0, show = 'Yes', ...skills) {
//     document.write(`<div>`)
//     document.write(`<h2>Welcome ${userName}.</h2>`)
//     document.write(`<p>Age: ${age}</p>`)
//     document.write(`<p>Hour Rate: $${rate}</p>`)
//     if (show == 'Yes') {
//             if (skills.length > 0) {
//                 document.write(`<span>Skills: ${skills.join(' | ')}</span>`)
//             } else {
//                 document.write(`<p>You Dont Have Skills.</p>`)
//             }
//     }else {
//             document.write(`<p>Skills Is Hidden.</p>`)
//         }
//     document.write(`</div>`)
// }
// Cv('Adam', 22, 50, 'Yes', 'Html', 'CSS', 'Python')

// function showDetails(arg1, arg2, arg3) {
//     if (typeof arg1 === 'string') {
//         console.log(`Hello ${arg1}`)
//     }
//     typeof arg1 === 'string' ? console.log(`Hello ${arg1}`) : typeof arg1 === 'numbers' ? console.log(`age is ${arg1}`) : ''
// }

// showDetails('Osama', 38, true)
// document.getElementById('but').onclick = () => {
//     console.log(`Adam`)
// }
// setTimeout(() => {
//     console.log('Bahr')
// },2000)

// function sayHello(fName, lName) {
//     let message = 'Hello'
//     function fullMessage() {
//         message = `${message} ${fName} ${lName}`
//     }
//     fullMessage()
//     return message
// }
// console.log(sayHello('Adam', 'B7r'))

// let array = [1, 2, 3, 4, 5, 6]
// let arr = []

// let addSelf = array.map((ele) => ele + ele)
// console.log(addSelf)

// let swappingCases = 'elZERo';

// // let sw = swappingCases.split('').map(function (ele) {
// //     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()
// // }).join('')
// // console.log(sw)

// let sw = swappingCases.split('').map(function (ele) {
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
// }).join('')
// console.log(sw)

// let friends = ['Adam', 'Yousef', 'Ahmed', 'Ali', 'Osama']
// let filterFriends = friends.filter((ele) => ele.startsWith('A'))
// console.log(filterFriends)

// let nums = [12, 3, 345, 33, 234, 2, 45, 123, 33];
// let filterNums = nums.filter((ele) => ele % 2 != 0);
// console.log(filterNums)

// let sentence = 'I Love Foood Code Too Playing Much'

// let smallWords = sentence.split(' ').filter((ele) => ele.length <= 4).join(' ');
// console.log(smallWords)

// let mix = 'A13BS2ZX';

// let num = mix.split('').filter(function (ele) {
//     return !isNaN(parseInt(ele))
// }).map((ele) => ele * ele).join('')
// console.log(num)

// let nums = [12, 2, 43, 33];

// let add = nums.reduce((acc, current, index, arr) => acc + current, )
// console.log(add)

// let theBiggest = ['Bla', 'Propaganda', 'other', 'AAA', 'Battery', 'Test'];

// let big = theBiggest.reduce((acc, current) => acc.length > current.length ? acc : current)
// console.log(big)

// let user = {
//     theName : 'Adam',
//     theAge : 22,
//     sayHello : () => 'Hello',
// }
// console.log(user.theName)
// console.log(user.theAge)
// console.log(user.sayHello())
// console.log(typeof user)

// let myIdElement = document.getElementById("my-div")
// let myTagElement = document.getElementsByTagName("p")
// let myClassElement = document.getElementsByClassName(("my-span"))
// let myQueryElement = document.querySelector(".special")

// console.log(myIdElement)
// console.log(myTagElement)
// console.log(myClassElement)
// console.log(myQueryElement)
// console.log(document.links[1].href)

// myTagElement[1].innerHTML = ('Adam')
// myClassElement[0].innerHTML = ("Hi")

// let myElement = document.querySelector('.js');

// myElement.innerHTML = 'Hi From <span>main.js</span> Dude!'
// myElement.textContent = 'Hi From <span>main.js</span> Dude!'

// document.images[0].src = 'https//Google.com'
// document.images[0].alt = 'Alternate'
// document.images[0].title = 'Picture'
// document.images[0].id = 'pic'
// document.images[0].className = 'pic'
// document.links[0].href = '##'

// let myLinks = document.querySelector('a')

// console.log(myLinks)
// console.log(myLinks.getAttribute('href'))

// myLinks.setAttribute('id') = 'link'

// let myElement = document.createElement('h1')
// let myAttr = document.createAttribute('data-custom')
// let myText = document.createTextNode('Product One.')
// let myComment = document.createComment('This Is Div')

// myElement.className = 'product'
// myElement.setAttributeNode(myAttr)
// myElement.setAttribute('data-test', 'Testing')

// myElement.appendChild(myComment)
// myElement.appendChild(myText)
// document.body.appendChild(myElement)

// console.log(myElement)

// let mySecondElement = document.createElement('p')
// let mySecondAttr = document.createAttribute('text')
// let mySecondText = document.createTextNode('This Is My First Product')

// mySecondElement.setAttributeNode(mySecondAttr)
// mySecondElement.setAttribute('data2-test', 'Testing2')
// mySecondElement.appendChild(mySecondText)
// document.body.appendChild(mySecondElement)

// console.log(mySecondElement)




// for (let i = 0; i < 100; i++){
//     let myMainElement = document.createElement('div')
//     let myHeadding = document.createElement('h1')
//     let myParagraph = document.createElement('p')

//     let headText = document.createTextNode(`Product Title ${i + 1}.`)
//     let paragraphText = document.createTextNode('This Is Product')

//     myHeadding.className = 'product'

//     myHeadding.appendChild(headText)
//     myParagraph.appendChild(paragraphText)

//     myMainElement.appendChild(myHeadding)
//     myMainElement.appendChild(myParagraph)

//     document.body.appendChild(myMainElement)
// }

// let myBut = document.querySelector('button')

// myBut.onclick = function () {
//     console.log('Clicked')
// }
// window.onresize = function () {
//     console.log('Clicked')
// }

// let email = document.getElementById('email')
// let age = document.getElementById('age')

// console.log(email)
// console.log(age)

// document.forms[0].onsubmit = (e) => {
//     let emailValid = false
//     let ageVaild = false

//     if (email.value !== '' && email.value.length <= 10) {
//         emailValid = true
//     }

//     if (age.value !== '') {
//         ageVaild = true
//     }

//     if (emailValid === false || ageVaild === false) {
//         e.preventDefault()
//     }
// }

// let myP = document.querySelector('p')

// myP.onclick = (() => {
//     let cloned = myP.cloneNode(true)
//     document.body.appendChild(cloned)
// })