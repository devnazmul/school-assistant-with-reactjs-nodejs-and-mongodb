import React from 'react';

export default function PrivateRoute({ children, ...rest }) {
    const [user, setUser] = React.useState();
    React.useEffect(() => {
        localStorage.getItem('user_info');
    }, [user]);
    return (
        <div>PrivateRoute</div>
    )
}
