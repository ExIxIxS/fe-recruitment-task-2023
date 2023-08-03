import { getTextTileValues } from 'utils/getTileValues';
import { useElementStoreData } from '../../appStore/reduxStoreHooks';

import getColor from '../../utils/getColor';

import { TextTileProps } from './tiles.interfaces';

function TextTile({ elementKey, color, text, title }: TextTileProps): JSX.Element {
  const elementStoredData = useElementStoreData({
    referenceElementKey: elementKey,
    value: { color, text, title },
  });

  const textTileValues = getTextTileValues(elementStoredData);

  return (
    <div className="text-tile" style={{ backgroundColor: getColor(textTileValues?.color) }}>
      {!elementStoredData && <h2 className="text-tile__error">Element store Error!!!</h2>}
      <div className="text-tile__content">
        {textTileValues.title && <h2>{textTileValues.title}</h2>}
        {textTileValues.text && <p>{textTileValues.text}</p>}
      </div>
    </div>
  );
}

export default TextTile;
