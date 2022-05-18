import { FC, useReducer } from "react";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";
import { v4 } from "uuid";

export interface EntriesState {
  entries: Entry[];
}

interface Props {
  children?: React.ReactNode | undefined;
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: v4(),
      description: "Pendiente: Fugiat ex elit enim mollit laboris.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: v4(),
      description: "En-Progreso: Culpa incididunt pariatur quis exercitation.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      _id: v4(),
      description: "Terminadoas: Nisi esse excepteur qui et eu commodo mollit.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: v4(),
      description,
      createdAt: Date.now(),
      status: "pending",
    };

    dispatch({ type: "[Entry] Add-Entry", payload: newEntry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        //Methods
        addNewEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
