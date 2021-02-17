// // mission 1
// function minMax() {
//   var min = Number.MAX_SAFE_INTEGER;
//   var max = Number.MIN_SAFE_INTEGER;
//   var numFromUser = 1;
//   while (numFromUser > 0) {
//     if (numFromUser > max) {
//       max = numFromUser;
//     }
//     if (numFromUser < min) {
//       min = numFromUser;
//     }
//     numFromUser = +prompt('enter a number');
//   }
//   console.log(`min: ${min}`);
//   console.log(`max: ${max}`);
// }
// minMax();

// // mission 2
// function evenNumbers() {
//   var userNumbers;
//   var numbersArray = [];
//   for (let i = 0; i < 10; i++) {
//     userNumbers = +prompt('enter a number ');
//     if (userNumbers % 2 == 0) {
//       numbersArray.push(userNumbers);
//     }
//   }
//   console.log(numbersArray);
// }
// evenNumbers();

// mission 3
// function randomArr() {
//   var randomsArray = [];
//   var randomNumbers;
//   var numberFromUser = +prompt('enter a number');
//   for (let i = 0; i < 100; i++) {
//     randomNumbers = Math.floor(Math.random() * 100);
//     randomsArray.push(randomNumbers);
//   }
//   for (let i = 0; i < randomsArray.length; i++) {
//     if (numberFromUser == randomsArray[i]) {
//       var result = 'your number is in the array';
//     } else if (numberFromUser < 100) {
//       var result = 'your number is in not the array';
//     } else {
//       var result = 'your number above 100 and it is not a legal';
//     }
//   }
//   console.log(result);

//   console.log(randomsArray);
// }
// randomArr();

// mission 4

// function firstName(letters) {
//   var userName = prompt('enter your name please');
//   var counter = 0;
//   for (let i = 0; i < letters.length; i++) {
//     if (userName[0] == letters[i]) {
//       if (letters[i] == 'A') {
//         console.log('Nice');
//         counter = i;
//       } else if (letters[i] == 'Z') {
//         console.log('Good');
//         counter = i;
//       } else {
//         console.log(`your name is not start with Z or A`);
//       }
//     }
//   }
//   if (userName[0] == letters[counter]) {
//     console.log(`the letter that found is index ${counter}# in the array `);
//   }
// }
// firstName(['A', 'v', 'd', 'Z']);

// // mission 5
// function loop() {
//   var fizz = 'fizz';
//   var buzz = 'buzz';
//   var fizzbuzz = 'fizzbuzz';
//   for (var i = 0; i <= 100; i++) {
//     if (i % 3 == 1) {
//       console.log(fizz + i);
//     }
//     if (i % 5 == 1) {
//       console.log(buzz + i);
//     }
//     if (i % 5 == 1 || i % 3 == 1) {
//       console.log(fizzbuzz + i);
//     }
//   }
// }
// loop();

// // mission 6

// var userName = prompt('enter your name');
// var userGuess;
// var userNumbersArr = [];
// var randomNumbersArr = [];
// var randomNumber;
// for (let i = 0; i < 10; i++) {
//   userGuess = +prompt('enter a number');
//   userNumbersArr.push(userGuess);
//   if (userNumbersArr.includes(userGuess) > 1) {
//     console.log(
//       `you entered ${userGuess} more than 1 time and you cannot do that`
//     );
//   }
//   if (userGuess > 50 || userGuess < 1) {
//     alert('you cannot enter number above 50 and under 1!');
//     i--;
//     userNumbersArr.pop();
//   }
// }
// for (let i = 0; i < 10; i++) {
//   randomNumber = Math.floor(Math.random() * 50);
//   if (randomNumbersArr.includes(randomNumber)) {
//     while (randomNumbersArr.includes(randomNumber)) {
//       randomNumber = Math.floor(Math.random() * 50);
//     }
//   }
//   randomNumbersArr.push(randomNumber);
// }

// console.log(randomNumbersArr);
// var count = 0;
// for (let i = 0; i < userNumbersArr.length; i++) {
//   if (randomNumbersArr.includes(userNumbersArr[i])) {
//     count++;
//     console.log(`you guess right this number: ${userNumbersArr[i]}`);
//   }
// }
// for (let i = 0; i < userNumbersArr.length; i++) {
//   console.log(`my numbers ${userNumbersArr[i]} `);
// }
// document.writeln(`Total: ${count} WON numbers`);

