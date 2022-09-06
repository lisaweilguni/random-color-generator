import chalk from 'chalk';
import prompt from 'prompt';
import randomColor from 'randomcolor';

const userInput1 = process.argv[2];
const userInput2 = process.argv[3];

let color;
if (process.argv[2] && process.argv[3]) {
  color = randomColor({
    luminosity: userInput2,
    hue: userInput1,
  });
} else if (process.argv[2]) {
  color = randomColor({
    luminosity: 'random',
    hue: userInput1,
  });
} else if (process.argv[2] === 'ask') {
  const userHue = prompt('Choose hue:');
  const userLum = prompt('Choose luminosity (dark or light):');
  color = randomColor({
    luminosity: userLum,
    hue: userHue,
  });
} else {
  color = randomColor({
    luminosity: 'random',
    hue: 'random',
  });
}

const str = `###############################
###############################
###############################
#####                     #####
#####      ${color}        #####
#####                     #####
###############################
###############################
###############################`;

console.log(chalk.hex(color)(str));
