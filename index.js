import { promises as fs } from 'node:fs';
import parser from 'node-html-parser';

await fs.mkdir('./memes', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('New directory successfully created.');
  }
});

const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const data = await response.text();
const body = await parser.parse(data).querySelectorAll('img');
console.log(body);

const downloadImage = async (url, path) => {
  const response1 = await fetch(url);
  const blob = await response1.blob();
  const arrayBuffer = await blob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await fs.writeFile(path, buffer);
};

for (let i = 0; i <= 9; i++) {
  const images = body[i].getAttribute('src');
  const number = 1;
  let pathImage = `./memes/0${number + i}.jpg`;
  if (pathImage === './memes/010.jpg') {
    pathImage = './memes/10.jpg';
  }

  console.log(images);

  await downloadImage(images, pathImage);
}
