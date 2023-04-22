import { ReactNode } from 'react';

type VerticalSplitterProps = { children: ReactNode[] }; // change to appComponents!!!!

function VerticalSplitter(props: VerticalSplitterProps): JSX.Element {
  return <div className="vertical-splitter">{props.children}</div>;
}

export default VerticalSplitter;
