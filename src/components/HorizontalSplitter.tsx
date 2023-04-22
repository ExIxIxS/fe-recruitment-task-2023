import { ReactNode } from 'react';

type HorizontalSplitterProps = { children: ReactNode[] }; // change to appComponents!!!!

function HorizontalSplitter(props: HorizontalSplitterProps): JSX.Element {
  return <div className="horizontal-splitter">{props.children}</div>;
}

export default HorizontalSplitter;
