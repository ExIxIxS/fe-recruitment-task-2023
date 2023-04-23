import Layout from './Layout';
import VerticalSplitter from './VerticalSplitter';
import HorizontalSplitter from './HorizontalSplitter';
import TextTile from './TextTile';
import ImageTile from './ImageTile';
import ButtonTile from './ButtonTile';

import { Layout as LayoutModel } from '../model';

function LayoutTree(apiLayout: LayoutModel): JSX.Element {
  if (!apiLayout.rootElement) {
    return <div>Root element error!!!</div>;
  }

  return <Layout title={apiLayout?.title}>{ComponentsTree(apiLayout.rootElement)}</Layout>;
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
