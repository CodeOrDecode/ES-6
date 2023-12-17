let low = "abcdefghijklmnopqrstuvwxyz";
let high = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


function convertInLowerCase(items) {
    let str = "";
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < high.length; j++) {

            if (items[i] == high[j]) {
                str = str + low[j];
                break;
            }

        }
    }
    return str;
}


let items = ["MA", "SA", "I", "SCH", "OOL"];

// let items = "RITESH";

if (typeof (items) == "string") {
    let ans = convertInLowerCase(items);
    console.log(ans);
}
else {
    let changeString = [];
    for (let i = 0; i < items.length; i++) {
        let word = convertInLowerCase(items[i]);
        changeString.push(word)
    }
    console.log(changeString);
}
