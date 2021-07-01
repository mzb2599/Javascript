/*
 * Project : Reverse an array
 * Filename: c:\Users\MOHD ZAKI\helloworld\reversedArray.js
 * Path: c:\Users\MOHD ZAKI\helloworld
 * Created Date: Sunday, June 20th 2021, 2:25:09 pm
 * Author: Mohammed Zaki
 */
const reversedArray = (arr) => {
    l = arr.length;
    
    let i = 0;
    //Iterating half of the array
    while(i<=l/2)
    {
        //Swapping element from first and last  
        var t = a[i];
        a[i] = a[l - i-1];
        a[l - i-1] = t
        i=i+1
    }
    console.log(a);
}

a = [1, 3, 5, 7, 9,11];
reversedArray(a)