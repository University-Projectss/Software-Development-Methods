export interface UserContextInterface {
  user: UserInterface;
  setUser: (user: UserInterface) => void;
  logIn: () => void;
  logOut: () => void;
}

export interface UserInterface {
  username: string;
}
