const savedReviewPage1 = localStorage.getItem('savedReviewPage1');
const savedReviewPage2 = localStorage.getItem('savedReviewPage2');
const savedReviewPage3 = localStorage.getItem('savedReviewPage3');
const savedReviewPage4 = localStorage.getItem('savedReviewPage4');
const savedReviewPage5 = localStorage.getItem('savedReviewPage5');
const savedReviewPage6 = localStorage.getItem('savedReviewPage6');
const savedReviewPage7 = localStorage.getItem('savedReviewPage7');
const savedReviewPage8 = localStorage.getItem('savedReviewPage8');
const savedReviewPage9 = localStorage.getItem('savedReviewPage9');
const savedReviewPage10 = localStorage.getItem('savedReviewPage10');
const savedReviewPage11 = localStorage.getItem('savedReviewPage11');
const savedReviewPage12 = localStorage.getItem('savedReviewPage12');
const savedReviewPage13 = localStorage.getItem('savedReviewPage13');
const savedReviewPage14 = localStorage.getItem('savedReviewPage14');
const savedReviewPage15 = localStorage.getItem('savedReviewPage15');
const savedReviewPage16 = localStorage.getItem('savedReviewPage16');
const savedReviewPage17 = localStorage.getItem('savedReviewPage17');
const savedReviewPage18 = localStorage.getItem('savedReviewPage18');
const savedReviewPage19 = localStorage.getItem('savedReviewPage19');
const savedReviewPage20 = localStorage.getItem('savedReviewPage20');
const savedReviewPage21 = localStorage.getItem('savedReviewPage21');
const savedReviewPage22 = localStorage.getItem('savedReviewPage22');
const savedReviewPage23 = localStorage.getItem('savedReviewPage23');
const savedReviewPage24 = localStorage.getItem('savedReviewPage24');
const savedReviewPage25 = localStorage.getItem('savedReviewPage25');
const savedReviewPage26 = localStorage.getItem('savedReviewPage26');
const savedReviewPage27 = localStorage.getItem('savedReviewPage27');
const savedReviewPage28 = localStorage.getItem('savedReviewPage28');
const savedReviewPage29 = localStorage.getItem('savedReviewPage29');
const savedReviewPage30 = localStorage.getItem('savedReviewPage30')


if (!savedReviewPage1 && !savedReviewPage2  && !savedReviewPage3  && !savedReviewPage4  && !savedReviewPage5  && !savedReviewPage6  && !savedReviewPage7  && !savedReviewPage8  && !savedReviewPage9  && !savedReviewPage10  && !savedReviewPage11  && !savedReviewPage12  && !savedReviewPage13  && !savedReviewPage14  && !savedReviewPage15  && !savedReviewPage16  && !savedReviewPage17  && !savedReviewPage18  && !savedReviewPage19  && !savedReviewPage20  && !savedReviewPage21  && !savedReviewPage22  && !savedReviewPage23  && !savedReviewPage24  && !savedReviewPage25  && !savedReviewPage26  && !savedReviewPage27  && !savedReviewPage28  && !savedReviewPage29  && !savedReviewPage30){
  const noReviewsElement = document.createElement('p');
  noReviewsElement.textContent = 'În momentul de față nu ai salvat niciun comentariu.';
  noReviewsElement.classList.add('no-reviews');
  document.getElementById('allReviews').appendChild(noReviewsElement);
} else {
  if (savedReviewPage1) {
    createReviewItem(savedReviewPage1, 'Bleach');
  }

  if (savedReviewPage2) {
    createReviewItem(savedReviewPage2, 'Code Geass');
  }

  if (savedReviewPage3) {
    createReviewItem(savedReviewPage3, 'Yuu Yuu Hakusho');
  }

  if (savedReviewPage4) {
    createReviewItem(savedReviewPage4, 'Classroom of the Elite');
  }

  if (savedReviewPage5) {
    createReviewItem(savedReviewPage5, 'Chainsaw Man');
  }

  if (savedReviewPage6) {
    createReviewItem(savedReviewPage6, 'Hunter x Hunter');
  }

  if (savedReviewPage7) {
    createReviewItem(savedReviewPage7, 'Attack on Titan');
  }
    
  if (savedReviewPage8) {
    createReviewItem(savedReviewPage8, 'Demon Slayer: Kimetsu no Yaiba');
  }
    
  if (savedReviewPage9) {
    createReviewItem(savedReviewPage9, 'Black Bullet');
  }
    
  if (savedReviewPage10) {
    createReviewItem(savedReviewPage10, 'Black Clover');
  }
    
  if (savedReviewPage11) {
    createReviewItem(savedReviewPage11, 'The Eminence in Shadow');
  }
  
  if (savedReviewPage12) {
    createReviewItem(savedReviewPage12, 'Fairy Tail');
  }

  if (savedReviewPage13) {
    createReviewItem(savedReviewPage13, 'Kuroko s Basketball');
  }
  
  if (savedReviewPage14) {
    createReviewItem(savedReviewPage14, 'Psycho-Pass');
  }
  
  if (savedReviewPage15) {
    createReviewItem(savedReviewPage15, 'No Game, No Life');
  }
  
  if (savedReviewPage16) {
    createReviewItem(savedReviewPage16, 'Akame ga Kill');
  }
  
  if (savedReviewPage17) {
    createReviewItem(savedReviewPage17, 'Tokyo Ghoul');
  }
  
  if (savedReviewPage18) {
    createReviewItem(savedReviewPage18, 'Steins;Gate');
  }
  
  if (savedReviewPage19) {
    createReviewItem(savedReviewPage19, 'Fullmetal Alchemist: Brotherhood');
  }
  
  if (savedReviewPage20) {
    createReviewItem(savedReviewPage20, 'Monster');
  }
  
  if (savedReviewPage21) {
    createReviewItem(savedReviewPage21, 'Bleach: Thousand-Year Blood War');
  }
  
  if (savedReviewPage22) {
    createReviewItem(savedReviewPage22, 'Naruto');
  }

  if (savedReviewPage23) {
    createReviewItem(savedReviewPage23, 'Dragon Ball');
  }

  
  if (savedReviewPage24) {
    createReviewItem(savedReviewPage24, 'One Piece');
  }

  if (savedReviewPage25) {
    createReviewItem(savedReviewPage25, 'TBATE');
  }
  if (savedReviewPage26) {
    createReviewItem(savedReviewPage26, 'Solo Leveling');
  }
  if (savedReviewPage27) {
    createReviewItem(savedReviewPage27, 'Vinland Saga');
  }
  if (savedReviewPage28) {
    createReviewItem(savedReviewPage28, 'Goblin Slayer');
  }
  if (savedReviewPage29) {
    createReviewItem(savedReviewPage29, 'Jujutsu Kaisen');
  }
  if (savedReviewPage30) {
    createReviewItem(savedReviewPage30, 'Heavenly Delusion');
  }
  
}

function createReviewItem(review, page) {
  const divElement = document.createElement('div');
  const pElement = document.createElement('p');
  const pageElement = document.createElement('span');

  pElement.textContent = review;
  pageElement.textContent = `From: ${page}`;
  divElement.appendChild(pElement);
  divElement.appendChild(pageElement);
  document.getElementById('allReviews').appendChild(divElement);

  // Adăugăm clasa "review" la elementul de revizuire
  pElement.classList.add('review');
}