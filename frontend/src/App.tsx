import { ChakraProvider } from "@chakra-ui/react";
import { createContext } from "react";
import { RoutesComponent } from "./components/Routes/RoutesComponent";
import { useAuth } from "./components/Utils/useAuth";
import { UserContextInterface } from "./types";

export const UserContext = createContext<UserContextInterface>(
  {} as UserContextInterface
);

export const App = () => {
  const createUser = useAuth();

  return (
    <ChakraProvider>
      <UserContext.Provider value={createUser}>
        <RoutesComponent />
      </UserContext.Provider>
    </ChakraProvider>
  );
};
