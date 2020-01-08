var passed = true;

function verify(fun, args, expected) {
    var result = false;
    var actualValue = fun.apply(this,args);
    var logMessage = "Input: " + args + "   Actual:" + actualValue + " Expected:" + expected;
    if (actualValue === expected) {
        result = true;
        logMessage = "Passed => " + logMessage
    } else {
        logMessage = "!! Error => " + logMessage
    }
    console.log(logMessage);
    passed &= result;
    return result;
}

function printResult()
{
    if(passed)
    {
        console.log("--- All Test PASSED ---")
    }else{
        console.log("--- Test(s) FAILED ---")
    }
}
