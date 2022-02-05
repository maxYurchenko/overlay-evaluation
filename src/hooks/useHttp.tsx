import { Query, ResultSet } from "@cubejs-client/core";
import { useReducer, useCallback } from "react";
import { SeriesConfig } from "../types/seriesConfig";

interface Action {
  type: "SENDING" | "SUCCESS" | "ERROR";
  responseData?: SeriesConfig;
  errorMessage?: string;
  sendRequest?: () => {};
}

interface State {
  data?: SeriesConfig | null;
  error?: null | string;
  status: "pending" | "completed" | null;
}

function httpReducer(state: State, action: Action): State {
  if (action.type === "SENDING") {
    return {
      data: null,
      error: null,
      status: "pending"
    };
  }

  if (action.type === "SUCCESS") {
    return {
      data: action.responseData,
      error: null,
      status: "completed"
    };
  }

  if (action.type === "ERROR") {
    return {
      data: null,
      error: action.errorMessage,
      status: "completed"
    };
  }

  return state;
}

function useHttp(
  requestFunction: (query: () => Query) => Promise<any>,
  startWithPending = false
) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? "pending" : null,
    data: null,
    error: null
  });

  const sendRequest = useCallback(
    async function (requestData: () => Query) {
      dispatch({ type: "SENDING" });
      try {
        const responseData: SeriesConfig = await requestFunction(requestData);
        dispatch({ type: "SUCCESS", responseData });
      } catch (error: any) {
        dispatch({
          type: "ERROR",
          errorMessage: error.message || "Something went wrong!"
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState
  };
}

export default useHttp;
