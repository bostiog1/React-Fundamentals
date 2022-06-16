Aimport React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import './index.css';
import App from './App';
import AddAuthorForm from './AddAuthorForm';
import reportWebVitals from './reportWebVitals';
import {shuffle, sample} from 'underscore';
import { ReactReduxContext } from 'react-redux';



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

function reducer( = { authors, turnData: getTurnData(authors), highlight: '' },
 action) {
    switch (action.type) {
      case 'ANSWER_SELECTED':
        const isCorrect = state.turnData.author.books.some((book) => book === action);
        return Object.assign(
          {}, 
          state, {
            highlight: isCorrect ? 'correct' : 'wrong'
          })
      case 'CONTINUE':
          return Object.assign({}, state, {
            highlight: '',
            turnData: getTurnData(state.authors) 
          });
      case 'ADD_AUTHOR' :
        return Object.assign({}, state, {
          authors: state.authors.concat([action.author])
        }),          
      default: return state;
    }
  return state; 
}

let store = Redux.createStore(reducer);


ReactDOM.render(
  <BrowserRouter>
  <ReactRedux.Provider store = {store} >
    <React.Fragment>
     <Route exact path="/" component={App}  />
     <Route path="/add" component={AddAuthorForm} />
    </React.Fragment>
    </ReactRedux.Provider>
  </BrowserRouter>, document.getElementById('root'));


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
