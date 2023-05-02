"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        dg: 'red'
    },
    makeTest: function() {
        console.log("test");
    }
};

options.makeTest();

const {border, bg} = options.colors;  // реструкторизация 
console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;     // удаление свойства у объекта 
// console.log(options);


// let counter = 0;   // сколько всего свойств в объектк 
  
// for (let key in options) {    // перебор свойств объекта, for in
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
//     //console.log(`Свойство ${key} имеет значение ${options[key]}`);
// } 
// console.log(counter);

