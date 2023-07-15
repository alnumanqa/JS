let day = 'Monday';
//find length of the string
console.log("length: " + day.length);
//print specific index
console.log(day[0])//first index
console.log(day[day.length - 1])//last index
//find substring
console.log(day.substring(1,3));//on
//split the string 
// split() return array
let splitDay = day.split('n');
console.log(splitDay)
//Trim
console.log(splitDay[1].trim())
//remove space
let day1 = '  Tuesday  ';
console.log(day1.trim());

//converting String to int
let date = '17'
let nextDate = '20'
let diff = parseInt(nextDate) - parseInt(date);
console.log(diff);//returning int
console.log(diff.toString())//returning String




