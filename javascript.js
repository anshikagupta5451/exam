
// // let a=5;
// // let b=10;
// // let myFunction = (a, b) => a * b;
// // // alert(myFunction(a,b));

// // console.log(parseInt('100px'));
// // console.log(pasrefloat('12.45Sem'))

// // let str ='this is  string';
// // console.log(str(-3));
// // let str1='this is a string and is an  example';
// // console.log(str.slice(-3,-1));
// //array
// let arr=new Array(5);
// console.log(arr);
// let arr1=[1,2,3,4,5,'apple','mangoes',true,function(){alert('hello world')}];
// //to acss an element
// console.log(arr[1]);
// //to function function from array element
// console.log(arr[9]());
// console.log(arr1);
// //shift and unshift for removing and adding starting element
// //push and pop for adding and removing last element
// console.log(arr.pop());//remove lst elemnt
// console.log(arr.push('false'));//dd elemnt add last
// console.log(arr.shift())//remove first elemnt
// //push and pop >>>> shift and unshift

// let arr2=[];
// arr2[255]=1;
// console.log(arr2);
// console.log(arr2.length);//print 256


let arr3=[[1,2,3],[4,5,6],[7,8,9]];
//pint all indexes
//print sum
//rint[1,2,3,4,5,6,7,8,9]
// let i;
let sum=0;
for(let i=0;i<arr3.length;i++)
{
    for(let  j=0;j<arr3[0].length;j++)
    {
        console.log(i,j);
        sum=sum+arr3[i][j];
    }
}
console.log(sum);
arr3.flat();
for(let i=0;i<arr3.length;i++)
{
   console.log(arr3[i]);
}