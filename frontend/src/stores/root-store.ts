import { createContext, useContext } from "react";
import { DebtsStore, UsersStore } from ".";

const usersStore = new UsersStore();
const debtsStore = new DebtsStore();

const stores = { usersStore, debtsStore };

export const StoreContext = createContext(stores);

export const useStores = () => useContext(StoreContext);