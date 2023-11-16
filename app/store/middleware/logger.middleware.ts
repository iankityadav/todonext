import { Action, Dispatch, MiddlewareAPI } from "redux";

export const loggerMiddleWare =
  (api: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
    if (process.env.NODE_ENV !== 'development') {
      return next(action);
    }
    console.log(
      "%c Previous State",
      "color: #fb5607; font-weight: bold;",
      api.getState(),
    );
    console.log("%c Dispatching", "color: #545EC2; font-weight: bold;", action);
    let result = next(action);
    console.log(
      "%c Next State",
      "color: #00AF0A; font-weight: bold;",
      api.getState(),
    );
    return result;
  };
