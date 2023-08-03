import { SplitterProps } from './splitters.interfaces';

function HorizontalSplitter({ children }: SplitterProps): JSX.Element {
  return <div className="horizontal-splitter">{children}</div>;
}

export default HorizontalSplitter;
