/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  let unggas = [];
  let kadal = [];
  let kaki4 = [];
  let hasil = [unggas, kadal, kaki4];
  for (let i = 0; i < animals.length; i++) {
    if (animals[i] === "cacing") {
      kadal.push(animals[i]);
    } else if (animals[i] === "cicak") {
      kadal.push(animals[i]);
    } else if (animals[i] === "ayam") {
      unggas.push(animals[i]);
    } else if (animals[i] === "kuda") {
      kaki4.push(animals[i]);
    } else if (animals[i] === "anoa") {
      unggas.push(animals[i]);
    } else if (animals[i] === "kancil") {
      kaki4.push(animals[i]);
    } else if (animals[i] === "unta") {
      kaki4.push(animals[i]);
    }
  }return hasil;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
