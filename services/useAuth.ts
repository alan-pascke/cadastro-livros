
import { useEffect, useState } from 'react';
import { useRouter } from "next/router"
import { auth } from './firebase';
import { User } from 'firebase/auth';

export const useAuth = () => {

    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user)=> {
            setUser(user);                  
        });
        return unsubscribe;
    }, [router]);

    const logout = async () => {
        await auth.signOut()
        .then(()=>{
            setUser(null);
        })
        .catch((error) =>{
            alert(error)
        })
    }

    return {user, logout};
}


