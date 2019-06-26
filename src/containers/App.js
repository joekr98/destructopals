import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll'
import '../containers/App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            return response.json();
        })
        .then(users=>{
            this.setState({ robots: users })
        })
    }

    onSearchChange = (event) => {
        this.setState( { searchfield: event.target.value });
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        if(!robots.length) {
            return <h1>LOADING...</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">DestructoPals</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>

            )
        }
    } 
}
    


export default App;