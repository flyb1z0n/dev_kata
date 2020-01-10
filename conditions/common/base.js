var passed = true;
var errors = []
var realConsoleLog = console.log
var consoleStash = [];
console.log = function(a)
{
    consoleStash.push(a);
    realConsoleLog(a);
}

function verify(fun, args, expected) {
    var result = false;
    var actualValue = fun.apply(this, args);
    var logMessage = "Input: " + args + "   Actual:" + actualValue + " Expected:" + expected;
    if (actualValue === expected) {
        result = true;
        logMessage = "Passed => " + logMessage
    } else {
        logMessage = "!! Error => " + logMessage
        errors.push(logMessage);
    }
    
    realConsoleLog(logMessage);
    passed &= result;
    return result;
}

function printResult()
{
    if(passed)
    {
        realConsoleLog("--- All Test PASSED ---")
    }else{
        realConsoleLog("----------------------")
        errors.forEach(m => realConsoleLog(m))
        realConsoleLog("--- Test(s) FAILED ---")
    }
}
