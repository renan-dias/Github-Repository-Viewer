import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/renan-dias/repos')
      .then((response) => {
        this.setState({
          repos: response.data
        });
      });
  }

  render() {
    const repos = this.state.repos.map((repo, index) => (
      <div key={index} className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{repo.name}</h3>
        </div>
        <div className="panel-body">
          {repo.description}
        </div>
      </div>
    ));

    return (
      <div className="App">
        <div className="App-header">
          <h2>My GitHub Repositories</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {repos}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;