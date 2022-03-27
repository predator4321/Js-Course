
// my discord name      GikKs




/* მოგესალმებით მეგობრებო ეს არის დავალება ნომერი 1. დავალების ყველა ეტაპი აღწერილია კომენტარის სახით
 * 1) კომენტარები
 * 2) ცვლადები
 * 3) მონაცემთა ტიპები
 * 4) ოპერატორები და არითმეტიკა
 */



// 1 კომენტარები

/*
  // კომენტარები გაფუჭდა თქვენი დავალებაა
  // არასწორად დაწერილი კომენტარი ჩაასწოროთ
  // და ასევე გამოიყენოთ თქვენი კოდის აღსაწერად
*/



// 2 ცვლადები

/*
  // მსურს ჩემი Spotify ლისტის განახლება 
  // ამაში კი თქვენი დახმარება მჭირდება
  // აღწერეთ თქვენი საყვარელი მომღერლის
  // (სახელი, გვარი, ასაკი, დაბადების წელი, დაბადების ადგილი,)
  // გაითვალისწინეთ რომ ამისთვის უნდა
  // გამოიყენოთ მხოლოდ (const, let)
  // (ნებისმიერი პიროვნების ჩაწერა შეგიძლიათ)
*/

// >>>> კოდი დაწერეთ აქ
const name = 'გია';
const surname = 'სურამელაშვილი';
let asaki = 53;
const birthyear = 1969;
const birthplace = 'Georgia';

// 

/*
  // დროა დავიწყოთ მზადება ჩვენს მომავალ პროექტზე.
  // ჩვენი დავალეებაა მოვიფიქროთ რაიმე პროდუქტთა სია
  // რომელსაც გამოვიყენებთ მომავალში.

  წიგნების მაღაზიის მაგალითი:

  const BookName = "ვეფხისტყაოსანი";
  const AuthrName = "შოთა რუსთაველი";
  const CreateDate = "13 საუკუნე";
  let ProductQuant = 124;
*/


// >>>> კოდი დაწერეთ აქ
const Phone = 'Iphone 8';
const brand = 'Apple';
const CreateDate = '15 April,2020';
let ProductQuant = 200;

//



// 3 მონაცემთა ტიპები

/*
  // აქ რაღაც შეცდომაა თქვენი დავალებაა ცვლადის გამოცხადების
  // დროს გაასწოროთ შეცდომა;
*/



let  age = 1;
const hisName = "bob";
let isHigh = true;
const dateOfBirth = 1995;




// ეს კოდი ამოწმებს თქვენ მიერ მითითებულ ტიპებს

// თქვენი მიზანია დააბრუნოთ პირველი 4 frue

console.log(typeof age === "number");
console.log(typeof hisName === "string");
console.log(typeof isHigh === "boolean");
console.log(typeof dateOfBirth === "number")



/* აქ უნდა გაიგოთ თქვენი პროდუქტის სიის ტიპი

// მაგ: console.log(typeof age)*/

console.log(typeof Phone);
console.log(typeof brand);
console.log(typeof CreateDate);
console.log(typeof ProductQuant);



/*
// ოპერატორები არითმეტიკა */

let num = 5;

// გამოიყენეთ ყველა ვარიანტი რომლითაც შეგვიძლია ამ ციფრის გაზრდა

// >>> კოდი დაწერეთ აქ 
// num+=10; damateba
//  num*=10;  gamravleba
// xarisxi
num**=5;
//

console.log(num)


/*
// სცადეთ შეკრიბოთ განსხვავებული ტიპის მქონე 
// მნიშვნელობები და გაიგოთ შეკრებილი მონაცემების ტიპი

// >>> კოდი დაწერეთ აქ  */
 

//var sum = Phone + ProductQuant;

//var sum = isHigh + age;

var sum = isHigh + Phone;

console.log(typeof sum);


