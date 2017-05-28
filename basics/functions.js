var foo = function bar() {
  console.log(arguments.callee);
};


foo();


//closures:
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41

function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
result = fn_inside(5); // returns 8

result1 = outside(3)(5); // returns 8


function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // logs 6 (1 + 2 + 3)


var createPet = function(name) {
  var sex;

  return {
    setName: function(newName) {
      name = newName;
    },

    getName: function() {
      return name;
    },

    getSex: function() {
      return sex;
    },

    setSex: function(newSex) {
      if (typeof newSex === 'string' && (newSex.toLowerCase() === 'male' ||
          newSex.toLowerCase() === 'female')) {
        sex = newSex;
      }
    }
  }
}

var pet = createPet('Vivie');
pet.getName(); // Vivie

pet.setName('Oliver');
pet.setSex('male');
pet.getSex(); // male
pet.getName(); // Oliver

console.log(pet);


var getCode = (function() {
  var secureCode = '0]Eal(eh&2'; // A code we do not want outsiders to be able to modify...

  return function() {
    return secureCode;
  };
}());

console.log(getCode()); // Returns the secureCode



// arguments builtin:

function myConcat(separator) {
  var result = ''; // initialize list
  var i;
  // iterate through arguments
  for (i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}


// returns "red, orange, blue, "
console.log(myConcat(', ', 'red', 'orange', 'blue'));

// returns "elephant; giraffe; lion; cheetah; "
console.log(myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah'));

// returns "sage. basil. oregano. pepper. parsley. "
console.log(myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley'));



// rest parameters (varargs):
function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]


//arrow functions:
var a = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

var a2 = a.map(function(s) {
  return s.length;
});

console.log(a2); // logs [8, 6, 7, 9]

var a3 = a.map(s => s.length);

console.log(a3); // logs [8, 6, 7, 9]


var x = 2;
var y = 3;
var func = x => x * x;
// concise syntax, implied "return"

var func = (x, y) => {
  return x + y;
};
// with block body, explicit "return" needed

console.log(func(x, y));

//object literal:
var func = () => ({
  foo: 1
});
