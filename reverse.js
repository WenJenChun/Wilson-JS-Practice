// reverse string
// 編寫一個名為reverse的函式，參數為一個String，回傳值為順序反轉的String。

function reverse(str){
    let newStr="";
    //寫法一
    // for(let i = str.length-1; i>=0 ; i--){
    //     newStr += str[i];
    // }
    //寫法二 鏡像位置
    for(let i = 0; i < str.length; i++){
        newStr += str[str.length - 1 - i];
    }
    return newStr;
}

console.log(reverse("abcd"))
console.log(reverse("I am a good guy."))
// reverse("abcd"); // returns "dcba"
// reverse("I am a good guy."); // returns ".yug doog a ma I"