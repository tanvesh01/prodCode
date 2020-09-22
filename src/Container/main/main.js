import React, { Component } from "react";
import { X } from "react-feather";
import classes from "../main.module.css";
class Main extends Component {
    state = {
        value: "",
        tasks: [],
    };
    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
    };
    add = (todo) => {
        let x = this.state.tasks;
        x[0].todos.push(todo);
        this.setState({
            value: "",
            tasks: x,
        });
    };
    componentWillMount() {
        localStorage.getItem("prodCode") &&
            this.setState({
                tasks: JSON.parse(localStorage.getItem("prodCode")),
            });
    }
    componentWillUpdate(newProps, newState) {
        console.log("CWU");
        localStorage.setItem("prodCode", JSON.stringify(newState.tasks));
    }
    render() {
        return (
            <div className={classes.modal_window_inner_border}>
                <>
                    <div className={classes.modal_body}>
                        <div className={classes.modal_handle}>
                            <div className={classes.modal_close_button}>
                                <X color="#5d6484" size="14" />
                            </div>
                        </div>
                        <div className={classes.modal_content}>
                            <input
                                value={this.state.value}
                                onChange={(event) => this.handleChange(event)}
                                placeholder="Things to do...."
                            />
                            <button onClick={() => this.add(this.state.value)}>Add!!!</button>
                            {this.state.tasks.map((value) => {
                                return (
                                    <div>
                                        <h1>{value.Category}</h1>
                                        {value.todos.map((todo) => {
                                            // console.log(todo);
                                            return <div>{todo}</div>;
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </>
            </div>
        );
    }
}
export default Main;
