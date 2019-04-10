import React, { Component } from 'react'
import ReactDOM from 'react-dom'

//Our Mock Datastore
import restaurants from '/restaurants'

class Restaurant extends Component {
    constructor(props){
        super(props)
        const { match } = props

        this.state = {
            restaurantID: match.params.id
        }
    }

    componentDidUpdate(prevProps){
      const prevMatch = prevProps.match
      const{ match } = this.props
      if(match.params.id != prevMatch.params.id){
        this.setState({restaurantID: match.params.id})
      }
    }

    render(){
        const { restaurantID } = this.state
        const restaurant = restaurants.find((r) => r.id == restaurantID)

        return (
            <div>
                {restaurant &&
                    <div>
                        <h1>{restaurant.name}</h1>
                        <p>{restaurant.detail}</p>
                    </div>
                }
            </div>
        )
    }

}

export default Restaurant
