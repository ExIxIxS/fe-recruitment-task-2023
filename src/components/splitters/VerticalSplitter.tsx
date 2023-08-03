import { SplitterProps } from './splitters.interfaces';

function VerticalSplitter({ children }: SplitterProps): JSX.Element {
  return <div className="vertical-splitter">{children}</div>;
}

export default VerticalSplitter;
