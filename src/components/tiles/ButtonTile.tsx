import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateElement } from '../../appStore/features/elementSlice';
import { useElementStoreData } from '../../appStore/reduxStoreHooks';

import { ButtonTileProps } from './tiles.interfaces';
import { getButtonTileValues } from 'utils/getTileValues';

function ButtonTile({ elementKey, text, action }: ButtonTileProps): JSX.Element {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const elementStoredData = useElementStoreData({
    referenceElementKey: elementKey,
    value: { text, action },
  });

  const buttonTileValues = getButtonTileValues(elementStoredData);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);

    if (buttonTileValues?.action.type === 'update') {
      dispatch(
        updateElement({
          ...buttonTileValues.action,
        })
      );
    }
  };

  return (
    <button
      className={isClicked ? 'button-tile button-tile--clicked' : 'button-tile'}
      onClick={handleClick}
    >
      {buttonTileValues?.text ?? 'button'}
    </button>
  );
}

export default ButtonTile;
