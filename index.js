import chalk from 'chalk';
import randomColor from 'randomcolor';

const userInputHue = process.argv[2];
const userInputLuminosity = process.argv[3];

let color;
if (process.argv[2] && process.argv[3]) {
  color = randomColor({
    luminosity: userInputLuminosity,
    hue: userInputHue,
  });
} else if (process.argv[2]) {
  color = randomColor({
    luminosity: 'random',
    hue: userInputHue,
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
