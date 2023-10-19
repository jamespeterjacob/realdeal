import logo from './logo.svg';
import './App.css';




function App() {

  
    
  return (
    
    <div className="App">

      {/* <header className="App-header">
      <h2>Typical Media Query Breakpoints</h2>
<p class="example">Resize the browser window to see how the background color of this paragraph changes on different screen sizes.</p>
      </header> */}


<Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>


    </div>
  );
}


export default App;

