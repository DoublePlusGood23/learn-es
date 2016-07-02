// simple clock using the Date() object.

console.log(clock());

function clock() {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let tmp = "" + ((hour > 12) ? hour - 12 : hour);
    if (hour == 0) {
        tmp = "12";
    }
    tmp += ((minute < 10) ? ":0" : ":") + minute;
    tmp += ((second < 10) ? ":0" : ":") + second;
    tmp += (hour >= 12) ? " P.M." : " A.M.";
    return tmp;
}
