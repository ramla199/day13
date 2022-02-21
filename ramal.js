const ramal = "hi";


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


function reverse_a_number(n) {
    n = n + "";

    return n.split("").reverse().join("");
}

(function () {
    var a = b = 5;
})();

console.log(b);

(function () {
    'use strict';
    var a = window.b = 5;
})();

console.log(b);


// repeat
console.log('hello'.repeatify(3));


String.prototype.repeatify = String.prototype.repeatify || function (times) {
    var str = '';

    for (var i = 0; i < times; i++) {
        str += this;
    }

    return str;
};

function test() {
    console.log(a);
    console.log(foo());

    var a = 1;
    function foo() {
        return 2;
    }
}

test();

function test() {
    var a;
    function foo() {
        return 2;
    }

    console.log(a);
    console.log(foo());

    a = 1;
}

test();

var fullname = 'John Doe';
var obj = {
    fullname: 'Colin Ihrig',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function () {
            return this.fullname;
        }
    }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());

console.log(test.call(obj.prop));

const ramal = "hi";


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


function reverse_a_number(n) {
    n = n + "";

    return n.split("").reverse().join("");
}

(function () {
    var a = b = 5;
})();

console.log(b);

(function () {
    'use strict';
    var a = window.b = 5;
})();

console.log(b);


(function () {
    var a = b = 5;
})();

console.log(b);

(function () {
    'use strict';
    var a = window.b = 5;
})();

console.log(b);


// repeat
console.log('hello'.repeatify(3));


String.prototype.repeatify = String.prototype.repeatify || function (times) {
    var str = '';

    for (var i = 0; i < times; i++) {
        str += this;
    }

    return str;
};

function test() {
    console.log(a);
    console.log(foo());

    var a = 1;
    function foo() {
        return 2;
    }
}

test();

function test() {
    var a;
    function foo() {
        return 2;
    }

    console.log(a);
    console.log(foo());

    a = 1;
}

test();

var fullname = 'John Doe';
var obj = {
    fullname: 'Colin Ihrig',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function () {
            return this.fullname;
        }
    }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());

console.log(test.call(obj.prop));

const ramal = "hi";


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


function reverse_a_number(n) {
    n = n + "";

    return n.split("").reverse().join("");
}