 /* მოგესალმებით მეგობრებო ეს არის დავალება ნომერი 2. დავალების ყველა ეტაპი აღწერილია კომენტარის სახით
  * 1) შედარება
  * 3) If პირობები
  * 4) ლოგიკური ოპერატორები
// //  * 5) Switch 
// //  */



// // // <------- შედარება ---------#### //

 const num1 = 0;
 const boolean1 = false;
 const num2 = 5;
 const emptyString = "";
 const boolean2 = false;
 const text = "I'm Text";
const text2 = "0";

// // // ჩამოწერეთ ცვლადები რომელი არის true რომელი false
// // // ჩამოწერეთ ზეპირად!
// // // მაგ. [1, 2, 3, 4]

// // // >>> კოდი დაწერეთ აქ 

 const isFalse = [2,5,7];
 const isTrue = [1,3,4,6];

// // //


// // // შეცვალეთ ერთი ასო რომ მიიღოთ ჭეშმარიტი დებულება
// // // მოკლედ ახსენით მუშაობის პრინციპი თუ რატომ იმოქმედა

  console.log("abc" > "a");
 console.log('004' === "004");



// // // <------- ლოგიკური ოპერატორები ---------#### //

// // // შეამოწმეთ სრულ წლოვნებაზე და თუ მეტი ან ტოლია
// // // 18 წელზე შესთავაზეთ სასმელი

// // // >>> კოდი დაწერეთ აქ 
 let checkAge = Number(prompt('Enter Your Age : '));
 if (checkAge>=18){
     window.alert('Do you want to drink');
 }
 else{
    window.alert('You can not drink');
}

// // //


// // // მოიფიქრეთ 2 if else-ის მაგალითი თქვენით

// // // >>> კოდი დაწერეთ აქ
 let mainQuestion = prompt('Choose your gender (M) or (F)');
 let checkName = prompt('What Is Your Name? ');

 if(mainQuestion=='m' || mainQuestion=='M'){
     window.alert('Hello Miss '+checkName);
 }
 else if (mainQuestion=='f' || mainQuestion=='F'){
     window.alert('Hello Mr '+checkName);
}
 else if (mainQuestion!='m' && mainQuestion!='M'){
    window.alert('Gender is incorect');
}
else if (mainQuestion!='f' && mainQuestion!='F'){
    window.alert('Gender is incorect');
}
 else{
     window.alert('Error');
}



// // //


// // // გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2) 

// // // >>> კოდი დაწერეთ აქ

(mainQuestion=='m' || mainQuestion=='M') ? window.alert('Hello Miss '+checkName) : window.alert('Hello Mr '+checkName);


// // //



// // /*
// //   ჩვენ გვაქვს ოთხი ფერი რომელთაც აქვთ
// //   კონკრეტული ციფრები მინიჭებული (თეთრი=4, 
// //   წითელი=3, მწვანე=2, ლურჯი=1, შავი=0, 
// //   სხვა ყველა ფერი=undefinde)
// // */

 let colorId = 3

// // // დაწერეთ if ისე, რომ როდესაც ჩვენ
// // // შევცვლით მაღლა განსაზღვრულ ცვლადს გავიგოთ
// // // ამ აიდის ფერი (ფერი გამოიტანეთ კონსოლში ტექსტის
// // // სახით)


// >>> კოდი დაწერეთ აქ
 if (colorId==0) {
     console.log('შავი')
}
else if (colorId==1) {
    console.log('ლურჯი');
}
 else if (colorId==2) {
    console.log('მწვანე');
 }
 else if (colorId==3) {
    console.log('წითელი');
}
 else if (colorId==4) {
    console.log('თეთრი');
 }
 else{
     console.log('მონაცემები არათავსებადია');
 }
// // //



// // // გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2) 

// // // >>> კოდი დაწერეთ აქ
(colorId==0) ? console.log('შავი') : (colorId==1) ? console.log('ლურჯი') : (colorId==2) ? console.log('მწვანე') : (colorId==3) ? console.log('წითელი') : (colorId==4) ? console.log('თეთრი') : console.log('მონაცემები არათავსებადია');

// // //


// // // <------- დავალება Switch ---------#### //

// // // ცადეთ იგივე გააკეთოთ რაც წინა დავალებაში
// // // ოღონდ ამჯერად Switch-ის დახმარებით


// // // >>> კოდი დაწერეთ აქ

 switch (colorId) {
     case 0:
         console.log('შავი');
         break;
     case 1:
         console.log('ლურჯი');
         break;
    case 2:
        console.log('მწვანე');
         break;
     case 3:
        console.log('წითელი');
         break;
     case 4:
         console.log('თეთრი');
         break;
     default:
         console.log('მონაცემები არათავსებადია');
         break;
}




// // //



// // //  ||
// // //  ||
// // //  ||
// // // \  /
// // //  \/

// // /*
// //     ეს დავალება რომ ნახოთ გამოიყენეთ HTML,
// //     ჩვენი მიზანია ავაწყოთ ჩეთ ბოტი რომელთანაც ვისაუბრებთ
// //     როგორც ხედავთ დაბლა გამზადებული მაქვს კოდის გარკვეული
// //     ნაწილი ეს არის ფუნქცია რომელსაც მომავალში გავივლით
// //     კონკრეტულად ეს ფუნქცია არის რეკურსიული, რეკურსია
// //     არის პროცესი როდესაც ფუნქცია თავის თავს იძახებს ჩვენ კი
// //     იმიტომ ვიყენებთ ამას, რომ ყოველ ჯერზე როდესად რაღაცის თქმა
// //     დაგვჭირდება მზად იყოს სასაუბროდ ჩვენი ბოტი
// //     // კოდში მოათავსეთ Switch რომლითაც დააპროგნოზებთ სასაუბრო
// //     // სიტყვებს ააწყობთ მინი ჩათ ბოტს.
// //     მაგ. 
// //     """"
// //       case "გამარჯობა":
// //         alert("გამარჯობა");
// //         break;
// //     """"
// // */
 const bot = document.getElementById("bot");
 bot.addEventListener("click", function(){
     myFun();
 });

 function myFun() {
// //   //let x = prompt("მე მზად არ ვარ პასუხისათვის")

// //   // >>> კოდი დაწერეთ აქ გამოიყენეთ Switch
   let x = prompt('Hello What Do You Want?');
   
     switch (x) {
         case 'Hello':
             window.alert('Hello');
             break;
         case 'Who are you?':
             window.alert('Hello I\'m Gocha');
             break;
         case 'What is your working hours?':
             window.alert('09:00-18:00');
             break;
         default:
             window.alert('Bye Bye');
             break;
    }

// //   //

// //   // რეკურსიული ფუნქცია
// //   //myFun()
} 