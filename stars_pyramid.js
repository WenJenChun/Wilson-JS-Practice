// 編寫一個名為pyramid的函式，功能為按以下模式打印出星星層：
// pyramid(1);
// //*
// pyramid(2);
// //  *
// // ***
// pyramid(4);
// //    *
// //   ***
// //  *****
// // *******
function printStars(space, star){
    let result ="";
    for (let i = 0; i< space; i++){
        result +=" ";
    }
    for (let j = 0; j< star; j++){
        result +="*";
    }
    console.log(result)
}
function pyramid(int){
   let star = 1;
   let space = int -1;
   while(space >= 0){
    printStars(space, star)
    star+=2
    space-=1
   }
}
pyramid(3)
pyramid(5)
pyramid(9)
