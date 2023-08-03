import { LayoutProps } from './layout.interfaces';

function Layout({ title, children }: LayoutProps): JSX.Element {
  return (
    <div className="layout">
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
}

export default Layout;
