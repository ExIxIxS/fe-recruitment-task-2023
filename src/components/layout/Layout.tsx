import { LayoutProps } from './layoutInterfaces';

function Layout(props: LayoutProps): JSX.Element {
  return (
    <div className="layout">
      {props.title && <h1>{props.title}</h1>}
      {props.children}
    </div>
  );
}

export default Layout;