// mission 6 second practice

// var userArray = [];
// var randomArray = [];
// var userGuess = +prompt('enter a number');
// var randomNum = Math.floor(Math.random() * 50);

// for (let i = 0; i < 10; i++) {
//   if (userArray.length < 10) {
//     if (userGuess > 0 && userGuess <= 50) {
//       userArray.push(userGuess);
//     } else {
//       i--;
//       alert(
//         `you cannot enter number above 50 and under 1! please enter another number`
//       );
//     }
//   }
//   if (randomArray.length < 10) {
//     randomArray.push(randomNum);
//   }
//   if (userArray.length < 10) {
//     userGuess = +prompt('enter a number');
//     for (let j = 0; j < 10; j++) {
//       if (userGuess == userArray[j]) {
//         alert(`you already entered ${userGuess}`);
//         userArray.pop();
//         i--;
//       }
//     }
//   }

//   randomNum = Math.floor(Math.random() * 50);
//   for (let g = 0; g < 10; g++) {
//     if (randomNum == randomArray[g]) {
//       randomArray.splice(g, 1);
//       g = 0;
//       i--;
//     }
//   }
// }
// var counter = 0;
// var guessRight = [];
// for (let i = 0; i < userArray.length; i++) {
//   for (let j = 0; j < randomArray.length; j++) {
//     if (userArray[i] == randomArray[j]) {
//       counter++;
//       guessRight.push(userArray[i]);
//     }
//   }
// }

// console.log(randomArray);

// document.write(`you won ${counter} times`);
// for (let i = 0; i < userArray.length; i++) {
//   console.log(`my numbers ${userArray[i]} `);
// }
// console.log(`right guesses ${guessRight}`);

// משימה ראשונה מערכים

// function fullName(firstName, lastName) {
//   console.log(`${firstName.substr(0, 1)}. ${lastName.toUpperCase()}`);
// }

// fullName('Yehuda', 'Bayana');

// function lastNames(last1, last2) {
//   if (last1.length > last2.length) {
//     console.log(`${last2.toLowerCase()}`);
//     return last1;
//   } else {
//     console.log(`${last1.toLowerCase()}`);
//     return last2;
//   }
// }
// lastNames('asjdkfjdfskj', 'aDHCBG');

//כתבו פונקציה שמקבלת שם ותו, במידה והתו קיים בשם משפחה הפונקציה מחזירה את השם משפחה, אחרת היא מדפיסה הודעה מתאימה.

// function checkMark(name, mark) {
//   if (name.indexOf(mark) >= 0) {
//     return name;
//   }
//   return `the mark "${mark}" is not included`;
// }

// console.log(checkMark('Yehuda', 'u'));

// var myDate = new Date();
// console.log(myDate);
// console.log(
//   `${myDate.getDate()}/${
//     myDate.getMonth() + 1
//   }/${myDate.getFullYear()}  ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`
// );

//משימת אובייקטים
// צרו 5 אובייקטים עם שדות של: שם פרטי, שם משפחה, כיתה (מספר), אובייקט של ציונים לכל נושא שיעור וציוני מבחנים.
// המידע מגיע מהמשתמש.
// לאחר שבנינו את האובייקטים מדפיסים למסך שם פרטי, שם משפחה והציון הגדול מציוני המבחן.
// אתגר: להוסיף שדה של תאריך ולתת לו תאריך בזמן יצירת האובייקט ולהדפיס למסך גם.

