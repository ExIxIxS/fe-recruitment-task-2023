import Layout from './Layout';
import VerticalSplitter from '../splitters/VerticalSplitter';
import HorizontalSplitter from '../splitters/HorizontalSplitter';
import TextTile from '../tiles/TextTile';
import ImageTile from '../tiles/ImageTile';
import ButtonTile from '../tiles/ButtonTile';

import { Layout as LayoutModel } from '../../model';

function LayoutTree({ rootElement, title }: LayoutModel): JSX.Element {
  if (!rootElement) {
    return <div>Root element error!!!</div>;
  }

  return <Layout title={title ?? ''}>{ComponentsTree(rootElement)}</Layout>;
}

function ComponentsTree(treeElement: LayoutModel['rootElement']): JSX.Element {
  switch (treeElement.type) {
    case 'verticalSplitter':
      return (
        <VerticalSplitter key={treeElement.elementKey}>
          {treeElement.elements?.map(ComponentsTree)}
        </VerticalSplitter>
      );
    case 'horizontalSplitter':
      return (
        <HorizontalSplitter key={treeElement.elementKey}>
          {treeElement.elements?.map(ComponentsTree)}
        </HorizontalSplitter>
      );
    case 'textTile':
      return (
        <TextTile
          key={treeElement.elementKey}
          elementKey={treeElement.elementKey}
          title={treeElement.title}
          text={treeElement.text}
          color={treeElement.color}
        ></TextTile>
      );
    case 'imageTile':
      return (
        <ImageTile
          key={treeElement.elementKey}
          elementKey={treeElement.elementKey}
          title={treeElement.title}
          source={treeElement.source}
        ></ImageTile>
      );
    case 'buttonTile':
      return (
        <ButtonTile
          key={treeElement.elementKey}
          elementKey={treeElement.elementKey}
          text={treeElement.text}
          action={treeElement.action}
        ></ButtonTile>
      );
    default:
      return <div>Unknown Element Type</div>;
  }
}

export default LayoutTree;
