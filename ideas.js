const placeHolderImage = 'https://via.placeholder.com/150';
const placeHolderText =
  'Duis vehicula accumsan hendrerit. Sed eget tellus consequat, vehicula diam a, molestie urna. Integer finibus augue lacinia tempus scelerisque. Fusce.';
const ideas = {
  Interference: {
    title: 'Interference Patterns',
    content: '',
    image: '',
    url: ''
  },
  Military: {
    title: 'Non-Phallalic Military',
    content: '',
    image: '',
    urls: ''
  },
  Masking: {
    title: 'Masking Efficient Morality',
    content: '',
    image: '',
    url: ''
  },
  Ultrathick: {
    title: 'Ultrathick button',
    content: '',
    image: '',
    url: ''
  },
  Bingo: {
    title: 'Bingo Cards of Media-Tech insanity',
    content: '',
    image: '',
    url: ''
  },
  Needs: { title: 'You can enter your needs', content: '', image: '', url: '' },
  Spinning: {
    title: 'Spinning Mirror of disapearance',
    content: '',
    image: '',
    url: ''
  },
  AIMorality: {
    title: 'AI Reading Efficient Morality back',
    content: '',
    image: '',
    url: ''
  },
  FastPaced: { title: 'Fast Paced report', content: '', image: '', url: '' },
  Objectify: {
    title: 'Objectify others with clothing',
    content: '',
    image: '',
    url: ''
  },
  Explain: { title: 'Overexplaining Fables', content: '', image: '', url: '' }
};

function createIdeas(ideas) {
  for (const [key, value] of Object.entries(ideas)) {
    createIdea(key, value);
  }
}

function createIdea(id, idea) {
  const ideaSmall = `<li><a href="#${id}">${idea.title}</a></li>`;
  if (idea.image === '') {
    idea.image = placeHolderImage;
  }
  if (idea.content === '') {
    idea.content = placeHolderText;
  }
  const ideaLarge = `<h1 id="${id}">${idea.title}</h1>
  
  <img src="${idea.image}" />
  <p>
    ${idea.content}
  </p><hr />`;

  $('#ideasSmall').append(ideaSmall);
  $('#ideasLarge').append(ideaLarge);
}

$(document).ready(() => {
  createIdeas(ideas);
});
