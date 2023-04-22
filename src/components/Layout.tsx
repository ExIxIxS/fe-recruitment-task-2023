import { ReactNode } from 'react';
import { Layout as LayoutModel } from '../model';

// change to appComponents!!!!
type LayoutProps = Pick<LayoutModel, 'title'> & { children: ReactNode };

function Layout(props: LayoutProps): JSX.Element {
  return (
    <div className="layout">
      {props.title && <h1>{props.title}</h1>}
      {props.children}
    </div>
  );
}

export default Layout;
