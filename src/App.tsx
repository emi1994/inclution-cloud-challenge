import Navbar from "./components/Navbar/Navbar";
import StatusCard from "./components/StatusCard/StatusCard";

const App: React.FC = () => {
  let endpoints = ['accounts', 'assets', 'customers', 'users', 'datapoints', 'devices', 'documents', 'forms', 'messages', 'media', 'namespaces', 'orders', 'patients', 'relationships', 'rules', 'templates', 'workflows', 'invites']

  return (
    <>
      <Navbar text={'Status dashboard'} />
      <div className="main-container">
        {endpoints.map((endpoint) => {
          return (
            <StatusCard key={endpoint} endpoint={endpoint} />
          )
        })}
      </div>
    </>
  );
}

export default App;
