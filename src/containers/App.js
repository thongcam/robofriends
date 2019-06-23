import React, {Component} from 'react';
import CardList from '../components/CardArray';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../style/App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots : [],
      searchField : '',
    };
  }

  onSearchChange = (event) => {
    this.setState({searchField:event.target.value});
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots:users}));
  }
  render() {
    const {robots,searchField} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });
    return (
      <div className='tc'>
        <h1 className='f1'>Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll>
      </div>
    );
  }
}
//
export default App;
