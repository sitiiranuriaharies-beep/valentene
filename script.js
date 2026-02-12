
const questionScreen = document.getElementById('questionScreen');
const envelopeScreen = document.getElementById('envelopeScreen');
const contentScreen = document.getElementById('contentScreen');
const envelope = document.getElementById('envelope');

const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

const noTexts = [
  'Нет 💔',
  'Ты уверена? 😕',
  'Точно-точно? 🤔',
  'Подумай ещё... 🥺',
  'Может быть, да? 💞',
  'Ну пожалуйста! 🌸',
  'Я буду самым счастливым! ✨',
  'Не отказывай мне... 😘',
  'Соглашайся! 💖',
  'Ты моё сердце ❤️',
  'Ну нет же... 🥲',
  'Всё равно скажу "ДА"! 🎈'
];

let noClickCount = 0;
let yesScale = 1;
const scaleStep = 0.25;

noButton.addEventListener('click', function() {
  if (noClickCount < noTexts.length) {
    noButton.textContent = noTexts[noClickCount];
  } else {
    noButton.textContent = 'Ну пожалуйста!!! 💕';
  }

  yesScale += scaleStep;
  yesButton.style.transform = `scale(${yesScale})`;
  yesButton.style.margin = '10px';
  noClickCount++;
});

yesButton.addEventListener('click', function() {
  questionScreen.style.display = 'none';
  envelopeScreen.style.display = 'block';
});

envelope.addEventListener('click', function() {
  if (!envelope.classList.contains('open')) {
    envelope.classList.add('open');
    
    setTimeout(() => {
      envelopeScreen.style.display = 'none';
      contentScreen.style.display = 'block';
    }, 600);
  }
});


const galleryImages = document.querySelectorAll('.gallery img');
const kissEmojis = ['💋', '❤️', '💖', '😘', '💕', '💗', '💓'];

function createKissAnimation(event) {
  const kissDiv = document.createElement('div');
  kissDiv.className = 'kiss-animation';
  
  kissDiv.style.position = 'fixed';
  kissDiv.style.left = event.clientX + 'px';
  kissDiv.style.top = event.clientY + 'px';
  kissDiv.style.transform = 'translate(-50%, -50%)';
  
  const randomEmoji = kissEmojis[Math.floor(Math.random() * kissEmojis.length)];
  kissDiv.innerHTML = `<span class="kiss-emoji">${randomEmoji}</span>`;
  
  document.body.appendChild(kissDiv);
  
  setTimeout(() => {
    kissDiv.remove();
  }, 1000);
}

function initGalleryListeners() {
  const galleryImgs = document.querySelectorAll('.gallery img');
  galleryImgs.forEach(img => {
    img.addEventListener('click', createKissAnimation);
  });
}

document.addEventListener('DOMContentLoaded', initGalleryListeners);

const observer = new MutationObserver(() => {
  if (contentScreen.style.display === 'block') {
    initGalleryListeners();
  }
});
observer.observe(contentScreen, { attributes: true, attributeFilter: ['style'] });