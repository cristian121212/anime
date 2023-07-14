var items = [
  { name: "The Beginning After the End", rating: 9.8, imageUrl: "poze/TBATE.jpg", href: "TBATE.html" ,description:"<span>manga, 175+ chapters</span>"},
  { name: "SOLO LEVELING", rating: 9.8, imageUrl: "poze/Solo leveling", href: "Solo leveling.html" ,description:"<span>manhwa, 200+ chapters</span>"},

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
  htmlOutput += '<td class="rating">' + items[i].rating + '</td>';
  htmlOutput += '<td class="button-container"><button onclick="window.location.href=\'' + items[i].href + '\'">Your Rating</button></td>';
  htmlOutput += '</tr>';
}

// Update the items container with the generated HTML
document.getElementById("itemsContainer").innerHTML = htmlOutput;