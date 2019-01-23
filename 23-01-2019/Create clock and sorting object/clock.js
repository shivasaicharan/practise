setInterval(function () {
    var a = new Date();
    a = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    document.getElementById("time").innerHTML = a;
});
function sort() {
    var book = {
        title: "Making India Awesome",
        author: "A Chetan bhagat",
        price: 1200
    };
    var book1 = {
        title: "The 3 mistakes in my life",
        author: "Chetan bhagat",
        price: 120
    };
    var book2 = {
        title: "Lord of rings",
        author: "Tolkine",
        price: 360
    };
    var a = [];
    a.push(book, book1, book2);
    a.sort(function (a, b) {
        return a.price - b.price
    });
    a.sort(function (a1, b1) {
        var x = a1.title.toLowerCase();
        var y = b1.title.toLowerCase();
        console.log(a);
        return (x < y ? -1 : (x > y ? 1 : 0));
    });
    console.log("inner", a);
    document.getElementById("book").innerHTML = JSON.stringify(a);
}