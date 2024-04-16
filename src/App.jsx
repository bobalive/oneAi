import './App.css';
import { Routes, Route, useLocation} from "react-router-dom";
import { Home } from "./pages/Home/Home.jsx";
import { Upload } from "./pages/Upload/Upload.jsx";
import { Result } from "./pages/Result/Result.jsx";
import { TransitionGroup, CSSTransition } from "react-transition-group";



function App() {
    const location = useLocation();
    const routeName = location.pathname.split('/')[1]
    return (
            <TransitionGroup component={null}>
                <CSSTransition key={location.key} classNames={"slide-"+(routeName?routeName:'home')} timeout={1000} unmountOnExit  >
                    <Routes location={location}>
                        <Route path="/card" element={<Upload/>} />
                        <Route path="/result" element={<Result/>} />
                        <Route path={'/'} element={<Home/>}/>
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
    );
}



export default App;
