// // Wybierz wszystkie checkboxy wewnątrz elementu listaZindeksem_NieKolekcja
// const checkboxes = listaZindeksem_NieKolekcja.getElementsByClassName("inputM");

// // Dodaj obsługę zdarzenia zmiany stanu checkboxa
// for (let i = 0; i < checkboxes.length; i++) {
//     checkboxes[i].addEventListener("change", function () {
//         // Sprawdź, czy checkbox jest zaznaczony
//         if (this.checked) {
//             // Jeśli jest zaznaczony, zmień tło elementu nadrzędnego (np. div) na czerwone
//             this.parentElement.style.backgroundColor = "red";
//         } else {
//             // Jeśli nie jest zaznaczony, przywróć domyślne tło elementu nadrzędnego
//             this.parentElement.style.backgroundColor = ""; // lub możesz ustawić inne tło, jeśli jest
//         }
//     });
// }
/* const checkboxes = document.querySelectorAll('.inputM');
console.log("🚀 ~ file: main.js:18 ~ checkboxes:", checkboxes);


checkboxes.forEach((checkbox) => {

    checkbox.addEventListener('change', function () {
        const span = this.nextElementSibling; // Znajdź sąsiadujący element span

        if (this.checked) {
            span.style.color = 'red';
            // const obj = {}; // Tutaj zamiast tego podaj rzeczywisty obiekt
            // const obj = span;
            // const nazwyWłaściwościPrototypu = Object.getOwnPropertyNames(obj.__proto__);
            console.log("w funkcji", nazwyWłaściwościPrototypu);
            // Zaznaczony checkbox - zmień kolor tekstu na czerwony
        } else {
            span.style.color = 'black';// Odznaczony checkbox - przywróć domyślny kolor tekstu
        }
    });
}); */
const checkboxes = document.querySelectorAll('.inputM');
console.log("🚀 ~ file: main.js:39 ~ checkboxes.length:", checkboxes.length)

checkboxes.forEach((checkbox) => {
    console.log("🚀 ~ file: main.js:57 ~ checkboxes.forEach ~ checkbox:", checkbox)    
    checkbox.addEventListener('change', function () {
        const span = this.parentNode.querySelector('.spanM'); // Znajdź element span w ramach tego samego rodzica co checkbox
        console.log("🚀 ~ file: main.js:45 ~ span:", span)

        // szuka w nodzi rodzica czyli w li?
        if (this.checked) {
            // span.style.backgroundColor = 'red'; // Zaznaczony checkbox - zmień tło na czerwone
            span.style.color = 'red'; // Zaznaczony checkbox - zmień tło na czerwone
        } else {
            // span.style.backgroundColor = 'white'; // Odznaczony checkbox - przywróć domyślne tło
            span.style.color = 'black'; // Odznaczony checkbox - przywróć domyślne
            // span.style
        }
    });
});






// const obj = {}; // Tutaj zamiast tego podaj rzeczywisty obiekt

// const nazwyWłaściwościPrototypu = Object.getOwnPropertyNames(obj.__proto__);
// console.log("po funkcji", nazwyWłaściwościPrototypu);


/* // let lista = document.getElementsByClassName('item');

let lista = document.getElementById('unsortedM');
console.log("🚀 ~ file: main.js:2 ~ lista:", lista);

let dzieci = lista.children;
console.log("🚀 ~ file: main.js:7 ~ dzieci:", dzieci);
let ktoreDziecko = lista.children[3];
console.log("🚀 ~ file: main.js:9 ~ ktoreDziecko:", ktoreDziecko);
// unsortedMclass
let elementLista = document.getElementsByClassName("ol")
console.log("🚀 ~ file: main.js:12 ~ elementLista:", elementLista)


// let elementListy = document.getElementsByClassName("ol")[0]
let listaZindeksem_NieKolekcja = document.getElementsByClassName("ol")[0]
console.log("🚀 ~ file: main.js:19 ~ listaZindeksem_NieKolekcja:", listaZindeksem_NieKolekcja)

let listaBezindeksu_Kolekcja = document.getElementsByClassName("ol")
console.log("🚀 ~ file: main.js:25 ~ listaBezindeksu_Kolekcja:", listaBezindeksu_Kolekcja)


// listaZindeksem_NieKolekcja.getElementsByClassName("spanM")[1].innerHTML = "Maslo"
// listaZindeksem_NieKolekcja.getElementsByClassName("inputM")[2].innerText = "Kawa"

for (let i=0; i<10; i++) {
    // let listaZindeksem_NieKolekcja = document.getElementsByClassName("ol")[0];
    console.log(i);
    let nacisniety = listaZindeksem_NieKolekcja.getElementsByClassName("inputM")[i].checked;
    console.log("🚀 ~ file: main.js:36 ~ nacisniety:", nacisniety);

    if (nacisniety === true) {
        let listaZindeksem_NieKolekcja = document.getElementsByClassName("ol")[0];
        console.log("zaznaczony");


    }
    listaZindeksem_NieKolekcja.getElementsByClassName("inputM")[2].setAttribute('class', 'bg-red');

}
// DZIALA ALE NIE NA CHECKBOX TYLKO INPUT
// listaZindeksem_NieKolekcja.getElementsByClassName("inputM")[2].setAttribute('class', 'bg-red')
// DZIALA TEZ ALE NIE NA CHECKBOX TYLKO INPUT
// listaZindeksem_NieKolekcja.getElementsByClassName("inputM")[2].style.backgroundColor = 'red'
// Dziala tez na spanM
// listaZindeksem_NieKolekcja.getElementsByClassName("spanM")[2].style.backgroundColor = 'red'

// listaZindeksem_NieKolekcja.getElementsByClassName("inputM")[i].


// console.log("🚀 ~ file: main.js:12 ~ elementListy:", elementListy)


// elementListy.children
// console.log("🚀 ~ file: main.js:18 ~ elementListy.children:", elementListy.children)


 */
