import { ReactNode } from 'react';
import { Layout } from '../model';

type LayoutProps = Pick<Layout, 'title'> & { children: ReactNode };

function Layout(props: LayoutProps): JSX.Element {
  return (
    <div>
      {props.title && <h1>{props.title}</h1>}
      {props.children}
    </div>
  );
}

export default Layout;
