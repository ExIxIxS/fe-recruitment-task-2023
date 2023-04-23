import { ReactNode } from 'react';
// change to appComponents!!!!
type HorizontalSplitterProps = { children: ReactNode[] };

function HorizontalSplitter(props: HorizontalSplitterProps): JSX.Element {
  return <div className="horizontal-splitter">{props.children}</div>;
}

export default HorizontalSplitter;
