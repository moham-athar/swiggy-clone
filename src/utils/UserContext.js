import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "lucifer"
    }
});

export default UserContext;