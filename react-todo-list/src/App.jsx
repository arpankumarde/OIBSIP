import { Footer, Navbar, TaskEntry, TaskList } from "./components";

function App() {

  return (
    <>
      <Navbar />
      <main>
        <TaskEntry />
        <TaskList />
      </main>
      <Footer />
    </>
  )
}

export default App
