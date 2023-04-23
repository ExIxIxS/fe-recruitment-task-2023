import { useDispatch } from 'react-redux';
import { updateElement } from '../features/elementSlice';
import { useElementsStore } from '../appStore/reduxStoreHooks';

import { ButtonTile as ButtonTileModel } from '../model';

type ButtonTileProps = Pick<ButtonTileModel, 'elementKey' | 'text' | 'action'>;

function ButtonTile(props: ButtonTileProps): JSX.Element {
  const dispatch = useDispatch();
  const values = { text: props.text, action: props.action };
  const elementStoredData = useElementsStore({
    referenceElementKey: props.elementKey,
    value: values,
  });

  const handleClick = () => {
    if (elementStoredData?.action?.type === 'update') {
      dispatch(
        updateElement({
          ...elementStoredData.action,
        })
      );
    }
  };

  return <button onClick={handleClick}>{elementStoredData?.text}</button>;
}

export default ButtonTile;
