var items = [
  { name: "Bleach", rating: 7.91, imageUrl: "poze/Bleach-icon.webp", href: "Bleach.html" ,description:"<span>TV, 2 seasons, 378+ episodes</span>"},
  { name: "Code Geass: Lelouch of the Rebellion", rating: 8.70, imageUrl: "poze/Code Geass.webp", href: "Code Geass.html",description:"<span>TV, 2 seasons, 50 episodes</span>"},
  { name: "Yuu Yuu Hakusho: Ghost Files", rating: 8.46, imageUrl: "poze/Yuu☆Yuu☆Hakusho.webp", href: "Yuu Yuu hakusho.html" ,description:"<span>TV, 1 season, 112 episodes</span>"},
  { name: "Classroom of the Elite", rating: 7.86, imageUrl: "poze/Classroom of the Elite.webp", href: "Classroom of the Elite.html" ,description:"<span>TV, 2 seasons, 25 episodes</span>"},
  { name: "Chainsaw Man", rating: 8.6, imageUrl: "poze/Chainwsaw Man.jpg", href: "Chainsaw Man.html",description:"<span>TV, 1 season, 12 episodes</span>" },
  { name: "Hunter x Hunter", rating: 9.04, imageUrl: "poze/Hunter x Hunter.jpg", href: "Hunter x Hunter.html" ,description:"<span>TV, 1 season, 148 episodes</span>"},
  { name: "Attack on Titan", rating: 8.54, imageUrl: "poze/Attack on titan.jpg", href: "Attack on Titan.html" ,description:"<span>TV, 4 seasons, 88+ episodes</span>"},
  { name: "Demon Slayer: Kimetsu no Yaiba", rating: 8.51, imageUrl: "poze/Demon slayer.jpg", href: "Demon Slayer.html" ,description:"<span>TV, 4 seasons, 81+ episodes</span>"},
  { name: "Black Bullet", rating: 7.1, imageUrl: "poze/Black Bullet.jpg", href: "Black Bullet.html" ,description:"<span>TV, 1 season, 13 episodes</span>"},
  { name: "Black Clover", rating: 8.14, imageUrl: "poze/Black Clover.jpg", href: "Black Clover.html" ,description:"<span>TV, 1 season, 170 episodes</span>"},
  { name: "The Eminence in Shadow", rating: 8.34, imageUrl: "poze/The Eminence in Shadow.jpg", href: "The Eminence in Shadow.html" ,description:"<span>TV, 1 season, 20 episodes</span>"},
  { name: "Fairy Tail", rating: 7.57, imageUrl: "poze/Fairy Tail.jpg", href: "Fairy Tail.html" ,description:"<span>TV, 3 seasons, 328 episodes</span>"},
  { name: "Kuroko's Basketball", rating: 8.06, imageUrl: "poze/Kuroko's Basketball.jpg", href: "Kuroko Basketball.html" ,description:"<span>TV, 3 seasons, 75 episodes</span>"},
  { name: "Psycho-Pass", rating: 8.34, imageUrl: "poze/Psycho Pass.jpg", href: "Psycho-Pass.html" ,description:"<span>TV, 3 seasons, 41 episodes</span>"},
  { name: "No Game, No Life", rating: 8.08, imageUrl: "poze/No Game, No Life.jpg", href: "No Game, No Life.html",description:"<span>TV, 1 season, 12 episodes</span>" },
  { name: "Akame ga Kill", rating: 7.83, imageUrl: "poze/Akame ga Kill.jpg", href: "Akame ga Kill.html" ,description:"<span>TV, 1 season, 24 episodes</span>"},
  { name: "Tokyo Ghoul", rating: 7.79, imageUrl: "poze/Tokyo Ghoul.jpg", href: "Tokyo Ghoul.html",description:"<span>TV, 2 seasons, 24 episodes</span>"},
  { name: "Steins;Gate", rating: 9.07, imageUrl: "poze/Steins Gate.jpg", href: "Steins;Gate.html",description:"<span>TV, 1 season, 24 episodes</span>"},
  { name: "Fullmetal Alchemist: Brotherhood", rating: 9.10, imageUrl: "poze/Fullmetal Alchemist Brotherhood.jpg", href: "Fullmetal Alchemist Brotherhood.html",description:"<span>TV, 2 seasons, 115 episodes</span>"},
  { name: "Monster", rating: 8.87, imageUrl: "poze/Monster.jpg", href: "Monster.html",description:"<span>TV, 1 season, 74 episodes</span>"},
  { name: "Bleach Thousand Year Blood War", rating: 9.07, imageUrl: "poze/Bleach Thousand Year Blood War.jpg", href: "Bleach Thousand Year Blood War.html",description:"<span>TV, 4 season, 50 episodes</span>"},
  { name: "Naruto", rating: 8.26, imageUrl: "poze/Naruto.jpg", href: "Naruto.html",description:"<span>TV, 2 seasons, 720 episodes</span>"},
  { name: "Dragon Ball", rating: 7.96, imageUrl: "poze/Dragon Ball.jpg", href: "dragon-ball.html",description:"<span>TV, 9 seasons, 798 episodes</span>"},
  { name: "One Piece", rating: 8.69, imageUrl: "poze/One Piece.jpg", href: "one-piece.html",description:"<span>TV, 1 season, 1063+ episodes</span>"},
  { name: "Vinland Saga", rating: 8.74, imageUrl: "poze/Vinland Saga.jpg", href: "Vinland Saga.html",description:"<span>TV, 2 seasons, 48+ episodes</span>"},
  { name: "Goblin Slayer", rating: 7.42, imageUrl: "poze/Goblin Slayer.jpg", href: "Goblin Slayer.html",description:"<span>TV, 2 seasons, 12+ episodes</span>"},
  { name: "Jujutsu Kaisen", rating: 8.63, imageUrl: "poze/Jujutsu Kaisen.jpg", href: "Jujutsu Kaisen.html",description:"<span>TV, 2 seasons, 27+ episodes</span>"},
  { name: "Heavenly Delusion", rating: 8.23, imageUrl: "poze/Heavenly Delusion.jpg", href: "Heavenly Delusion.html",description:"<span>TV, 1 season, 13 episodes</span>"}
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
  htmlOutput += '<td class="image-container"><a href="' + items[i].href + '"><img src="' + items[i].imageUrl + '" alt="Item Image"></a></td>';
  htmlOutput += '<td class="name"><a href="' + items[i].href + '">' + items[i].name + '</a>' + items[i].description +'</td>';
  htmlOutput += '<td class="rating-1">' + items[i].rating + '</td>';
  htmlOutput += '<td class="button-container"><button onclick="window.location.href=\'' + items[i].href + '\'">Your Rating</button></td>';
  htmlOutput += '</tr>';
}

// Update the items container with the generated HTML
document.getElementById("itemsContainer").innerHTML = htmlOutput;