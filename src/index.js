
class Testa{
    tests =[];
    passed = 0;
    failed = 0;
    messages = [];
    #beforeTest=()=>{};
    #afterTest=()=>{};
    #beforeAll=()=>{};
    #afterAll=()=>{};

    Execute(){
        this.#beforeAll();
        for(let i=0; i<this.tests.length; i++){
        let msg;
        this.#beforeTest();
        msg = this.testFunction(this.tests[i].test);
        if( msg) {
        if(!this.tests[i].name)
        this.tests[i].name = "test "+ parseInt(i+1);
        this.addMsg( this.tests[i].name + "  =>  " + msg);
    }
        this.#afterTest();
        }
        this.#afterAll();
    }
    addMsg(msg){
        if(msg)
        this.messages.push(msg);
    }
    beforeEach(fn){
        this.beforeTest = fn;
    }
    afterEach(fn){
        this.afterTest = fn;
    }

    testFunction(fn){
         return fn()
    }
    addTest(fn,name){
        let testi={test:fn,name:name}
        this.tests.push(testi);
    }
    getResults(){
        console.log("passed :"+this.passed);
        console.log("failed :"+this.failed);
        console.log("messages :");
        console.log(this.messages);
    }
    testAssertToBe(expected, actual) {
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
            return 'Expected true but got ' + actual;
        }
    }
    testAssertFalse(actual) {
        if (actual === false) {
            this.passed++;
        } else {
            this.failed--;
           return 'Expected false but got ' + actual;
        }
    }
    testAssertFalsy(actual) {
        if (!actual) {
            this.passed++;
        } else {
            this.failed--;
           return 'Expected falsy value but got ' + actual;
        }
    }
    testAssertTruthy(actual) {
        if (actual) {
            this.passed++;
        } else {
            this.failed--;
           return 'Expected truthy value but got ' + actual;
        }
    }
    testAssertNotToBe( expected, actual) {
        if (expected !== actual) {
            this.passed++;
        } else {
            this.failed--;
            return 'Expected not ' + expected + ' but got ' + actual;
        }
    }
    testAssertNotNull(actual) {
        if (actual !== null) {
            this.passed++;
        } else {
            this.failed--;
            return 'Expected not null but got ' + actual;
        }
    }
    testAssertNotUndefined( actual) {
        if (actual !== undefined) {
            this.passed++;
        } else {
            this.failed--;
            return 'Expected not undefined but got ' + actual;
        }
    }
    testAssertThrow(fn) {
        try {
            fn();
            this.failed--;
            return 'Expected throw but got no exception';
        }
        catch (e) {
            this.passed++;
        }
}
    testAssertInstanceOf( expected, actual) {
    if (actual instanceof expected) {
        this.passed++;
    } else {
        this.failed--;
        return 'Expected instance of ' + expected + ' but got ' + actual;
    }
}
    testAssertNotInstanceOf( expected, actual) {
    if (!(actual instanceof expected)) {
        this.passed++;
    } else {
        this.failed--;
        return 'Expected not instance of ' + expected + ' but got ' + actual;
    }
}
    testAssertInheritsFrom( expected, actual) {
    if (actual instanceof expected) {
        this.passed++;
    } else {
        this.failed--;
        return 'Expected inherits from ' + expected + ' but got ' + actual;
    }
}
    testAssertNotInheritsFrom(expected, actual) {
    if (!(actual instanceof expected)) {
        this.passed++;
    } else {
        this.failed--;
        return 'Expected not inherits from ' + expected + ' but got ' + actual;
    }
}
    testAssertIn(expected, actual) {
    if (actual.indexOf(expected) !== -1) {
        this.passed++;
    } else {
        this.failed--;
        return 'Expected in ' + expected + ' but got ' + actual;
    }
}
    testAssertNotIn(expected, actual) {
    if (actual.indexOf(expected) === -1) {
        this.passed++;
    } else {
        this.failed--;
        return 'Expected not in ' + expected + ' but got ' + actual;
    }
}
    testAssertArray( actual) {
    if (actual instanceof Array) {
        this.passed++;
    } else {
        this.failed--;
        return 'Expected array but got ' + actual;
    }
}
    testAssertNotArray( actual) {
    if (!(actual instanceof Array)) {
        this.passed++;
    } else {
        this.failed--;
        return 'Expected not array but got ' + actual;
    }
}
    testAssertObject(actual) {
    if (actual instanceof Object) {
        this.passed++;
    } else {
        this.failed--;
        return 'Expected object but got ' + actual;
    }
}
    testAssertNotObject(actual) {
    if (!(actual instanceof Object)) {
        this.passed++;
    } else {
        this.failed--;
        return 'Expected not object but got ' + actual;
    }
}
    testAssertFunction( actual) {
    if (typeof actual === 'function') {
        this.passed++;
    } else {
        this.failed--;
        return 'Expected function but got ' + actual;
    }
}
    testAssertNotFunction( actual) {
    if (typeof actual !== 'function') {
        this.passed++;
    } else {
        this.failed--;
        return 'Expected not function but got ' + actual;
    }
}
    testAssertString( actual) {
    if (typeof actual === 'string') {
        this.passed++;
    } else {
        this.failed--;
        return 'Expected string but got ' + actual;
    }
}
    testAssertNotString( actual) {
    if (typeof actual !== 'string') {
        this.passed++;
    } else {
        this.failed--;
        return 'Expected not string but got ' + actual;
    }
}
    testAssertNumber( actual) {
    if (typeof actual === 'number') {
        this.passed++;
    } else {
        this.failed--;
        return 'Expected number but got ' + actual;
    }
}
// check if test is passed
    testAssertNotNumber( actual) {
    if (typeof actual !== 'number') {
        this.passed++;
    } else {
        this.failed--;
        return 'Expected not number but got ' + actual;
    }
}
// check if test is passed 
     testAssertBoolean(actual) {
    if (typeof actual === 'boolean') {
        this.passed++;
    } else {
        this.failed--;
        return 'Expected boolean but got ' + actual;
    }
}
// check if test is passed
    testAssertNotBoolean(actual) {
    if (typeof actual !== 'boolean') {
        this.passed++;
    } else {
        this.failed--;
        return 'Expected not boolean but got ' + actual;
    }
}
}
module.exports = Testa;