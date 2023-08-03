import { ButtonTile as ButtonTileModel } from '../../model';
import { ImageTile as ImageTileModel } from '../../model';
import { TextTile as TextTileModel } from '../../model';

type TextTileProps = Pick<TextTileModel, 'elementKey' | 'title' | 'text' | 'color'>;
type TextTileValues = Pick<TextTileProps, 'title' | 'text' | 'color'>;

type ImageTileProps = Pick<ImageTileModel, 'elementKey' | 'title' | 'source'>;
type ImageTileValues = Pick<ImageTileProps, 'title' | 'source'>;

type ButtonTileProps = Pick<ButtonTileModel, 'elementKey' | 'text' | 'action'>;
type ButtonTileValues = Pick<ButtonTileProps, 'text' | 'action'>;

type TilesActionValues = TextTileValues | ImageTileValues | ButtonTileValues;

export type {
  TextTileProps,
  TextTileValues,
  ButtonTileProps,
  ButtonTileValues,
  ImageTileProps,
  ImageTileValues,
  TilesActionValues,
};
