import { useState } from 'react';


type User = {
    name: string,
    email: string,
    favLang?: string
}

export default function Form() {
    const [user, setUser] = useState<User>({
        name: '',
        email: '',
    })
    return (
        <div>Form</div>
    )
}
