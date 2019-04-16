import React, { Component } from "react";
import Bounty from "../Bounty/Bounty";
import BountyForm from "../Bountyform/Bountyform";
import { withBountyProvider } from "../../context/BountyProvider";
import "./bounties.css"

class Bounties extends Component {
    componentDidMount() {
        this.props.getBounties();
    }

    render() {
        console.log(this.props);
        return (
            <div className="container bounty-form pt-5">
                <h1 className="page-title">Bounty Hunter To-Do List</h1>
                <BountyForm />
                <div className="todo-container">
                {this.props.bounties.map(bounty => (
                    <Bounty
                        firstName={bounty.firstName}
                        lastName={bounty.lastName}
                        type={bounty.type}
                        bountyAmount={bounty.bountyAmount}
                        key={bounty._id}
                        id={bounty._id}
                        handleDelete={this.props.handleDelete}
                        handleEdit={this.props.handleEdit}
                    />
                ))}
                </div>
            </div>
        );
    }
}

export default withBountyProvider(Bounties);
