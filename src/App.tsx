import NavBarHor from './components/navbarHor/NavBarHor'
import NavBarVert from './components/navbarVert/NavBarVert'
import Router from './router/Router'
import './style/style.css'

function App() {
    return (
        <main className="app-wrapper">
            <NavBarHor />
            <NavBarVert />
            <Router />
        </main>
    )
}

export default App
