function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return persons.map(person => greeter(person)).join(', ');
}

let user = ["Jane", "Doe"];

console.log(greeterArray(user)); //Correct usage

//Alternative solution if you want to change the original function
function greeter2(person: string | string[]): string | string[]{
    if(typeof person === 'string'){
        return "Hello, " + person;
    } else {
        return person.map(p => "Hello, " + p);
    }
}
console.log(greeter2(user));
console.log(greeter2("Jane"));