import React from "react";

class Profile extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    render () {
        const { count } = this.state
        return (
            <div>
                <h2>Class Profile</h2>
                <h2>{count}</h2>
                <button onClick={() => {
                    this.setState ( {
                        count : 1 ,
                    })
                }}>Click ME</button>
            </div>
        )
    }
}

export default Profile;