import React, { Component, Fragment } from "react";
import "./bounty.css";

class Bounty extends Component {
    constructor() {
        super();
        this.state = {
            editing: false,
            firstName: "",
            lastName: "",
            type: "",
            bountyAmount: ""
        };
    }

    editToggler = () => {
        this.setState(prevState => {
            return {
                editing: !prevState.editing
            };
        });
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const editedBounty = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            type: this.state.type,
            bountyAmount: this.state.bountyAmount
        };
    };

    render() {
        return (
            <div className="container justify-content-sm-center">
                <Fragment>
                    {this.state.editing ? (
                        <form
                            className="edit-form"
                            onSubmit={this.handleSubmit}
                        >
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={this.state.firstName}
                                    onChange={this.handleChange}
                                    placeholder="First Name"
                                    name="firstName"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={this.state.lastName}
                                    onChange={this.handleChange}
                                    placeholder="Last Name"
                                    name="lastName"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="type">Allegiance</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={this.state.type}
                                    onChange={this.handleChange}
                                    placeholder="Jedi or Sith?"
                                    name="type"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="bountyAmount">
                                    Bounty Amount
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={this.state.bountyAmount}
                                    onChange={this.handleChange}
                                    placeholder="$ Bounty Amount"
                                    name="bountyAmount"
                                />
                            </div>
                            <div className="row">
                                <button
                                    onClick={this.editToggler}
                                    className="btn btn-primary mr-4 ml-4"
                                >
                                    Close
                                </button>
                                <button 
                                    onClick={this.props.handleEdit}
                                    className="btn btn-primary">
                                    Submit Edit
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="container">
                            <div className="card text-white bg-dark mb-3 col col-xs">
                                <div className="card-body">
                                    <div className="card-header bg-primary">
                                        <h1>Bounty</h1>
                                    </div>
                                    <h2 className="card-title">
                                        {this.props.firstName}
                                    </h2>
                                    <h2 className="card-title">
                                        {this.props.lastName}
                                    </h2>
                                    <h3 className="card-title">
                                        {this.props.type}
                                    </h3>
                                    <h3 className="card-title">
                                        {`$ ${this.props.bountyAmount}`}
                                    </h3>
                                    <div className="row justify-content-center">
                                        <button
                                            className="btn btn-primary mr-4"
                                            onClick={() =>
                                                this.props.handleDelete(
                                                    this.props.id
                                                )
                                            }
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className="btn btn-primary mr-4"
                                            onClick={this.editToggler}
                                        >
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Fragment>
            </div>
        );
    }
}

export default Bounty;
