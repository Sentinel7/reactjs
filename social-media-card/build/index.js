// This is the translated JSX code (Pure JS).

var person = {
    name: 'Jason Thomo',
    location: 'Victoria, BC',
    occupation: 'Developer',
    photo: './images/photo.png',
    updates: [{
        platform: 'twitter',
        status: 'Hello, my name is Jason'
    }, {
        platform: 'twitter',
        status: 'I am coding in React'
    }, {
        platform: 'twitter',
        status: 'Hello, world!'
    }, {
        platform: 'facebook',
        status: 'This is a Facebook status update!'
    }]
};

class Card extends React.Component {

    render() {
        return React.createElement(
            'div',
            { className: 'card' },
            React.createElement(Photo, null),
            React.createElement(Bio, null),
            React.createElement(Updates, null)
        );
    }

}

class Photo extends React.Component {

    render() {
        return React.createElement(
            'div',
            { className: 'photo' },
            React.createElement('img', { src: './images/photo.png', alt: 'Photo' })
        );
    }

}

class Bio extends React.Component {

    render() {
        return React.createElement(
            'div',
            { className: 'bio' },
            React.createElement(
                'h1',
                { className: 'name' },
                'Jason'
            ),
            React.createElement(
                'h2',
                { className: 'location' },
                'Victoria, BC'
            ),
            React.createElement(
                'div',
                { className: 'occupation' },
                React.createElement(
                    'p',
                    null,
                    'Developer'
                )
            )
        );
    }

}

class Updates extends React.Component {

    render() {
        return React.createElement(
            'div',
            { className: 'updates' },
            React.createElement(
                'ul',
                null,
                React.createElement(
                    'li',
                    { className: 'update' },
                    'Updates'
                ),
                React.createElement(
                    'li',
                    { className: 'update' },
                    'Updates'
                )
            )
        );
    }

}

ReactDOM.render(React.createElement(Card, null), document.getElementById('app'));
