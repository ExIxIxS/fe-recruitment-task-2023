import { useElementsStore } from '../appStore/reduxStoreHooks';
import { ImageTile as ImageTileModel } from '../model';

type ImageTileProps = Pick<ImageTileModel, 'elementKey' | 'title' | 'source'>;

function ImageTile(props: ImageTileProps): JSX.Element {
  const values = { title: props.title, source: props.source };
  const elementStoredData = useElementsStore({
    referenceElementKey: props.elementKey,
    value: values,
  });
  return (
    <div
      className="image-tile"
      style={{ backgroundImage: `url(${elementStoredData?.source})` }}
    ></div>
  );
}

export default ImageTile;
