import './App.css'
import NavBar from "./components/NavBar.jsx"
import SmoothiePage from "./components/SmoothiePage.jsx"
import FooterPage from "./components/FooterPage.jsx"
import TablePage from "./components/TablePage.jsx"
import TeamRoster from "./components/TeamRoster.jsx"
import FileUpload from "./components/FileUpload.jsx"

function App() {
  return (
    <>


      <NavBar />
      {/* <FileUpload /> */}
      <TeamRoster />
      {/* <TablePage /> */}
      <SmoothiePage />

      <FooterPage />
    </>
  )
}

export default App