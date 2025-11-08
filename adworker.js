let array = [];
let folder = fetch("ads");

folder.forEach(addad);


function addad(element){
    array.push(element);
    console.log(array)
}