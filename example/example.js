const Testa = require('../src/index.js');
let tester = new Testa();

tester.addTest(function(){      
    this.a = [1,2,3,4,5];
    return tester.testAssertArray(a);
},"testAssertArray");
// if you dont specify name of test, it will name it test + index of test
tester.addTest(function(){      
    
    return tester.testAssertBoolean(this.a);
});
tester.addTest(function(){      
    
    return tester.testAssertFalsy(!this.a);
});
tester.Execute();
tester.getResults();