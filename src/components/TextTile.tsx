import { TextTile as TextTileModel } from '../model';

type TextTileProps = Pick<TextTileModel, 'title' | 'text' | 'color'>;

function TextTile(props: TextTileProps): JSX.Element {
  return (
    <div className="text-tile">
      {props.title && <h2>{props.title}</h2>}
      {props.text && <p>{props.text}</p>}
    </div>
  );
}

export default TextTile;
