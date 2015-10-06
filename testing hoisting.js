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


////////


function fancy (arg1, arg2) {}

var run;

    function run() {}

fancy();

run = false;


