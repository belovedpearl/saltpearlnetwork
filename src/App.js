import NavBar from './components/NavBar';
import styles from './App.module.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Container from 'react-bootstrap/Container';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
    return (
        <div className={styles.App}>
            <NavBar />
            <Container className={styles.AppHead}>
            <Switch>
              <Route 
                  exact path="/" 
                  render = {() => <HomePage 
                    message= 'No results found. Adjust the search keyword' 
                    />
                  }
              />
               <Route 
                  exact path="/aboutus" 
                  render = {() => <AboutUs 
                    message= 'No results found. Adjust the search keyword' 
                    />  
                }
              />
               <Route 
                  exact path="/contact" 
                  render = {() => <ContactUs 
                    message= 'No results found. Adjust the search keyword' 
                    />
                  }
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
            <Footer />
        </div>
    );
}

export default App;