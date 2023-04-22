import Layout from './Layout';
import VerticalSplitter from './VerticalSplitter';
import HorizontalSplitter from './HorizontalSplitter';
import TextTile from './TextTile';

import { Layout as LayoutModel } from '../model';
import ImageTile from './ImageTile';
import ButtonTile from './ButtonTile';

function LayoutTree(apiLayout: LayoutModel): JSX.Element {
  if (!apiLayout.rootElement) {
    return <div>Root element error!!!</div>;
  }

  return <Layout title={apiLayout?.title}>{createComponentsTree(apiLayout.rootElement)}</Layout>;
}

function createComponentsTree(rootLayout: LayoutModel['rootElement']): JSX.Element {
  if (rootLayout.type === 'verticalSplitter') {
    return (
      <VerticalSplitter key={rootLayout.elementKey}>
        {rootLayout.elements?.map(createComponentsTree)}
      </VerticalSplitter>
    );
  } else if (rootLayout.type === 'horizontalSplitter') {
    return (
      <HorizontalSplitter key={rootLayout.elementKey}>
        {rootLayout.elements?.map(createComponentsTree)}
      </HorizontalSplitter>
    );
  } else if (rootLayout.type === 'textTile') {
    return (
      <TextTile
        key={rootLayout.elementKey}
        title={rootLayout.title}
        text={rootLayout.text}
      ></TextTile>
    );
  } else if (rootLayout.type === 'imageTile') {
    return (
      <ImageTile
        key={rootLayout.elementKey}
        title={rootLayout.title}
        source={rootLayout.source}
      ></ImageTile>
    );
  } else if (rootLayout.type === 'buttonTile') {
    return (
      <ButtonTile
        key={rootLayout.elementKey}
        text={rootLayout.text}
        action={rootLayout.action}
      ></ButtonTile>
    );
  } else {
    // Render default component for unknown types
    return <div>Unknown Element Type</div>;
  }
}

export default LayoutTree;
