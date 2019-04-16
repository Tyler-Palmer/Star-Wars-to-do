import React, { Component } from "react";
import { withBountyProvider } from "../../context/BountyProvider";
import "./bountyform.css"

class BountyForm extends Component {
    render() {
        return (
            <form className="enter-form mb-5" onSubmit={this.props.handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6 pl-2">
                        <label className="font-weight-bold" htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            value={this.props.firstName}
                            name="firstName"
                            placeholder="First name"
                            onChange={this.props.handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group col-md-6 pl-2">
                        <label className="font-weight-bold" htmlFor="lastName">Last name</label>
                        <input
                            type="text"
                            value={this.props.lastName}
                            name="lastName"
                            placeholder="Last name"
                            onChange={this.props.handleChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6 pl-2">
                        <label className="font-weight-bold" htmlFor="type">Allegiance</label>
                        <input
                            type="text"
                            value={this.props.type}
                            name="type"
                            placeholder="Jedi or Sith?"
                            onChange={this.props.handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group col-md-6 pl-2">
                        <label className="font-weight-bold" htmlFor="bountyAmount">Bounty Amount</label>
                        <input
                            type="number"
                            value={this.props.bountyAmount}
                            name="bountyAmount"
                            placeholder="What's the bounty ($)?"
                            onChange={this.props.handleChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <button className="btn btn-primary ml-2 mb-2">Submit</button>
            </form>
        );
    }
}

export default withBountyProvider(BountyForm);