// var firstName;
// var lastName;
// var grade;
// var tziyunHistory;
// var tziyunMath;
// var tziyunEnglish;
// var tziyunSport;
// var Name = 'firstName';
// var last = 'lastName';
// var grade1 = 'grade';
// var tziyunHistory1 = 'history';
// var tziyunMath1 = 'math';
// var tziyunEnglish1 = 'english';
// var tziyunSport1 = 'sport';
// var tziyun = 'tziyunim';
// var myDate;
// var person1 = { tziyunim: {} };
// var person2 = { tziyunim: {} };
// var person3 = { tziyunim: {} };
// var person4 = { tziyunim: {} };
// var person5 = { tziyunim: {} };
// var persons = [person1, person2, person3, person4, person5];
// for (let j = 0; j < 5; j++) {
//   for (let i = 0; i < 1; i++) {
//     myDate = new Date();
//     var myNewDate = `${myDate.getDate()}/${
//       myDate.getMonth() + 1
//     }/${myDate.getFullYear()}  ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`;
//     var firstName = prompt('first name');
//     lastName = prompt('last name');
//     grade = +prompt('grade in number');
//     tziyunHistory = +prompt('tziyun in history');
//     tziyunMath = +prompt('tziyun in math');
//     tziyunEnglish = +prompt('tziyun in enflish');
//     tziyunSport = +prompt('tziyun in sport');
//     persons[j][Name] = `${firstName}`;
//     persons[j][last] = `${lastName}`;
//     persons[j][grade1] = `${grade}`;
//     persons[j][tziyun] = {
//       tziyunHistory,
//       tziyunMath,
//       tziyunEnglish,
//       tziyunSport,
//     };

//     persons[j][tziyun.tziyunHistory1] = `${tziyunHistory}`;
//     persons[j][tziyun.tziyunMath1] = `${tziyunMath}`;
//     persons[j][tziyun.tziyunEnglish1] = `${tziyunEnglish}`;
//     persons[j][tziyun.tziyunSport1] = `${tziyunSport}`;
//   }

//   var maxTziyun = Math.max(
//     persons[j].tziyunim.tziyunHistory,
//     persons[j].tziyunim.tziyunEnglish,
//     persons[j].tziyunim.tziyunMath,
//     persons[j].tziyunim.tziyunSport
//   );

//   document.writeln(`
// ${persons[j].firstName}
// ${persons[j].lastName}
// כיתה:${persons[j].grade}
//  הציון הגבוהה:${maxTziyun}\n  ${myNewDate} </br></br>
// `);
// }

// .כתבו תוכנית שמקבלת מהמשתמש נתונים
//  של שם, סיסמה, מייל ושם משתמש. התוכנית משווה בין שני אובייקטים, כדי לקבוע האם הראשון מכיל ערכי
//  מאפיינים שווי ערך לזה השני. אחד מהאובייקטים ניצור ידנית בקוד (הארדקודד).

// var person1 = {
//   firstName: prompt('enter first name'),
//   lastName: prompt('enter last name'),
//   email: prompt('enter email'),
//   userName: prompt('enter a username'),
// };

// var person2 = {
//   firstName: 'Yuda',
//   lastName: 'Bayana',
//   email: 'yuda@gmail.com',
//   userName: 'kingYuda',
// };

// var equalCheck = ['firstName', 'lastName', 'email', 'userName'];
// var equalCheckResult;

// for (let i = 0; i < equalCheck.length; i++) {
//   if (person1[equalCheck[i]] == person2[equalCheck[i]]) {
//     equalCheckResult = `${equalCheck[i]} is equal`;
//     console.log(equalCheckResult);
//   } else {
//     equalCheckResult = `${equalCheck[i]} is not equal`;
//     console.log(equalCheckResult);
//   }
// }

// כתבו פונקציה שמקבלת מערך מספרים, במידה ויש מספר זוגי במערך היא מחליפה אותו ב"hello".

// var numbersArray = [];
// var randomNumber;
// for (let i = 0; i <= 20; i++) {
//   // randomNumber = Math.floor(Math.random()*100)
//   numbersArray.push(i);
//   if (numbersArray[i] % 2 == 0) {
//     numbersArray[i] = 'hello';
//   }
// }
// console.log(numbersArray);

// 1.	צרו מערך של אובייקטים אשר מיצגים כל אחד ספר.
// 2.	לכל אובייקט יש שדה כותב/ת, שם הספר ושדה עבור מספר הדפים.
// 3.	יש לאתחל את המערך עם חמישה ספרים ואז לעבור על המערך ולהדפיס למסך את המידע עבור כל אובייקט.
// 4.	הוסיפו לתוכנית פונקציה שלוקחת מהמשתמש כותב/ת, שם ספר ומספר דפים ומוסיפה אובייקט חדש למערך.
// 5.	קראו לפונקציה 5 פעמים והדפיסו למסך שוב(כמו בסעיף 3).
// 6.	כתבו פונקציה שקבלת מערך ומחזירה מערך חדש של כל הסופרים לפי האלף-בית.
// 7.	כתבו פונקציה שמקבלת מערך ומחזירה מערך חדש של כל הספרים שהאות הראשונה של הסופר/ת היא גם האות הראשונה של הספר.

