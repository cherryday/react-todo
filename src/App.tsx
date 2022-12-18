import { Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar'
import { HomePage } from './pages/HomePage/HomePage'
import { FolderPage } from './pages/FolderPage/FolderPage'
import { TodoProvider } from './context/todo.context'
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Sidebar/>
        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/:folderId" element={<FolderPage/>}/>
          </Routes>
        </main>
      </TodoProvider>
    </div>
  );
}

export default App;
