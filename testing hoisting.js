function test() {
    console.log(a);
    console.log(foo());

    var a = 1;
    function foo() {
        return 2;
    }
}

test();




function test() {}

    function foo() {}
    var a;

test();

console.log(a); // is undefined

console.log(foo()); // is 2
