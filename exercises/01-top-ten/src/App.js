import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";

import restaurants from './pages/restaurants'
import Restaurant from './pages/Restaurant'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            restaurants: restaurants
        }
    }

  render() {
    const { restaurants } = this.state

    return (
        <Router>
          <div>
            <nav>
              <h2>Restaurants</h2>
              <ul>
                {restaurants.map((restaurant)=>
                  <li key={restaurant.id}>
                    <Link to={`/restaurant/${restaurant.id}`}>
                      {restaurant.name}
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
            <Switch>
              <Route
                path="/restaurant/:id"
                component={Restaurant}
              />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
