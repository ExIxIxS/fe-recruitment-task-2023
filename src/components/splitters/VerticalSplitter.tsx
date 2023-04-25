import { SplitterProps } from './splittersInterfaces';

function VerticalSplitter(props: SplitterProps): JSX.Element {
  return <div className="vertical-splitter">{props.children}</div>;
}

export default VerticalSplitter;
