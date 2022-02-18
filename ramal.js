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