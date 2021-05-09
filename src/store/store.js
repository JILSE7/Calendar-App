import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk';
import { rootReducers } from '../reducers/rootReducers'


//El compoceEnhacenrs es el encargado de poder integrar nuestra herrameinta de redux developer tools y el middleware thunk de una forma muy sencilla
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(thunk))
)