console.log('hi');
var a = 'Heewwllo'
var str = a.substring(0);
var str_len=str.length
var arr_1 = str.split('',8);
console.log(arr_1);
// let findDuplicates = arr => arr.filter((i,a)=>arr.indexOf(i)!=a)
function findDuplicates(arr){
    return arr.filter((i,pos)=>arr.indexOf(i)!=pos);
}
function NewArray(arr){
    return arr.filter((i,pos)=>arr.indexOf(i)==pos);
}

console.log(findDuplicates((arr_1))); 
// console.log(NewArray((arr_1))); 
var new_array = NewArray((arr_1))
var new_len= new_array.length;
console.log(new_len);
var new_string = new_array.join("");
console.log(new_string);
console.log(new_array);
// document.write('the duplicates are '+  +' and the length is of duplicates is '+ ans_len)
document.write('The answer is "'+ new_string+'"' +", with length "+ new_len)
// document.write('The answer is "'+new_string+'"', + "with lengt   h "+ new_len)


// words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
// const appendedWords = words.filter( (word, index, arr) => {
//     arr.push('new')
//     return arr.leng"th;

// })
// console.log(appendedWords);

// console.log([...new Set(findDuplicates(arr_1))]);
// for(var i in arr){
//     console.log(arr[i]);
//     for(j in arr[i]){
//         var inside= arr[i][j];
//         console.log(inside);

        
//     }
// }
// var hash = new Map();
// console.log(hash);
// var result = [];

// for(var i=0;i<arr.length;i++){
//     if(hash.get(arr[i]===undefined)){
//         hash.set(arr[i],true)
//     }
//     else{
//         var value = hash.get(arr[i])
//         if(value){
//             hash.set(arr[i],!value)
//         }
//     }
// }