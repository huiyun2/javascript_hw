// 1. sum salaries
let salaries = { John: 100,
                 Ann: 160,
                 Pete: 130}

total_salaries = 0
for (let person in salaries){
    total_salaries += salaries[person]
}
console.log("The answer for Q1 is:")
console.log(total_salaries)

// 2. Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.
let menu ={
    width: 200,
    height: 300,
    title: "my menu"
};

function multiplyNumeric(obj){
    for (let element in obj){
        if (typeof obj[element] === 'number') {
            obj[element] *= 2;
        }
    }
}
multiplyNumeric(menu)
console.log("The answer for Q2 is:")
console.log(menu)

/** 3. Write a function checkEmailId(str) that returns true if str contains '@' and '.', otherwise false.
Make sure '@' must come before '.' and there must be some characters between '@' and '.'. The function
must be case-insensitive:
 **/ 

function checkEmailId(str){
    // to make it case-insensitive.
    str = str.toLowerCase();
    let atIdx = str.indexOf('@');
    let dotIdx = str.indexOf('.', atIdx + 1);

    // Check if '@' and '.' are in the correct positions
    if (atIdx > 0 && dotIdx > atIdx + 1){
        return true;
    }
    else{
        return false;
    }
}

console.log('Testing Q3:')
console.log(checkEmailId("example@domain.com")); // true
console.log(checkEmailId("example.domain.com")); // false
console.log(checkEmailId("example@domaincom")); // false
console.log(checkEmailId("ex.ample@domaincom")); // false

/** 4. Create a function trunacate(str, maxlength) that checks the length of the str and, if it exceeds maxlength
 * -replace the end of str with ellipsis character "...", to make its length equal to maxlength.
 * The result of the function should be the truncated(if needed) string.
 * truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te..."
 * truncate("Hi everyone!", 20) = "Hi everyone!"
 */

function truncate(str, maxlength){
    if (str.length > maxlength){
        return str.slice(0, maxlength-3) + '...';
    }
    return str;
}

str1 = 'This is a test case for Q4. See what it returns'
str2 = 'Hello world!'
console.log('Answer for Q4:')
console.log(truncate(str1, 20))
console.log(truncate(str2, 20))

/** Let's try 5 array operations.
 * Create an array styles with items "James" and "Brennie".
 * Append "Robert" to the end. replace the value in the middle by "Calvin". Your code for finding the middle value should work
 * for any array with odd length.
 * 
 * Remove the first value of the array and show it.
 * Prepend Rose and Regal to the array.
 * James, Brennie
 * James, Brennie, Robert
 * James, Calvin, Robert
 * Calvin, Robert
 * Rose, Regal, Calvin, Robert
 */

console.log("The answer for Q5:")
// 1: Create an array with items "James" and "Brennie"
let styles = ['James', 'Brennie']
console.log(styles);

// 2: Append "Robert" to the end
styles.push("Robert");
console.log(styles);

// 3: Replace the value in the middle by "Calvin"
let middleIdx = Math.floor(styles.length /2);
styles[middleIdx] = "Calvin";
console.log(styles);

// 4: Remove the first value of the array and show it
let removeFirst = styles.shift();
console.log("first value: " + removeFirst);
console.log(styles);

// 5: Prepend "Rose" and "Regal" to the array
styles.unshift("Rose", "Regal");
console.log(styles);