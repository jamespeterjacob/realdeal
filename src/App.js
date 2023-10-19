import logo from './logo.svg';
import './App.css';




function App() {

  function myFunction() {
    var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
    
  return (
    
    <div className="App">
<body>
<div class="topnav" id="myTopnav">
  <a href="#home" class="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>
      <header className="App-header">
      <h2>Typical Media Query Breakpoints</h2>
<p class="example">Resize the browser window to see how the background color of this paragraph changes on different screen sizes.</p>
      </header>
</body>



    </div>
  );
}


export default App;

