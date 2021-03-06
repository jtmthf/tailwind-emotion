import { themeColor } from '../utils';
import { ThemedUtil } from '../types';

const lookup = themeColor('borderColor');

const _borderColor = (name: string) => (
  variant: string | number,
): ThemedUtil => theme => ({
  borderColor: lookup(name, variant)(theme),
});

export const borderColor = (name: string, variant?: string | number) =>
  _borderColor(name)(variant!);

export const borderTransparent = borderColor('transparent');
export const borderBlack = _borderColor('black');
export const borderWhite = _borderColor('white');
export const borderGray = _borderColor('gray');
export const borderRed = _borderColor('red');
export const borderOrange = _borderColor('orange');
export const borderYellow = _borderColor('yellow');
export const borderGreen = _borderColor('green');
export const borderTeal = _borderColor('teal');
export const borderBlue = _borderColor('blue');
export const borderIndigo = _borderColor('indigo');
export const borderPurple = _borderColor('purple');
export const borderPink = _borderColor('pink');
