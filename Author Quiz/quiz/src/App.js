import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css'


function Hero() {
  return (<div className="row">
    <div className="jumbotron col-10 offset-1">
      <h1>Author Quiz</h1>
      <p>Select the book written by the author shown</p>
    </div>
  </div>);
} 

function Book({title}) {
  return (<div className="answer">
    <h4>{title}</h4>
  </div>
  );
}


function Turn({author, books}) {
  return(<div className="row turn" style={{backgroundColor: "white"}}>
    <div className="col-4 offset-1">
      <img src={author.imageUrl} className="authorimage" alt="Author"/>
    </div>
    <div className="col-6">
      {books.map((title) => <Book title={title} key={title}></Book>,
    </div>
  </div>);
}



function Continue() {
  return(<div/>);
}


function Footer() {
  return(<div id="footer" className="row">
    <div className="text-muted credit">
      <p className="text-muted credit">
        All images are from <a href="" ></a>
      </p>
    </div>
  </div>)
}

function AuthorQuiz ({turnData}) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} />
      <Continue />
      <Footer />
    </div>
  );
}


function App() {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn />
      <Continue />
      <Footer />

    </div>
  );
}

export default App;
