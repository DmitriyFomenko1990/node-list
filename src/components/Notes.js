import React from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Notes = ({notes, onRemove}) => {
    return (
        <TransitionGroup component='ul' className="list-group">
            {notes.map(item => (
                <CSSTransition
                    key={item.id}
                    classNames='note'
                    timeout={800}
                >
                    <li className="list-group-item note">
                        <div>
                            <strong>{item.title}</strong>
                            <small>{item.date}</small>
                        </div>

                        <button type="button"
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => onRemove(item.id)}
                        >
                            &times;
                        </button>
                    </li>
                </CSSTransition>)
            )}
        </TransitionGroup>
    );
};
export default Notes;