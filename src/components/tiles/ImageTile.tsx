import { getImageTileValues } from 'utils/getTileValues';
import { useElementStoreData } from '../../appStore/reduxStoreHooks';

import { ImageTileProps } from './tiles.interfaces';

function ImageTile({ elementKey, title, source }: ImageTileProps): JSX.Element {
  const elementStoredData = useElementStoreData({
    referenceElementKey: elementKey,
    value: { title, source },
  });

  const imageTileValues = getImageTileValues(elementStoredData);

  return (
    <div className="image-tile">
      <img
        className="image-tile__image"
        alt={imageTileValues.title}
        src={imageTileValues.source}
      ></img>
    </div>
  );
}

export default ImageTile;
