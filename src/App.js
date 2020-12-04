import React from 'react';
//Global Style
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';

//Import page
import AboutUs from './pages/AboutUs'

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <AboutUs />
        </div>
    );
}

export default App;
