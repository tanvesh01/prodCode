import React, { Component } from "react";
import { X } from "react-feather";
import { ModalContext } from "../../Contexts/ModalProvider";
class Main extends Component {
    state = {};
    render() {
        return (
            <div className="modal-window-inner-border">
                <>
                    <div className="modal-body">
                        <div className="modal-handle">
                            <div className="modal-close-button">
                                <X color="#5d6484" size="14" />
                            </div>
                        </div>
                        <div className="modal-content">
                            <input placeholder="Things to do...." />
                        </div>
                    </div>
                </>
            </div>
        );
    }
}
export default Main;
