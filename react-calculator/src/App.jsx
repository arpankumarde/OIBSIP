import { Display, Keypad } from "./components"

function App() {
  return (
    <div className='bg-[#4D8AC8] h-screen w-full flex justify-center items-center'>
      <div className="bg-white h-fit rounded-lg p-4 flex flex-col gap-2">
        <Display />
        <Keypad />
      </div>
    </div>
  )
}

export default App
