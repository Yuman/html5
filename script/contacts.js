/*
We could use an object literal to express a contact:
let mike = {name: "Mike Schneider", phone: "310-123-5555"}

Using a Contact class, as the blueprint for the object, 
imposes a structure and conformity. 

*/
class Contact{
  constructor(contactname, phone, email, address){
    this.contactname = contactname;
    this.phone = phone;
    this.email = email;
    this.address = address;
  }
}

/*
We could use a Map https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
to store the contact details, using the name as the key and the detail object as the vaue.

For the sake of practice, we design a Contacts class to mimic the features of Map,
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

This is not meant to be reusable code, but for the understanding of the features of Object and Map.
*/
class Contacts{
  details = {}; 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

  add(name, detail){
    // add a contact detail by the name
    this.details[name] = detail;
  }

  remove(name){
    //delete the deteil by name
    delete this.details[name];
  }

  count(){
    // count the number of contacts
    return Object.keys(this.details).length;
  }

  getDetail(name){
    // given a full name, return the contact detail
    return this.details[name]
  }

  getAll(){
    // return all contact details as an array
    return Object.values(this.details);
  }
}