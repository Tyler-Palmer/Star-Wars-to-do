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
            bountyAmount: "",
            bountyID: ""
        };
    }

    editToggler = () => {
        this.setState(prevState => {
            return {
                editing: !prevState.editing,
                firstName: this.props.firstName,
                lastName: this.props.lastName,
                type: this.props.type,
                bountyAmount: this.props.bountyAmount,
                bountyID: this.props.id
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
        console.log(
            `Submit action: ${this.state.firstName} with id ${
                this.state.bountyID
            } was edited`
        );
        const id = this.state.bountyID;
        const editedBounty = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            type: this.state.type,
            bountyAmount: this.state.bountyAmount
        };
        this.props.handleEdit(id, editedBounty);
        this.editToggler();
    };

    componentDidMount() {
        console.log(`name: ${this.props.firstName} has id: ${this.props.id}`);
    }

    render() {
        return (
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
                                    onClick={this.handleSubmit}
                                    className="btn btn-primary"
                                >
                                    Submit Edit
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="card text-white bg-dark mb-3 mr-2 col-xs-12 col-sm-10 col-md-5 col-xl-3">
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
                    )}
                </Fragment>
        );
    }
}

export default Bounty;