// var book1 = { writer: 'yonatan', bookName: 'the dream', pages: '798' };
// var book2 = { writer: 'yonatan', bookName: 'the dream', pages: '798' };
// var book3 = { writer: 'yonatan', bookName: 'the dream', pages: '798' };
// var book4 = { writer: 'yonatan', bookName: 'the dream', pages: '798' };
// var book5 = { writer: 'yonatan', bookName: 'the dream', pages: '798' };
// var booksArray = [book1, book2, book3, book4, book5];

// function booksObject() {
//   var userBook = {};
//   booksArray.push(userBook);
//   booksArray[booksArray.length - 1].writer = prompt('enter writer');
//   booksArray[booksArray.length - 1].bookName = prompt('enter naem');
//   booksArray[booksArray.length - 1].pages = prompt('enter pages');
// }
// booksObject();
// booksObject();
// booksObject();
// booksObject();
// booksObject();
// console.log(booksArray);

// function writerCheck() {
//   array = ['Ball-Zee', 'Tomazacre', 'Adfish', 'Dlow', 'Colpas'];
//   for (let i = 0; i < array.length - 1; i++) {
//     if (array[i][0] > array[i + 1][0]) {
//       array.splice(i, 2, array[i + 1], array[i]);
//     }
//   }
//   for (let i = 0; i < array.length - 1; i++) {
//     if (array[i][0] > array[i + 1][0]) {
//       array.splice(i, 2, array[i + 1], array[i]);
//     }
//   }
//   return array;
// }
// console.log(writerCheck());

// var book1 = { writter: 'abush', bookName: 'archi dream', pages: '798' };
// var book2 = { writter: 'yonatan', bookName: 'the dream', pages: '798' };
// var book3 = { writter: 'jonatan', bookName: 'jomanjy dream', pages: '798' };
// var book4 = { writter: 'yonatan', bookName: 'the dream', pages: '798' };
// var book5 = { writter: 'yonatan', bookName: 'the dream', pages: '798' };
// var booksArray = [book1, book2, book3, book4, book5];

// function writterAndBookCheck() {
//   var newBooksArray = [];
//   for (let i = 0; i < booksArray.length - 1; i++) {
//     if (booksArray[i].writter[0] == booksArray[i].bookName[0]) {
//       newBooksArray.push(booksArray[i]);
//     }
//   }
//   return newBooksArray;
// }
// console.log(writterAndBookCheck());

// var car1 = { company: 'reno', year: '1111', model: '798' };
// var car2 = { company: 'peju', year: '2342', model: '798' };
// var car3 = { company: 'jonatan', year: '123', model: '798' };

// var booksArray = [car1, car2, car3];

// var pPicker = document.getElementById('pClass');
// pPicker.innerHTML =
//   '<div><h2>company: ' + booksArray[0].company + '</h2></div>';

// pPicker.innerHTML += '<h2> year: ' + booksArray[0].year + '</h2>';

//צרו דף html אשר מדפיס לconsole את הטקסט : "page is loading"
// console.log('the page is loading');
// הוסיפו לדף כפתור ואלמנט p עם טקסט כלשהוא. לחיצה על כל אחד מהם מדפיסה לconsole את הטקסט "i was clicked",
// var firstP = document.getElementById('id_p_1');
// var firstButton = document.getElementById('id_button_1');
// firstButton.style = 'border:2px solid blue';
// firstP.style = 'border:2px solid blue';

// function iWasClicked() {
//   console.log(`i was clicked`);
// }
// var firstDiv = document.getElementById('id_div_1');
// function iWasChanged() {
//   firstDiv.innerHTML = 'i was clicked';
// }

