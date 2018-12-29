import React, { Component } from 'react';

// condition used inside the javascript function with JSX
function getGreeting(user1) {
    if (user1) {
        return <h1>Hello, {user1}</h1>
    }
    return <h1>Hello, Stranger.</h1>;
}



function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Hizqeel',
    lastName: 'Raza'
};

const user1 = "Tom";

// this line is JSX embedding html with javascript
const element1 = <h1>Hello, {formatName(user)}! React going great :) </h1>

const element2 = <h1> {getGreeting(user1)} </h1>

const element3 = (
    <div>
        <h2>Hello</h2>
        <h3>This is tag child</h3>
    </div>
);


// const element4 = (
//     <h1 className="greeting">
//         Hello, world!
//     </h1>
// );


class JsxExample extends Component {
    render() {
        
    const name = 'Hizqeel';
    const element = <h1>Hello, {name}</h1>;

        return (
            //pure JSX element
            <div>
                {element}
                {element1}
                {element2}
                {element3}
            </div>
        );
    }
}

export default JsxExample;