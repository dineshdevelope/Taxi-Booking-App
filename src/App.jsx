import Header from "./components/Header"
import Request from "./components/Request"
import { Toaster } from "react-hot-toast"
import Table from "./components/Table"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import ViewBookings from "./components/ViewBookings"
import MainContent from "./components/MainContent"

function App() {
 
  return (
    <>
    <div>
      
      <Router>
      <Header />
      <Toaster />
      <Routes>

      <Route path="/" element={<MainContent />} />
      <Route path="/makerequest" element={<Request />} />
      <Route path="/viewrequest" element={ <Table /> } />
      <Route path="/viewbookings" element={ <ViewBookings /> } />

      </Routes>
     
      </Router>

    </div>
    </>
  )
}

export default App