// var changeBetweenP1 = document.getElementById('text1');
// var changeBetweenP2 = document.getElementById('text2');
// function changeBetweenTwoP1() {
//   changeBetweenP1.innerHTML = 'text2';
// }
// function changeBetweenTwoP2() {
//   changeBetweenP2.innerHTML = 'text1';
// }

// var firstInput = document.getElementById('id_input_1');
// function printInputToConsole() {
//   console.log(firstInput.value);
// }

// var selectFruit = document.getElementById('id_selection_1');

// function clickSelect() {
//   console.log(selectFruit.value);
// }

// function carList1() {
//   console.log('mazda');
// }
// function carList2() {
//   console.log('pejo');
// }
// function carList3() {
//   console.log('toyota');
// }
// function carList4() {
//   console.log('bmw');
// }

// var secondInput = document.getElementById('id_input_2');
// var thirdInput = document.getElementById('id_input_3');
// function addCalc() {
//   var addC = Number(secondInput.value) + Number(thirdInput.value);
//   alert(addC);
// }
// function subCalc() {
//   var addC = Number(secondInput.value) - Number(thirdInput.value);
//   alert(addC);
// }
// function mulCalc() {
//   var addC = Number(secondInput.value) * Number(thirdInput.value);
//   alert(addC);
// }
// function divCalc() {
//   var addC = Number(secondInput.value) / Number(thirdInput.value);
//   alert(addC);
// }

// var calcDiv = document.getElementById('id_div_calc');

// function addCalc() {
//   var addC = Number(secondInput.value) + Number(thirdInput.value);
//   calcDiv.innerHTML += `<p>${addC}</p>`;
// }
// function subCalc() {
//   var addC = Number(secondInput.value) - Number(thirdInput.value);
//   calcDiv.innerHTML += `<p>${addC}</p>`;
// }
// function mulCalc() {
//   var addC = Number(secondInput.value) * Number(thirdInput.value);
//   calcDiv.innerHTML += `<p>${addC}</p>`;
// }
// function divCalc() {
//   var addC = Number(secondInput.value) / Number(thirdInput.value);
//   calcDiv.innerHTML += `<p>${addC}</p>`;
// }
// var calcDiv = document.getElementById('id_div_calc');
// var select2 = document.getElementById('id_select_2');
// function adddCalc() {
//   var addC;
//   if (Number(secondInput.value) > 0) {
//     if (select2.value == 'add') {
//       addC = Number(secondInput.value) + Number(thirdInput.value);
//     } else if (select2.value == 'sub') {
//       addC = Number(secondInput.value) - Number(thirdInput.value);
//     } else if (select2.value == 'mul') {
//       addC = Number(secondInput.value) * Number(thirdInput.value);
//     } else if (select2.value == 'div') {
//       addC = Number(secondInput.value) / Number(thirdInput.value);
//     } else {
//       console.log('dsadfa');
//     }

//     calcDiv.innerHTML += `<p>${addC}</p>`;
//   } else {
//     calcDiv.innerHTML += `<p>cannot enter 0</p>`;
//     calcDiv.style.color = 'red';
//   }
// }

// function dissapearCircle1() {
//   document.getElementById('id_circle1').style.display = 'none';
// }
// function dissapearCircle2() {
//   document.getElementById('id_circle2').style.display = 'none';
// }
// function dissapearCircle3() {
//   document.getElementById('id_circle3').style.display = 'none';
// }

// var pBtn = document.getElementById('button_for_p');
// pBtn.onclick = function () {
//   document.getElementById('none_display_p').innerText = 'hello';
// };
// var someP = document.getElementById('some_text');
// someP.onclick = function () {
//   someP.innerText = 'clicked';
// };

// var helloP = document.getElementById('hello');
// var submit = document.getElementById('submit_btn');
// helloP.onclick = function () {
//   submit.innerText = submit.innerText.toUpperCase();
// };
// submit.onclick = function () {
//   helloP.innerHTML += ' world';
// };
// var imgBtn = document.getElementById('img_btn');
// var theImg = document.getElementById('the_img');
// imgBtn.addEventListener('click', function () {
//   theImg.style.border = '8px solid blue';
// });

// var num = document.getElementById('user_input');
// var buttonUser = document.getElementById('send_user');
// buttonUser.onclick = function () {
//   document.body.innerHTML += `<p>${num.value}</p>`;
// };

