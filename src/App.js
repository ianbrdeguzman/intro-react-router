import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import BlogDetails from './components/BlogDetails';
import Contact from './components/Contact';
import Error from './components/Error';
import { AppProvider } from './components/context';

function App() {
    return (
        <>
            <AppProvider>
                <Router>
                    <nav>
                        <Navbar />
                    </nav>
                    <main>
                        <Switch>
                            <Route exact path='/'>
                                <Home />
                            </Route>
                            <Route exact path='/about'>
                                <About />
                            </Route>
                            <Route exact path='/blog'>
                                <Blog />
                            </Route>
                            <Route exact path='/blog/:id'>
                                <BlogDetails />
                            </Route>
                            <Route exact path='/contact'>
                                <Contact />
                            </Route>
                            <Route path='*'>
                                <Error />
                            </Route>
                        </Switch>
                    </main>
                </Router>
            </AppProvider>
        </>
    );
}

export default App;
