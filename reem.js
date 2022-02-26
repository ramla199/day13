function reverse_a_number(n) {
    n = n + "";

    return n.split("").reverse().join("");
}

const Address = {
    Australia: { Street: 'Victoria Rd', Suburb: 'Alberta', State: 'NSW', Zip: 2222 }
}
function getState(state) {
    const { Australia: { State: stateName } } = state;
    return stateName;
}



function test() {
    var a;
    function foo() {
        return 2;
    }

    console.log(a);
    console.log(foo());

    a = 1;
}

console.log('hello'.repeatify(3));


String.prototype.repeatify = String.prototype.repeatify || function (times) {
    var str = '';

    for (var i = 0; i < times; i++) {
        str += this;
    }

    return str;
};

