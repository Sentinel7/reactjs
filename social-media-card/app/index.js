// This is the JSX code. Babel translates this into pure JS and puts it in the build folder.

var person = {
    name: 'Jason T',
    location: 'Victoria, BC',
    occupation: 'Developer',
    photo: 'images/photo.png',
    updates: [
        {
            platform: 'twitter',
            status: 'Hello, my name is Jason'
        },
        {
            platform: 'twitter',
            status: 'I am coding in React'
        },
        {
            platform: 'twitter',
            status: 'Hello, world!'
        },
        {
            platform: 'facebook',
            status: 'This is a Facebook status update!!!'
        }
    ]
}

class Photo extends React.Component {

    render() {
        return(
            <div className="photo">
                <img src={this.props.photo} alt="Photo" />
            </div>
        )
    }

}

class Bio extends React.Component {

    render() {
        return(
            <div className="bio">
                <h1 className="name">{this.props.name}</h1>
                <h2 className="location">{this.props.location}</h2>
                <div className="occupation">
                    <p>{this.props.occupation}</p>
                </div>
            </div>
        )
    }

}

class Updates extends React.Component {

    updates() {
        return this.props.updates.map(function(update, index) {
            return (
                <li className={"update " + update.platform} key={index}>
                    {update.status}
                </li>
            )
        });
    }

    render() {
        return(
            <div className="updates">
                <ul>
                    {this.updates()}
                </ul>
            </div>
        )
    }

}

class Card extends React.Component {

    render() {
        return(
        <div className="card">
            <Photo photo={person.photo} />
            <Bio name={person.name} location={person.location} occupation={person.occupation} />
            <Updates updates={person.updates} />
        </div>)
    }

}

ReactDOM.render(<Card/>, document.getElementById('app'));
