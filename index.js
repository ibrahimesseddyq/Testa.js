
class Testa{
    tests =[];
    passed = 0;
    failed = 0;
    messages = [];

    Execute(before,after){
        for(let i=0; i<this.tests.length; i++){
        before();
        this.testFunction(this.tests[i]);
        after();
        }
    }
    // testBeforeEach(fn){
    //     fn()
    // }
    // testAfterEach(fn){
    //     fn()
    // }
    testFunction(fn){
        fn() 
    }
    addTest(fn){
        this.tests.push(fn);
    }
    getResults(){
        return this.messages;
    }
    testAssertEqual(expected, actual) {
        if (expected === actual) {
            this.passed++;
        } else {
            this.failed++;
            this.messages.push('Expected ' + expected + ' but got ' + actual);
        }
    }
    testAssertTrue( actual) {
        if (actual === true) {
            this.passed++;
        } else {
            this.failed--;
            this.messages.push('Expected true but got ' + actual);
        }
    }
}

let tester = new Testa();
tester.addTest(function(){
    tester.testAssertEqual(1,1);
}   );
tester.addTest(function(){  
    tester.testAssertEqual(1,2);
}   );
tester.Execute(()=>{},()=>{});
console.log(tester.getResults());