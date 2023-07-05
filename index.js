// 34

const input = document.getElementById('myInput');
const div = document.getElementById('myDiv');

input.addEventListener('focus', () => {
  div.style.display = 'block';
});

input.addEventListener('blur', () => {
  div.style.display = 'none';
});

// 35

const rows = 10;
const columns = 10;

let counter = 1;

const table = [];

for (let i = 0; i < rows; i++) {
  const row = [];
  for (let j = 0; j < columns; j++) {
    row.push(counter);
    counter++;
  }
  table.push(row);
}

for (let i = 0; i < rows; i++) {
  console.log(table[i]);
}

// 36

const imagePaths = [
  'images/1.jpg',
  'images/2.jpg',
  'images/3.jpg',
  'images/4.jpg',
  'images/5.jpg',
  'images/6.jpg',
  'images/7.jpg',
  'images/8.jpg',
  'images/9.jpg'
];

const randomIndex = Math.floor(Math.random() * imagePaths.length);

const randomImagePath = imagePaths[randomIndex];

console.log(randomImagePath);

// 38

function addProtocol(url) {
  if (!/^https?:\/\//i.test(url)) {
    url = 'https://' + url;
  }
  return url;
}

const inputUrl = 'example.com'; 

const urlWithProtocol = addProtocol(inputUrl);

window.location.href = urlWithProtocol;

const inputUrl = document.getElementById('url-input').value;

