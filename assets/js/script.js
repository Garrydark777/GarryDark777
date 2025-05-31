document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('welcomeText').classList.remove('hidden');
});

function showText(section) {
  const content = document.getElementById('content');
  content.classList.remove('hidden');

  let text = '';
  switch(section) {
    case 'symbol':
      text = 'Этот символ — геометрическое окно в тонкие миры. Он вибрирует с твоим внутренним кодом.';
      break;
    case 'stars':
      text = 'Созвездие Змеи направляет. Оно древнее, чем мифы, и несёт послание из глубин вселенной.';
      break;
    case 'message':
      text = 'Послание зашифровано в линиях, цвете и форме. Ты — ключ к расшифровке. Прислушайся...';
      break;
  }

  content.textContent = text;
}
