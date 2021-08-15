//穆达超
import {createStore,applyMiddleware,compose} from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;
    
const enhancer = composeEnhancers(
    applyMiddleware(thunk),                                       
  );
const store =createStore(reducer,enhancer)
export default store


//曾闻捷


//周文轩

//沈若凤

//郑涵译