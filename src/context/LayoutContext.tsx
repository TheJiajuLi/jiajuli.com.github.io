import React, { createContext, useContext, useReducer } from "react";

interface LayoutState {
  explorerVisible: boolean;
  explorerWidth: number;
  mainContentWidth: string;
  horizontalControlsExpanded: boolean;
  sidebarVisible: boolean;
  mobileControlsVisible: boolean;
  mobileControlsExpanded: boolean;
  lastInteractionTime: number;
}

type LayoutAction =
  | { type: "TOGGLE_EXPLORER" }
  | { type: "SET_EXPLORER_WIDTH"; payload: number }
  | { type: "SET_CONTROLS_EXPANDED"; payload: boolean }
  | { type: "SET_SIDEBAR_VISIBLE"; payload: boolean }
  | { type: "SET_MOBILE_CONTROLS_VISIBLE"; payload: boolean }
  | { type: "SET_MOBILE_CONTROLS_EXPANDED"; payload: boolean }
  | { type: "UPDATE_INTERACTION_TIME" };

const initialState: LayoutState = {
  explorerVisible: true,
  explorerWidth: 350,
  mainContentWidth: "calc(100% - 350px)",
  horizontalControlsExpanded: false,
  sidebarVisible: false,
  mobileControlsVisible: true,
  mobileControlsExpanded: false,
  lastInteractionTime: Date.now(),
};

const layoutReducer = (
  state: LayoutState,
  action: LayoutAction
): LayoutState => {
  switch (action.type) {
    case "TOGGLE_EXPLORER":
      return {
        ...state,
        explorerVisible: !state.explorerVisible,
        mainContentWidth: !state.explorerVisible
          ? `calc(100% - ${state.explorerWidth}px)`
          : "100%",
      };
    case "SET_EXPLORER_WIDTH":
      return {
        ...state,
        explorerWidth: action.payload,
        mainContentWidth: state.explorerVisible
          ? `calc(100% - ${action.payload}px)`
          : "100%",
      };
    case "SET_CONTROLS_EXPANDED":
      return {
        ...state,
        horizontalControlsExpanded: action.payload,
      };
    case "SET_SIDEBAR_VISIBLE":
      return {
        ...state,
        sidebarVisible: action.payload,
      };
    default:
      return state;
  }
};

const LayoutContext = createContext<{
  state: LayoutState;
  dispatch: React.Dispatch<LayoutAction>;
}>({ state: initialState, dispatch: () => null });

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(layoutReducer, initialState);
  return (
    <LayoutContext.Provider value={{ state, dispatch }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => useContext(LayoutContext);
