import { access, mkdir, promises as fs } from 'fs';

/* const path = './memes';

access(path, (error) => {
  // To check if the given directory
  // already exists or not
  if (error) {
    // If current directory does not exist
    // then create it
    mkdir(path, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('New Directory created successfully !!');
      }
    });
  } else {
    console.log('Given Directory already exists !!');
  }
}); */

/* const url = 'https://api.memegen.link/images/bad/your_meme_is_bad/and_you_should_feel_bad.jpg';

const response = await fetch(url);

const blob = await response.blob();

const arrayBuffer = await blob.arrayBuffer();

const buffer = Buffer.from(arrayBuffer);

await fs.writeFile('./memes/01.jpg', buffer); */

const downloadImage = async (url, path) => {
  const response = await fetch(url);
  const blob = await response.blob();
  const arrayBuffer = await blob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await fs.writeFile(path, buffer);
};

await downloadImage(
  'https://api.memegen.link/images/bad/your_meme_is_bad/and_you_should_feel_bad.jpg',
  './memes/01.jpg',
);

await downloadImage(
  "https://api.memegen.link/images/rollsafe/can't_get_fired/if_you_don't_have_a_job.jpg",
  './memes/02.jpg',
);

await downloadImage(
  'https://api.memegen.link/images/xy/all_the_things!!!.jpg',
  './memes/03.jpg',
);

await downloadImage(
  "https://api.memegen.link/images/imsorry/oh,_i'm_sorry/i_thought_this_was_america.jpg",
  './memes/04.jpg',
);
