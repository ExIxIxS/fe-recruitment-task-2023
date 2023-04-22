import { ImageTile as ImageTileModel } from '../model';

type ImageTileProps = Pick<ImageTileModel, 'title' | 'source'>;

function ImageTile(props: ImageTileProps): JSX.Element {
  return (
    <div className="image-tile" style={{ backgroundImage: `url(${props.source})` }}>
      {/*
      <img
        className="image-tile__image"
        src={props.source}
        alt={props.title}
        width="100"
        height="auto"
      />
    */}
    </div>
  );
}

export default ImageTile;
