import { BG_COLORS } from '../constants/colorsConstants';
import { Color } from '../model';

function getColor(colorAlias: Color | undefined): string | undefined {
  if (!colorAlias) {
    return undefined;
  }

  return colorAlias in BG_COLORS ? BG_COLORS[colorAlias] : colorAlias;
}

export default getColor;
