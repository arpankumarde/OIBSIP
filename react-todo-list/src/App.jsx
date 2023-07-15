import { Footer, Navbar, TaskEntry, TaskList } from "./components";
import { useLocalStorage } from './hooks';

function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  return (
    <>
      <Navbar />
      <main className='flex flex-col lg:flex-row lg:h-[86vh] w-screen gap-4 lg:gap-0 overflow-auto'>
        <TaskEntry {...{ tasks, setTasks }} />
        <TaskList {...{ tasks, setTasks }} />
      </main>
      <Footer />
    </>
  )
}

export default App
