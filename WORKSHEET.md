# JavaScript Hoisting Worksheet

## Instructions
1. Review each code snippet below.
2. Fill in what will be output to the console.
3. Run the code to see if you were correct.
4. Describe why the code behaved as it did.
5. Re-write the code snippet to maintain the same output, but to avoid hoisting.

```js
var myvar = 'my value';

(function() {
	console.log(myvar);
	var myvar = 'local value';
})();
```

> output:
>-
>-  undefined
>-
> why?
>-
>-    // self-executing function
>-	1 The function will hoist to the top of the global scope
>-	2 Then the declaration of 'myvar' gets hoisted to the top of the function
>-	3 Then the console.log is run before myvar has been assigned a value
>-	4 So the variable 'myvar' exists but has yet to be initialized
>-	5 Thus, undefined
>-
> rewrite without hoisting
>-
>- 	var myvar;
>-	myvar = 'my value';
>-
>-  (function() {
>-		var myvar;
>-		console.log(myvar);
>-		myvar = 'local value';
>-	}) ();
>-
>-
>-

```js
var flag = true;

function test() {
	if(flag) {
		var flag = false;
		console.log('Switch flag from true to false');
	}
	else {
		flag = true;
		console.log('Switch flag from false to true');
	}
}
test();
```

> output:
>-
>-  Switch flag from false to true (logged to the console)
>-
> why?
>-
>-	1. The function is hoisted to the top of the global scope
>- 	2. the variable flag is then declared
>-  2. function body is run straight down
>-	3. flag is falsey (it has not been defined), so it goes to the else statement
>-	4. flag is assigned a value but had never been declared - it is skipped
>-	5. 'Switch flag from false to true' is logged to the console
>-	6. the variable flag is initialized with a value of 'true'
>-	7. the test function is called
>-
>-
> rewrite without hoisting
>-
>-	function test() {
>-		if(flag) {
>-			var flag = false;
>-			console.log('Switch flag from true to false');
>-		}
>-		else {
>-			flag = true;
>-			console.log('Swtich flag from false to true');
>-		}
>-	}
>-	var flag;
>-  test();
>-	flag = true;
>-
>-


```js
var message = 'Hello world';

function saySomething() {
	console.log(message);
	var message = 'Foo bar';
}
saySomething();
```

> output:
>-
>-	undefined
>-
> why?
>-
>-	1. function declaration is hoisted to top of global scope
>-	2. inside function var message declaration is hoisted to top of function scope
>-  3. console.log(message); which will evaluate to undefined
>-	4. message is initialized as 'Foo bar'
>-	5. var message is declared in the global scope
>-	6. message is initialized as 'Hello world'
>-  7. function is called
>-
>-
> rewrite without hoisting
>-
>-	function saySomething() {}
>-    	var message; // in the function
>-    	console.log(message);
>-    	message = 'Foo bar';
>-
>-	var message;
>-	message = 'Hello world';
>-
>-	saySomething();
>-
>-

```js
var message = 'Hello world';

function saySomething() {
	console.log(message);
	message = 'Foo bar';
}
saySomething();
```

> output:
>-
>-  Hello world
>-
> why?
>-
>-	1. function declared
>- 	2. var message declared
>-	3. message initialized with a value of 'Hello World'
>-	4. function runs and logs "Hellow World" to the console
>-	5. message is re-assigned a value of "Foo bar"

```js
function test() {
	console.log(a);
	console.log(foo());

	var a = 1;
	function foo() {
		return 2;
	}
}

test();
```

> output:
>-
>- 	undefined
>-	2
>-
> why?
>-
>-	1. function test() {} is declared in global scope
>-  2. function foo() {} is declared at top of function test() scope
>-	3. var a is declared below function foo() inside of function test()
>- 	4. function test() is called
>-	5. console.log(a); evalutes to undefined
>- 	6. console.log(foo()); evaluates to 2 as it is successfull executed
>-	7. a is initialized with a value of 1
>-
> rewrite without hoisting
>-
>-  function test() {}
>-
>-    function foo() {}
>-    var a;
>-
>-  test();
>-
>-  console.log(a); // is undefined
>-
>-  console.log(foo()); // is 2
>-
>-

```js
(function() {
	console.log(bar);
	foo();

	function foo() {
		console.log('aloha');
	}

	var bar = 1;
	baz = 2;
})();
```

> output:
>-
>- undefined
>- aloha
>-
> why?
>-
>- 	1. function () {} declaration is hoisted to top of the global scope
>-	2. function foo() {} is declared at the top of the function () {}
>-	3. var bar is declared in the scope of function () {}
>-	4. bar is logged to the console
>- 	5. foo() is called and returns 'aloha' to the console
>-  6. bar is initialized with a value of 1
>-  7. baz is initialized with a value of 2 (but never declared)
>-
>-
> rewrite without hoisting
>-
>-    // self-executing function
>-  function() {}
>-		function foo() {}
>-	var bar;
>-  console.log(bar); // undefined
>-  foo(); // aloha
>-  bar = 1;
>-  baz = 2;
>-
>-
>-

```js
var run = false;

function fancy(arg1, arg2) {
	if(run) {
		console.log('I can run');
	}
	else {
		console.log('I can\'t run');
	}

	function run() {
		console.log('Will I run?');
	}
}
fancy();
```

> output:
>-
>-  I can run
>-
> why?
>-
>-  1. function fancy() {} is declared in global scope
>-  2. function run() {} is declared in function run() scope
>-  3. var run is declared
>-  4. run is initialized with a value of false
>-  5. fancy() is called but the function run() overtakes the global var run
>-
>-
> rewrite without hoisting
>-
>-  function fancy (arg1, arg2) {}
>-
>- 		function run() {}
>-
>-  var run;
>-
>-	fancy();
>-
>-  run = false;
>-
>-

```js
var run = false;

function fancy(arg1, arg2) {
	if(run) {
		console.log('I can run');
	}
	else {
		console.log('I can\'t run');
	}

	var run = function() {
		console.log('Will I run?');
	}
}
fancy();
```

> output:
>-
>- I can't run
>-
> why?
>-
>-  1. function fancy() {} declared in global scope
>-  2. var run declared in function fancy() scope
>-  3. var run declared in global scope
>-  4. fancy() called
>-  5. run initialized with value of function() in function fancy() scope
>-  6. run initialized with value of false in global scope
>-
>-
> rewrite without hoisting
>-
>-  function fancy() {}
>-    var run;
>-
>-  var run;
>-
>-  fancy(); // 'I can't run'
>-
>-  run = function () {}
>-
>-  run = false;
>-
>-
