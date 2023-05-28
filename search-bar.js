const animeList = [
  { title: "Bleach", page: "Bleach.html" },
  { title: "Fullmetal Alchemist: Brotherhood", page: "Fullmetal Alchemist Brotherhood.html" },
  { title: "Steins;Gate", page: "Steins;Gate.html" },
  { title: "Bleach Thousand Year Blood War", page: "Bleach Thousand Year Blood War.html" },
  { title: "Hunter x Hunter", page: "Hunter x Hunter.html" },
  { title: "Monster", page: "Monster.html" },
  { title: "Code Geass: Lelouch of the Rebellion", page: "Code Geass.html" },
  { title: "Chainsaw Man", page: "Chainsaw Man.html" },
  { title: "Attack on Titan", page: "Attack on Titan.html" },
  { title: "Demon Slayer: Kimetsu no Yaiba", page: "Demon Slayer.html" },
  { title: "Yuu Yuu Hakusho: Ghost Files", page: "Yuu Yuu hakusho.html" },
  { title: "The Eminence in Shadow", page: "The Eminence in Shadow.html" },
  { title: "Psycho-Pass", page: "Psycho-Pass.html" },
  { title: "Black Clover", page: "Black Clover.html" },
  { title: "Akame ga Kill", page: "Akame ga Kill.html" },
  { title: "No Game, No Life", page: "No Game, No Life.html" },
  { title: "Kuroko's Basketball", page: "Kuroko Basketball.html" },
  { title: "Classroom of the Elite", page: "Classroom of the Elite.html" },
  { title: "Tokyo Ghoul", page: "Tokyo Ghoul.html" },
  { title: "Fairy Tail", page: "Fairy Tail.html" },
  { title: "Black Bullet", page: "Black Bullet.html" },
  { title: "Naruto", page: "Naruto.html" },
  { title: "One Piece", page: "one-piece.html" },
  { title: "Dragon Ball", page: "dragon-ball.html" }
]; // lista de anime-uri și paginile corespunzătoare

const searchInput = document.getElementById('search-input');
const suggestionsContainer = document.getElementById('suggestions-container');
const errorMessage = document.getElementById('error-message');
let isEnterPressed = false;

function showSuggestions() {
  const userInput = searchInput.value.toLowerCase();
  suggestionsContainer.innerHTML = '';

  if (userInput === '') {
    suggestionsContainer.style.display = 'none';
    return;
  }

  const filteredSuggestions = animeList.filter((anime) => anime.title.toLowerCase().startsWith(userInput));

  if (filteredSuggestions.length === 0 && isEnterPressed) {
    redirectToErrorPage();
  } else {
    errorMessage.style.display = 'none';
  }

  filteredSuggestions.forEach((anime) => {
    const li = document.createElement('li');
    const displayedTitle = anime.title.split(':')[0].substring(0, anime.minCharacters || anime.title.length);
    li.textContent = displayedTitle;
    li.addEventListener('click', () => {
      searchInput.value = anime.title;
      suggestionsContainer.innerHTML = '';
      redirectToPage(anime.page);
    });
    suggestionsContainer.appendChild(li);
  });

  suggestionsContainer.style.display = 'block';
}

function redirectToPage(page) {
  window.location.href = page;
}

function redirectToErrorPage() {
  errorMessage.style.display = 'block';
  searchInput.value = '';
}

searchInput.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    const userInput = searchInput.value.trim();
    if (userInput !== '') {
      isEnterPressed = true;
      const matchingAnime = animeList.find((anime) => anime.title.toLowerCase() === userInput.toLowerCase());
      if (matchingAnime) {
        redirectToPage(matchingAnime.page);
      } else {
        redirectToErrorPage();
      }
    }
  } else {
    isEnterPressed = false;
  }
});

searchInput.addEventListener('input', showSuggestions);
