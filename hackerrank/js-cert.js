if-else - fizzbuzz

object copy excluding a prop

Map size, delete, set

mdn doc on Map

/*
...But, it does not behave as expected:
-->
But that way of setting a property does not interact with the Map data structure. It uses the feature of the generic object. The value of 'bla' is not stored in the Map for queries. Othere operations on the data fail:


The correct usage for storing data in the Map is through the set(key, value) method.


*/


let contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie')  // true
contacts.get('Hilary')  // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie')  // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie')  // true
console.log(contacts.size)  // 1
