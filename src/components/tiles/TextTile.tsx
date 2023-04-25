import { useElementsStore } from '../../appStore/reduxStoreHooks';
import getColor from '../../utils/getColor';

import { TextTileProps, TextTileValues } from './tilesInterfaces';

function TextTile(props: TextTileProps): JSX.Element {
  const values: TextTileValues = { color: props.color, text: props.text, title: props.title };
  const elementStoredData = useElementsStore({
    referenceElementKey: props.elementKey,
    value: values,
  }) as TextTileValues;

  return (
    <div className="text-tile" style={{ backgroundColor: getColor(elementStoredData?.color) }}>
      {!elementStoredData && <h2 className="text-tile__error">Element store Error!!!</h2>}
      <div className="text-tile__content">
        {elementStoredData?.title && <h2>{elementStoredData.title}</h2>}
        {elementStoredData?.text && <p>{elementStoredData.text}</p>}
      </div>
    </div>
  );
}

export default TextTile;
