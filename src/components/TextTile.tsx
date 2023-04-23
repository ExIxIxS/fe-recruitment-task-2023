import { useElementsStore } from '../appStore/reduxStoreHooks';
import getColor from '../utils/getColor';

import { TextTile as TextTileModel } from '../model';

type TextTileProps = Pick<TextTileModel, 'elementKey' | 'title' | 'text' | 'color'>;

function TextTile(props: TextTileProps): JSX.Element {
  const values = { color: props.color, text: props.text, title: props.title };
  const elementStoredData = useElementsStore({
    referenceElementKey: props.elementKey,
    value: values,
  });

  return (
    <div className="text-tile" style={{ backgroundColor: getColor(elementStoredData?.color) }}>
      {!elementStoredData && <h2>Element store Error!!!</h2>}
      {elementStoredData?.title && <h2>{elementStoredData.title}</h2>}
      {elementStoredData?.text && <p>{elementStoredData.text}</p>}
    </div>
  );
}

export default TextTile;
