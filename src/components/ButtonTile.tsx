import { ButtonTile as ButtonTileModel } from '../model';

type ButtonTileProps = Pick<ButtonTileModel, 'text' | 'action'>;

function ButtonTile(props: ButtonTileProps): JSX.Element {
  return (
    <button
      onClick={() => {
        if (props.action?.type === 'update') {
          const value = props.action.value;
          console.log(value);
        }
      }}
    >
      {props.text}
    </button>
  );
}

export default ButtonTile;
