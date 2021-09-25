import studentReducer from './reducers/student/reducers';
import {createStore,applyMiddleware,compose, combineReducers} from 'redux'
import reducer from './reducers/teacher/reducers'
import thunk from 'redux-thunk'
//引入为Application_ceo组件服务的reducer
import applicationCeoReducer from './reducers/ceo/Application_ceo';

//穆达超
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;
    
const enhancer = composeEnhancers(
    applyMiddleware(thunk),                                       
  );

//曾闻捷

//周文轩

//沈若凤

//郑涵译

const allReducers = combineReducers({
  student:  studentReducer,
<<<<<<< HEAD
  reducer: reducer,   // ?
  
  applicationCeo:applicationCeoReducer,
=======
  reducer: reducer,   
  application_ceo,
>>>>>>> 615063096c5203df501eb6f357bbbe50b892b62d
})

export default createStore(allReducers,enhancer)