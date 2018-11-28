$('#tHolder').text(getRandomWord(words, 't'));
$('#mHolder').text(getRandomWord(words, 'm'));
$('#fHolder').text(getRandomWord(words, 'f'));

function getRandomWord(words, letter) {
  const filteredWord = words.filter(word => word[0] === letter);
  const selectedWord =
    filteredWord[Math.floor(Math.random() * filteredWord.length)];
  return letter.toUpperCase() + selectedWord.substr(1);
}
