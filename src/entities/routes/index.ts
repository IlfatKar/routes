import routesReducer, { changeCurrent, setError } from "./model/slice";
import { routesWatcher, getPath } from "./model/saga";

export default routesReducer;
export { changeCurrent, routesWatcher, setError, getPath };
