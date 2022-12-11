import { Sidebar } from './components/Sidebar/Sidebar'
import { FolderCreateModal } from './components/FolderCreateModal/FolderCreateModal'
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <main className="main">
        <FolderCreateModal/>
      </main>
    </div>
  );
}

export default App;
