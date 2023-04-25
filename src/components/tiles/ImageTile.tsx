import { useElementsStore } from '../../appStore/reduxStoreHooks';

import { ImageTileProps, ImageTileValues } from './tilesInterfaces';

function ImageTile(props: ImageTileProps): JSX.Element {
  const values: ImageTileValues = { title: props.title, source: props.source };
  const elementStoredData = useElementsStore({
    referenceElementKey: props.elementKey,
    value: values,
  }) as ImageTileValues;
  return (
    <div className="image-tile">
      <img
        className="image-tile__image"
        alt={elementStoredData?.title}
        src={elementStoredData?.source}
      ></img>
    </div>
  );
}

export default ImageTile;
