import HorizontalSplitter from '../splitters/HorizontalSplitter';
import VerticalSplitter from '../splitters/VerticalSplitter';
import TextTile from '../tiles/TextTile';
import ImageTile from '../tiles/ImageTile';
import ButtonTile from '../tiles/ButtonTile';

import { Layout as LayoutModel } from '../../model';

//  formal it`s all JSX.Elements, but provides more accurate type checking
type AppElements =
  | ReturnType<typeof HorizontalSplitter>
  | ReturnType<typeof VerticalSplitter>
  | ReturnType<typeof TextTile>
  | ReturnType<typeof ImageTile>
  | ReturnType<typeof ButtonTile>;

type LayoutProps = Pick<LayoutModel, 'title'> & { children: AppElements };

export type { AppElements, LayoutProps };
