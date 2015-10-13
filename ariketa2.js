var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    // Your code goes here!
    var emaitza=[];
    for(izena in names){
        alderantziz =names[izena].split(" ");
        emaitza.push(alderantziz[1]+", "+alderantziz[0]);
    }
    return emaitza.sort();
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));
