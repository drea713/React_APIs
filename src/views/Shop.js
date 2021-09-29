import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Shop extends Component {
    constructor() {
        super();

        this.state = {
            shop: {}
        }
    }

    componentDidMount() {
        fetch( 'https://fakebook-june-derek.herokuapp.com/api/shop/products' )
            .then( res => res.json() )
            .catch( err => console.log(err))

    }
    
    render() {
        return (
            <React.Fragment>
                <h3>Shop</h3>
                    <hr />
                ​
                    <div className="card-deck">
                        <div className="col-4">
                            <div className="card">
                                <div className="card-header">
                                    <h6>
                                        <span className="float-middle"></span>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <img className="card-img-top" src="{{ p.image }}" alt="" />
                                    <a className="btn btn-success btn-block" href=".">Add to cart</a>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-deck">
                        <div className="col-4">
                            <div className="card">
                                <div className="card-header">
                                    <h6>
                                        <span className="float-left"></span>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <img className="card-img-top" src="{{ p.image }}" alt="" />
                                    <a className="btn btn-success btn-block" href=".">Add to cart</a>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-deck">
                        <div className="col-4">
                            <div className="card">
                                <div className="card-header">
                                    <h6>
                                        <span className="float-left"></span>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <img className="card-img-top" src="{{ p.image }}" alt="" />
                                    <a className="btn btn-success btn-block" href=".">Add to cart</a>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}
