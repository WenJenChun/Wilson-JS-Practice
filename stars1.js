function stars(int){
    let star = "";
    for(let i = 1; i<=int; i++){
        star = star + "*"
        console.log(star)
    }
}

stars(2);
// *
console.log("====分隔線====")
stars(4);
// *
// **
// ***
// ****


