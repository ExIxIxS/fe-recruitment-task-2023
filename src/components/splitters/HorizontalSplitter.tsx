import { SplitterProps } from './splittersInterfaces';

function HorizontalSplitter(props: SplitterProps): JSX.Element {
  return <div className="horizontal-splitter">{props.children}</div>;
}

export default HorizontalSplitter;
