import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.scss"
import Nav from "./components/Nav/Nav"
import Home from "./pages/Home/Home"
import Characters from "./pages/Characters/Characters"
import Houses from "./pages/Houses/Houses"
import Timeline from "./pages/Timeline/Timeline"
import DetailCharacter from "./pages/DetailCharacter/DetailCharacter"
import DetailHouse from "./pages/DetailHouse/DetailHouse"

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/characters" element={<Characters></Characters>}></Route>
                    <Route path="/houses" element={<Houses></Houses>}></Route>
                    <Route path="/timeline" element={<Timeline></Timeline>}></Route>
                    <Route path="/characters/:id" element={<DetailCharacter></DetailCharacter>}></Route>
                    <Route path="/houses/:id" element={<DetailHouse></DetailHouse>}></Route>
                </Routes>
                <Nav></Nav>
            </BrowserRouter>
        </>
    )
}

export default App
