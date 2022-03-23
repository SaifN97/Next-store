import {
  FunctionComponent,
  createContext,
  useContext,
  ReactNode,
  useReducer,
  useMemo,
} from "react";

export interface StateModifiers {
  openSidebar: () => void;
  closeSidebar: () => void;
}

export interface StateValues {
  isSidebarOpen: boolean;
}

const stateModifiers = {
  openSidebar: () => {},
  closeSidebar: () => {},
};

const initialState = { isSidebarOpen: false };

type State = StateModifiers & StateValues;

interface Props {
  children: ReactNode[] | ReactNode;
}

const UIContext = createContext<State>({
  ...stateModifiers,
  ...initialState,
});

type Action = {
  type: "OPEN_SIDEBAR" | "CLOSE_SIDEBAR";
};

function uiReducer(state: StateValues, action: Action) {
  switch (action.type) {
    case "OPEN_SIDEBAR":
      {
        return {
          ...state,
          isSidebarOpen: true,
        };
      }
      break;
    case "CLOSE_SIDEBAR": {
      return {
        ...state,
        isSidebarOpen: false,
      };
    }
  }
}

const UIProvider: FunctionComponent<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);
  const openSidebar = () => dispatch({ type: "OPEN_SIDEBAR" });
  const closeSidebar = () => dispatch({ type: "CLOSE_SIDEBAR" });

  const value = useMemo(() => {
    return {
      ...state,
      openSidebar,
      closeSidebar,
    };
  }, [state.isSidebarOpen]);

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export default UIProvider;

export const useUI = () => {
  const context = useContext(UIContext);
  return context;
};
