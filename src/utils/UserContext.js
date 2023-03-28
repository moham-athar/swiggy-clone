import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Athar"
    }
});

export default UserContext;