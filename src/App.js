import NavBar from './components/NavBar';
import styles from './App.module.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Container from 'react-bootstrap/Container'

function App() {
    return (
        <div className={styles.App}>
            <NavBar />
            <Container className={styles.AppHead}>
            <Switch>
              <Route 
                  exact path="/" 
                  render = {() => <h1>Home Page</h1>}
              />
               <Route 
                  exact path="/aboutus" 
                  render = {() => <h1>About Page</h1>}  
              />
               <Route 
                  exact path="/contact" 
                  render = {() => <h1>Contact us Page</h1>} 
              />
              <Route 
                  exact path="/testi" 
                  render = {() => <h1>Testimonial Page</h1>} 
              />
               <Route 
                  exact path="/support" 
                  render = {() => <h1>Support Page</h1>}
              />
              <Route 
                  exact path="/privacy" 
                  render = {() => <h1>Provacy Page</h1>} 
              />
          </Switch>
            </Container>
        </div>
    );
}

export default App;