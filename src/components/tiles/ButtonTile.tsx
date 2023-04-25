import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateElement } from '../../features/elementSlice';
import { useElementsStore } from '../../appStore/reduxStoreHooks';

import { ButtonTileProps, ButtonTileValues } from './tilesInterfaces';

function ButtonTile(props: ButtonTileProps): JSX.Element {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);

  const values: ButtonTileValues = { text: props.text, action: props.action };
  const elementStoredData = useElementsStore({
    referenceElementKey: props.elementKey,
    value: values,
  }) as ButtonTileValues;

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);

    if (elementStoredData?.action?.type === 'update') {
      dispatch(
        updateElement({
          ...elementStoredData.action,
        })
      );
    }
  };

  return (
    <button
      className={isClicked ? 'button-tile button-tile--clicked' : 'button-tile'}
      onClick={handleClick}
    >
      {elementStoredData?.text}
    </button>
  );
}

export default ButtonTile;
