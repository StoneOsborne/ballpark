import './App.css'
import NavBar from "./components/NavBar.jsx"
import SmoothiePage from "./components/SmoothiePage.jsx"
import FooterPage from "./components/FooterPage.jsx"
import TablePage from "./components/TablePage.jsx"

function App() {
  return (
    <>
      <NavBar />
      {/* <TablePage /> */}
      <SmoothiePage />

      <FooterPage />
    </>
  )
}

export default App