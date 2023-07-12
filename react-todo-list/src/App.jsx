import { Footer, Navbar, TaskEntry, TaskList } from "./components";
import { useLocalStorage } from './hooks';

function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  return (
    <>
      <Navbar />
      <main>
        <TaskEntry {...{ tasks, setTasks }} />
        <TaskList {...{ tasks, setTasks }} />
      </main>
      <Footer />
    </>
  )
}

export default App
