const obj = {
    name: 'Arigit',
    surname: 'Singh',
    years_of_exp: 8,
    sing: function() {
        console.log('Oh Sajni Re');
    }
};
console.log(typeof obj);
// console.log(obj.sing());
// obj.sing();
// console.log(JSON.stringify(obj));
const jsonString  = JSON.stringify(obj);
console.log(JSON.parse(jsonString));
// JSON.stringify(), JSON.parse(), localStorage.