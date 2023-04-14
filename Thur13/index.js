let num = 10;

if (num / 3 == 0) {
    console.log("Foo");
}
if (num / 5 == 0) {
    console.log("Bar");
}
else if (num / 3 && num / 5 == 0) {
    console.log("Foo & Bar");
}
else {
    console.log("Neither Foo nor Bar");
}