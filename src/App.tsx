import { useGetLayoutByPathQuery } from './services/layoutApi';
import './style.css';

export default function App() {
  const { data, error, isLoading } = useGetLayoutByPathQuery('test');

  return (
    <div className="main">
      <div className="content">
        {error && <h1>Error !!!</h1>}
        {!error && isLoading && <h1>Loading...</h1>}
        {!error && !isLoading && data && <h1>{JSON.stringify(data)}</h1>}
      </div>
    </div>
  );
}
