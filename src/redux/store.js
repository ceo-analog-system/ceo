<<<<<<< HEAD
import studentReducer from './reducers/student/reducers';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";

=======
import {createStore,applyMiddleware,compose} from 'redux'
import reducer from './reducers/teacher/reducers'
import thunk from 'redux-thunk'



//穆达超
>>>>>>> 8212b17b173bcae201511a3a146c20bbd530e369
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;
    
const enhancer = composeEnhancers(
    applyMiddleware(thunk),                                       
  );

const rootReducer = combineReducers({
    student:  studentReducer,
})

const store = createStore(rootReducer, enhancer);
export default store;
//穆达超

// import reducer from './reducers/teacher/reducers'
// import thunk from 'redux-thunk'
// export default store


//曾闻捷


//周文轩


//沈若凤


//郑涵译