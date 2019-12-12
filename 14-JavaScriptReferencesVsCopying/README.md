# JavaScript Referencing vs Copying Values

This exercise looks at referencing values vs creating copies. Very useful for when you want to create a copy of an object or array and not edit the original.

## What I learned

Primitive types - strings, numbers, booleans, null and undefined, are easily copied, and do not update the value of the variable that was copied:

```javascript
let var1 = 'hello';
let var2 = var1;
console.log(var1, var2);
// Returns 'hello', 'hello';

var2 = 'hi';
console.log(var1, var2);
// Returns 'hello', 'hi'
```

This same method applied to arrays or objects, however, creates a reference to the original. This means that any change made in the new variable will be reflected in the orginal.

```javascript
const array = [1, 2, 3];
const array2 = array;
console.log(array, array2);
// Returns [1, 2, 3], [1, 2, 3]

array2[2] = 1;
console.log(array, array2);
// Returns [1, 2, 1], [1, 2, 3];
```

Creating copies of arrays:
* Slice method: ``const array2 = array.slice()``
* Concatenate method: ``const array2 = [].concat(array)``
* ES6 spread operator: ``const array2 = [...array]``
* Array from: ``const array2 = Array.from(array)``

Creating copies of objects:
* Object from: ``const object2 = Object.assign({}, object)``
* This can be used to copy and change the values by adding arguments:
```javascript
const object2 = Object.assign({}, object, {
  property: 'newvalue',
  newProperty: 'Not in the original'
});
```
* The spread operator is new in ES2018 and supported in newer browsers, [see the support here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax). It can be used as follows: ``const object2 = {...object}``
* When creating copies of objects, the copies are only one level deep. This means that if you are changing properties beyond the first level, the original will also be changed.
* This can be worked around using lodash cloneDeep OR this method to read objects as JSON, then stringify:
```javascript
const object2 = JSON.parse(JSON.stringify(object));
```

## Additional Notes

* While this exercise didn't produce an actual 'thing' to show, it did create a valuable reference, and gave me new insights into objects and arrays.