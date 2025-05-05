import { Header } from "./components/header/Header"; 
import TaskCardList from "./components/task/TaskCardList"; 
import "./index.css";

function App() {
  return (
    <div className="app">
      <Header />
      <TaskCardList />
    </div>
  );
}

export default App;
