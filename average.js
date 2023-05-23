function calculeazaMedia(lista) {
  if (lista.length === 0) {
    return 0;
  }
  var suma = lista.reduce(function(a, b) {
    return a + b;
  });
  var media = suma / lista.length;
  return media;
}

function afiseazaMedia() {
  var numere = [9];  // înlocuiește această listă cu numerele tale

  var rezultat = calculeazaMedia(numere);
  document.getElementById("rezultat").innerHTML = rezultat;
}