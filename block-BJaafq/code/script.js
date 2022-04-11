// #### Add two number

// 1. Write a function that takes two input `numA` and `numB` and returns the sum of both numbers.
// 2. After writing the function write 5 tests for above function with different values
// 3. Throw an error when the arguments passed in not a number.
// 4. Make first test fail and see if you get the result of second test.
// 5. If not fix it using the test framework (try...catch) we learned in the testing framework video.

function test (message,cb){
    try{
        cb();
        console.log('Passed'+message);
    }catch(error){
        console.error(error);
        console.log('failed'+message);
    }
}

function expect(result){
    return{
        toEqual:function(expected){
            if(result!==expected){
            throw new Error(`${actual} is not a equal to ${expected}`)   
             }     }
    }
    isTypeNumber : function  (expected){
        if(typeof result !== expected){
            throw new Error (`${result} type is not number`)
        }
        }
}

function sum(numA,numB){
    let sum=numA+numB;
    return sum;
}
function test(message,cb){
    try{
        cb();
        console.log("success","message");
    }catch(error){
        console.log(error);
    }
}
 function sumTest(){
     let result=sum(8,8);
     let expected=15;
     if(result !==expected){
         throw new Error(`${result} is not equal to ${expected}`) 
     }
 }
 function sumTest2(){
     let result=sum(20,20);
     let expected=40;
     if(result !==expected){
        throw new Error(`${result} is not equal to ${expected}`)  
     } 
 }
 function sumTest3(){
    let result=sum(30,30);
    let expected=40;
    if(result !==expected){
       throw new Error(`${result} is not equal to ${expected}`)  
    } 
}
function sumTest4(){
    let result=sum(10,10);
    let expected=20;
    if(result !==expected){
       throw new Error(`${result} is not equal to ${expected}`)  
    } 
}
function sumTest5(){
    let result=sum(5,5);
    let expected=10;
    if(result !==expected){
       throw new Error(`${result} is not equal to ${expected}`)  
    } 
}

test("adding two number", sumTest);
test("adding two number", sumTest2);
test("adding two number", sumTest3);
test("adding two number", sumTest4);
test("adding two number", sumTest5);