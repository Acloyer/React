import React from 'react';

interface User {
    name: string,
    age: number
}

type Users = Array<User>;

function App(props: {users: Users}) {
    return (
        <div>{props.users[0]?.name}</div>
    )
}

export default App;