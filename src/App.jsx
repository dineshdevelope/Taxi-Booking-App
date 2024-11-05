import Header from "./components/Header"
import Request from "./components/Request"
import { Toaster } from "react-hot-toast"


function App() {
 
  return (
    <>
    <div>
      <Header />
      <Toaster />
      <Request/>
    </div>
    </>
  )
}

export default App
