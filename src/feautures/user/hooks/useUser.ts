import {useState} from "react";


const useUser = () => {
    const [user] = useState({
        name: 'Nick',
        secondName: 'Persii',
        isAdmin: true
    })

    const isLoggedIn = user ? true : false

    return [user, isLoggedIn]
}

export default useUser;