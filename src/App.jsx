import Header from "./components/Header"
import Request from "./components/Request"
import { Toaster } from "react-hot-toast"
import Table from "./components/Table"


function App() {
 
  return (
    <>
    <div>
      <Header />
      <Toaster />
       <Request/> 
     <Table />
    </div>
    </>
  )
}

export default App
