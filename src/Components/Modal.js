import React from "react";
import Draggable from "react-draggable";
import Main from "../Container/main/main";
import { ModalContext } from "../Contexts/ModalProvider";

const Modal = () => {
    return (
        <ModalContext.Consumer>
            {({ windowPosition, hasDraggedWindowPosition, extensionId, getExtensionId }) => (
                <Draggable
                    handle=".main_modal_handle__NS02W"
                    defaultPosition={{ x: windowPosition.x, y: windowPosition.y }}
                    position={
                        hasDraggedWindowPosition
                            ? { x: windowPosition.x, y: windowPosition.y }
                            : null
                    }
                >
                    <div
                        id="modal"
                        className="modal-window"
                        style={{
                            transform: windowPosition,
                        }}
                    >
                        <Main />
                    </div>
                </Draggable>
            )}
        </ModalContext.Consumer>
    );
};

export default Modal;

{
    /* <ModalContext.Consumer>
            {({ windowPosition, hasDraggedWindowPosition, extensionId, getExtensionId }) => (
                <Draggable
                    handle=".modal-handle"
                    defaultPosition={{ x: windowPosition.x, y: windowPosition.y }}
                    position={
                        hasDraggedWindowPosition
                            ? { x: windowPosition.x, y: windowPosition.y }
                            : null
                    }
                >
                    <div
                        id="modal"
                        className="modal-window"
                        style={{
                            transform: windowPosition,
                        }}
                    >
                        <div className="modal-window-inner-border">
                            <>
                                <div className="modal-body">
                                    <div className="modal-handle">
                                        <div className="modal-close-button">
                                            <X color="#5d6484" size="14" />
                                        </div>
                                    </div>
                                    <div className="modal-content">
                                        <h3>{extensionId}</h3>
                                        <button onClick={getExtensionId} className="modal-button">
                                            {window.screen.width}
                                        </button>
                                    </div>
                                </div>
                            </>
                        </div>
                    </div>
                </Draggable>
            )}
        </ModalContext.Consumer> */
}
