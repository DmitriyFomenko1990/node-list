import React, {useContext} from 'react';
import {AlertContext} from "../context/alert/alertContext";
import {CSSTransition} from "react-transition-group";

const MyAlert = () => {
    const {alert, hide} = useContext(AlertContext)
    return (
        <CSSTransition
            in={alert.visible}
            timeout={{
                enter: 500,
                exit: 350
            }}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit
        >
            <div className={`alert alert-${alert.type || "warning"} alert-dismissible fade show myAlert`}>
                <strong>{alert.text}</strong>
                <button onClick={hide} type="button"
                        className="close" data-bs-dismiss="alert"
                        aria-label="Close">
                    &times;
                </button>
            </div>
        </CSSTransition>
    );
};

export default MyAlert;