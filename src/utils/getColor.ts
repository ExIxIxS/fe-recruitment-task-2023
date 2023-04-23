import { Color } from '../model';

const COLORS: { [key in Color]: string } = {
  light: '#eceff1',
  mid: '#607d8b',
  dark: '#263238',
};

function getColor(colorAlias: Color | undefined): string | undefined {
  if (!colorAlias) {
    return undefined;
  }

  return colorAlias in COLORS ? COLORS[colorAlias] : colorAlias;
}

export default getColor;