// var lastInput = document.getElementById('last_input');
// var lastButton = document.getElementById('last_button_hope');
// lastButton.onclick = () => {
//   document.body.innerHTML += `<p>${lastInput.value}</p>`;
// };

// var num1 = document.getElementById('now_last_input1');
// var num2 = document.getElementById('now_last_input2');
// var sub = document.getElementById('now_last_button');
// sub.onclick = function () {
//   console.log(num1.value);
//   console.log(num2.value);
// };

// var buttonForm = document.getElementById('button_form');

// buttonForm.onclick = function () {
//   var form = document.getElementById('form1').children;
//   for (let i = 0; i < form.length; i++) {
//     console.log(form[i].value);
//   }
// };

// var mainDiv = document.getElementById('mainDiv');
// var input = document.getElementById('input1');
// var para = document.getElementById('p1');
// function printToOutput() {
//   para.innerHTML = input.value;
// }

// var mainDiv2 = document.getElementById('mainDiv2');
// var input2 = document.getElementById('input2');
// var para2 = document.getElementById('p2');
// function printToOutput2() {
//   para2.innerHTML = input2.value;
// }

// var mainDiv2 = document.getElementById('mainDiv2');
// var input2 = document.getElementById('input2');
// var para2 = document.getElementById('p2');
// function printToOutput2() {
//   input2.value = input2.value.toUpperCase();
// }

// var button = document.getElementById('button');
// var output = document.getElementById('result');
// var input = document.getElementById('input');
// var counter = 0;
// function all() {
//   event1();
// }
// function event1() {
//   counter++;
//   output.innerHTML = input.value.toUpperCase();
//   if (counter >= 3) {
//     button.removeEventListener('click', all);
//   }
// }
// button.addEventListener('click', all);

var mainDiv = document.getElementById('mainDiv');
// console.log(mainDiv);
// function addTextAfterThreeSeconds() {
//   mainDiv.innerHTML = `<p>i need to show 3 seconds after the page is loaded</p>`;
// }
// setTimeout(addTextAfterThreeSeconds, 3000);

// var para = document.getElementById('paragraph');
// var hello = 'hello timer ';
// function printLetter(letter) {
//   para.innerHTML += letter;
// }
// var i = 0;
// function printAllText() {
//   printLetter(hello[i]);
//   i++;
//   if (i >= hello.length) {
//     stopInterval();
//   }
// }
// var mayInerval = setInterval(printAllText, 300);
// function stopInterval() {
//   clearInterval(mayInerval);
// }

// var clock1 = document.getElementById('clock');
// var counter = 0;
// var counter1 = 0;
// function seconds() {
//   clock1.innerHTML = `11:${counter1}:${counter++}`;
//   if (counter == 60) {
//     counter = 0;
//   }
// }
// function minutes() {
//   clock1.innerHTML = `11:${counter1++}:${counter}`;
//   if (counter1 == 60) {
//     counter1 = 0;
//   }
// }
// setInterval(seconds, 1000);
// setInterval(minutes, 60000);
// function confirmLeagalDetails(min, max) {
//     var userNameInput = document.registration.username;
//     var userNameInputLen = userNameInput.value.length;

//     if (userNameInputLen < min || userNameInputLen > max) {
//       alert('the length is not legal');
//     } else {
//       alert('the length is legal');
//     }
//   }

var mainDiv = document.getElementById('mainDiv');
var imgArr = [
  'https://images.unsplash.com/photo-1611095973362-88e8e2557e58?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1613506021358-356ee3885696?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
];
var i = 0;
var nextBtn = document.getElementById('nextBtn');
function nextImg() {
  mainDiv.innerHTML = `<img src='${imgArr[i]}'/>`;
  i++;
  if (i >= imgArr.length) {
    i = 0;
  }
}
nextBtn.addEventListener('click', nextImg);
var prevBtn = document.getElementById('prevBtn');
function prevImg() {
  mainDiv.innerHTML = `<img src='${imgArr[i]}'/>`;

  if (i <= 0) {
    i = imgArr.length;
  }
  i--;
}
prevBtn.addEventListener('click', prevImg);
