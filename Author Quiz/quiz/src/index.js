import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {shuffle, sample} from 'underscore';
import { on } from 'events';


const authors = [
  {
    name: 'Mark Twain',
    imageUrl: 'images/author/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: [
      'The Adventures of Huckleberry Finn',
      'Life on the Mississippi',
      'Roughing It'
    ]
  }
];

function getTurnData(authors) {
  const allBooks = authors.reduce(function (p,c,i) {
    return p.concat(c.books);
  }, []);
  const fourRandomBooks = shuffle(allBooks). slice(0,4);
  const answer = sample(fourRandomBooks);

  return {
    books: fourRandomBooks,
    author: authors.find((auth) =>
      author.books.some((title) => 
        title === answer))
  }
}


const state = {
  turnData: getTurnData(authors),
  highlight: ''
};

function onAnswerSelected(answer) {
  const isCorrect = state.turnData.author.books.some((book) => book === answer);
  state.highlight = isCorrect ? 'correect' : 'wrong';
  render();
}

function AddAuthorForm({match}) {
  return <div>
    <h1>Add Author</h1>
    <p>{JSON.stringify(match)}</p>
  </div>
}




function App() {
  return<AuthorQuiz {...state} onAnswerSelected={onAnswerSelected}>;
}

function render() {
  ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
     <Route exact path="/" component={App}  />
     <Route path="/add" component={AddAuthorForm} />
    </React.Fragment>
  </BrowserRouter>, document.getElementById('root'));
}
render();
registerServiceWorker();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
