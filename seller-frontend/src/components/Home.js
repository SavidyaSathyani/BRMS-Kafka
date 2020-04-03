import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import AdvertiseService from '../services/advertiseService';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            inEmail: null,
            inName: null,
            inYear: null,
            sltGender: "male",
            isRedirect: false
        }
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit = () => {
        const customer = {
            name: this.state.inName,
            age: this.calculateAge(),
            email: this.state.inEmail,
            gender: this.state.sltGender
        }
        
        if(AdvertiseService.sendEmail(customer)) {
            console.log("here");
            this.setState({ isRedirect: true });
        }
    }

    calculateAge = () => {
        const today = new Date();
        return today.getFullYear() - this.state.inYear;
    }

    render() {
        if(this.state.isRedirect) 
            return <Redirect to="/thanks" />

        return (
            <div className="jumbotron">
                <h1 className="display-4">Welcome User!</h1>
                <p className="lead">This is a simple frontend application to demonstrate BRMS and Kafka integrations.</p>
                <hr className="my-4" />
                <p>Please fillout below information.</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="inName">Name</label>
                        <input type="text" className="form-control" id="inName" placeholder="Enter your name" onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inEmail">Email address</label>
                        <input type="email" className="form-control" id="inEmail" placeholder="Enter your email" onChange={this.handleInputChange} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <label>Birthday</label>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" id="inYear" placeholder="Year" onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group col-md-4">
                            <select id="sltMonth" className="form-control">
                                <option defaultValue value="Month">Month</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">Octomber</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <select id="sltDay" className="form-control">
                                <option defaultValue >Day</option>
                                <option >1</option><option >2</option><option >3</option>
                                <option >4</option><option >5</option><option >6</option>
                                <option >7</option><option >8</option><option >9</option>
                                <option >10</option><option >11</option><option >12</option>
                                <option >13</option><option >14</option><option >15</option>
                                <option >16</option><option >17</option><option >18</option>
                                <option >19</option><option >20</option><option >21</option>
                                <option >22</option><option >23</option><option >24</option>
                                <option >25</option><option >26</option><option >27</option>
                                <option >28</option><option >29</option><option >30</option>
                                <option >31</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="sltGender">Gender</label>
                        <select id="sltGender" className="form-control" onChange={this.handleInputChange}>
                                <option defaultValue value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                    </div>
                </form>
                <hr className="my-4" />
                <p className="lead">
                    <button className="btn btn-primary btn-lg" onClick={this.handleSubmit}>Submit</button>
                </p>
            </div>
        );
    } 
}

export default Home;
