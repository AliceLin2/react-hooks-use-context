import React, {useState} from "react"

const UserContext = React.createContext()

function UserProvider({children}){
    const [user, setUser] = useState(null)

    return (
        <UserProvider value={{user, setUser}}>
            {children}
        </UserProvider>
    )
}

export {UserContext, UserProvider}