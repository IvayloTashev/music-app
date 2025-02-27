import { Routes, Route } from 'react-router'
import HomePage from "./pages/HomePage"
import Details from "./pages/Details"


function App() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />

            <Route path='/details/:id' element={<Details />} />
        </Routes>
    )
}

export default App
