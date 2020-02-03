var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
console.log("Sebelumnya : ",(angka.slice(0)).join(","));

var ascen = angka.sort();
console.log("Ascending : ",(ascen.slice(0)).join(","));

var descen = ascen.reverse();
console.log("Descending : ",(descen.slice(0)).join(","));

var fil = angka.filter(a => {
    return a > 10
});

console.log("Filter > 10 : ",(fil.slice(0)).join(","));