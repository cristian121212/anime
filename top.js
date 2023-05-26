var items = [
  { name: "Bleach", rating: 7.91, imageUrl: "poze/Bleach-icon.webp", href: "Bleach.html"},
  { name: "Code Geass: Lelouch of the Rebellion", rating: 8.70, imageUrl: "poze/Code Geass.webp", href: "Code Geass.html"},
  { name: "Yu Yu Hakusho: Ghost Files", rating: 8.46, imageUrl: "poze/Yuu☆Yuu☆Hakusho.webp", href: "Yuu Yuu hakusho.html" },
  { name: "Classroom of the Elite", rating: 7.86, imageUrl: "poze/Classroom of the Elite.webp", href: "Classroom of the Elite.html" },
  { name: "Chainsaw Man", rating: 8.6, imageUrl: "poze/Chainwsaw Man.jpg", href: "Chainsaw Man.html" },
  { name: "Hunter x Hunter", rating: 9.04, imageUrl: "poze/Hunter x Hunter.jpg", href: "Hunter x Hunter.html" },
  { name: "Attack on Titan", rating: 8.54, imageUrl: "poze/Attack on titan.jpg", href: "Attack on Titan.html" },
  { name: "Demon Slayer: Kimetsu no Yaiba", rating: 8.51, imageUrl: "poze/Demon slayer.jpg", href: "Demon Slayer.html" },
  { name: "Black Bullet", rating: 7.1, imageUrl: "poze/Black Bullet.jpg", href: "Black Bullet.html" },
  { name: "Black Clover", rating: 8.14, imageUrl: "poze/Black Clover.jpg", href: "Black Clover.html" },
  { name: "The Eminence in Shadow", rating: 8.34, imageUrl: "poze/The Eminence in Shadow.jpg", href: "The Eminence in Shadow.html" },
  { name: "Fairy Tail", rating: 7.57, imageUrl: "poze/Fairy Tail.jpg", href: "Fairy Tail.html" },
  { name: "Kuroko's Basketball", rating: 8.06, imageUrl: "poze/Kuroko's Basketball.jpg", href: "Kuroko Basketball.html" },
  { name: "Psycho-Pass", rating: 8.34, imageUrl: "poze/Psycho Pass.jpg", href: "Psycho-Pass.html" },
  { name: "No Game, No Life", rating: 8.08, imageUrl: "poze/No Game, No Life.jpg", href: "No Game, No Life.html" },
  { name: "Akame ga Kill", rating: 7.83, imageUrl: "poze/Akame ga Kill.jpg", href: "Akame ga Kill.html" },
  { name: "Tokyo Ghoul", rating: 7.79, imageUrl: "poze/Tokyo Ghoul.jpg", href: "Tokyo Ghoul.html" },
];

// Sort the items based on their ratings in descending order
items.sort(function(a, b) {
  return b.rating - a.rating;
});

// Generate HTML output with sorted items
var htmlOutput = '';
for (var i = 0; i < items.length; i++) {
  htmlOutput += '<tr>';
  htmlOutput += '<td class="rank">' + (i + 1) + '</td>';
  htmlOutput += '<td class="image-container"><img src="' + items[i].imageUrl + '" alt="Item Image"></td>';
  htmlOutput += '<td class="name">' + items[i].name + '</td>';
  htmlOutput += '<td class="rating">' + items[i].rating + '</td>';
  htmlOutput += '<td class="button-container"><button onclick="window.location.href=\'' + items[i].href + '\'">Your Rating</button></td>';
  htmlOutput += '</tr>';
}

// Update the items container with the generated HTML
document.getElementById("itemsContainer").innerHTML = htmlOutput;