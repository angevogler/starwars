import React, {Component} from 'react';

class Planets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
    }
    // this.loadData = this.loadData.bind(this);
  }

  loadData() {
    fetch('https://swapi.co/api/planets')
      .then(resp => resp.json()) // arrow function! parses json response
      .then((data) => {
        // console.log(response.results[0]);
        this.setState({
          planets: data.results,
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.loadData();
  }

  render() {

    console.log(this.state.planets);

    const planetCard = this.state.planets.map(planet => {
      return(
        <div key={planet.name} className="card">
          <h4>Name: <span>{planet.name}</span></h4>
          <p>Climate: <span>{planet.climate}</span></p>
          <p>Terrain: <span>{planet.terrain}</span></p>
          <p>Population: <span>{planet.population}</span></p>
        </div>
      )
    });

    return(
      <div className="planet-cards">
        {planetCard}
      </div>
    );
  };

}

export default Planets;
