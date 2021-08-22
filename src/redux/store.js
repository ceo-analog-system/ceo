import studentReducer from './reducers/student/reducers';
import {createStore,applyMiddleware,compose, combineReducers} from 'redux'
import reducer from './reducers/teacher/reducers'
import thunk from 'redux-thunk'



//穆达超
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
    reducer: reducer,   // ?
})

const store = createStore(rootReducer, enhancer);
export default store;


//曾闻捷


//周文轩


//沈若凤


//郑涵译