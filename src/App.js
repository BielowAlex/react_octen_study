import './App.css';
import {Route, Routes} from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";
import UserPage from "./Pages/UserPage/UserPage";
import PostPage from "./Pages/PostPage/PostPage";
import NotFound from "./Pages/NotFound/NotFound";
import HomePage from "./Pages/HomePage/HomePage";
import UserDetails from "./сomponents/UserDetails/UserDetails";


function App() {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/users'} element={<UserPage/>}>
                    <Route path={':id'} element={<UserDetails/>}/>
                </Route>
                <Route path={'/posts'} element={<PostPage/>}>
                    <Route path={':id'} element={<UserDetails/>}/>
                </Route>
                <Route path={'*'} element={<NotFound/>}/>
            </Route>
        </Routes>
    );
}

export default App;
