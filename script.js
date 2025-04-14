

  const moodData = {
    tired: {
      title: "😩 Шаршаған кезде кеңестер",
      movies: ["Soul", "The Secret Life of Walter Mitty", "Chef"],
      books: ["Қарапайым өмір өнері", "Ikigai", "Тыныштық күші"],
      podcasts: ["Жай өмір", "Уақыт және адам", "АдамInside"]
    },
    motivated: {
      title: "🔥 Мотивация алу үшін",
      movies: ["The Pursuit of Happyness", "Hidden Figures", "Whiplash"],
      books: ["Атомдық әдеттер", "Бойыңдағы алыпты оят", "Ты не один"],
      podcasts: ["Өзгеріс подкасты", "Пайдалы подкаст", "Мақсат пен мағына"]
    },
    romantic: {
      title: "💗 Романтикалық көңіл-күйге",
      movies: ["Before Sunrise", "La La Land", "About Time"],
      books: ["Норвег орманы", "Махаббат жайлы хаттар", "Мен сені сүйем"],
      podcasts: ["Жүрек сыры", "Сезім толқыны", "Сен менің..."]
    },
    sad: {
      title: "😭 Жылағым келгенде...",
      movies: ["A Silent Voice", "Inside Out", "The Perks of Being a Wallflower"],
      books: ["Соңғы хат", "Көңіл күй күнделігі", "Өз-өзіңмен сөйлесу"],
      podcasts: ["Жан әлемім", "Түнгі ойлар", "Көлеңкеңмен сөйлесу"]
    }
  };

  const buttons = document.querySelectorAll('.mood-btn');
  const output = document.getElementById('recommendations');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const mood = btn.getAttribute('data-mood');
      const data = moodData[mood];
      output.style.display = 'block';
      output.innerHTML = `
        <h2>${data.title}</h2>
        <h3>🎬 Фильмдер:</h3>
        <ul>${data.movies.map(movie => `<li>${movie}</li>`).join('')}</ul>
        <h3>📚 Кітаптар:</h3>
        <ul>${data.books.map(book => `<li>${book}</li>`).join('')}</ul>
        <h3>🎧 Подкасттар:</h3>
        <ul>${data.podcasts.map(p => `<li>${p}</li>`).join('')}</ul>
      `;
    });
  });

document.addEventListener('DOMContentLoaded', () => {
    const welcomeSection = document.getElementById('welcome-animation');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        welcomeSection.style.display = 'none';
      }
    });
  });


  
  
  // Динамичная аффирмация (можно расширять список)
  const affirmations = [
    "Мен тыныштамын. Мен өзіме сенемін.",
    "Менің ішкі күшім – менің қорғаушым.",
    "Бәрі жақсы болады. Мен оған сенемін.",
    "Мен өз өмірімнің авторымын.",
    "Мен өзімді қабылдаймын және жақсы көремін.",
    "Менің жаным тыныш әрі сенімді."
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    const quoteElement = document.getElementById('daily-quote');
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    quoteElement.textContent = `«${affirmations[randomIndex]}»`;
  });
  