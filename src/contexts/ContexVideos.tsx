import { createContext, useReducer, ReactNode, useContext } from "react";
import { dataReducer, DataState, ActionType } from "./reducers/ReducerVideos";

type DataContextType = {
  state: DataState;
  dispatch: React.Dispatch<ActionType>;
};

const initialData: DataState = [];

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialData);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useVideosData = () => useContext(DataContext)
