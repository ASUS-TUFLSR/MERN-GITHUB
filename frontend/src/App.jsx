import React from 'react'
import {Route ,Router} from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import ExplorePage from "./pages/ExplorePage"
import LikesPage from "./pages/LikesPage"


const App = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div>
        <Router>
            <Route path={"/"} Component={<HomePage/>} />
            <Route path={"/login"} Component={<LoginPage/>} />
            <Route path={"/signup"} Component={<SignUpPage/>} />
            <Route path={"/explore"} Component={<ExplorePage/>} />
            <Route path={"/likes"} Component={<LikesPage/>} />
        </Router>
      </div>
    </div>
  )
}

export default App