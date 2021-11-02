function receivesAFunction(callback){
    callback();
}

const returnsANamedFunction = x => {
    return receivesAFunction
}

const returnsAnAnonymousFunction = x => {
    return function(){}
}