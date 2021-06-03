import React, {useContext, useState} from 'react';
import {AlertContext} from "../context/alert/alertContext";
import {FirebaseContext} from "../context/firebase/firebaseContext";

const Form = () => {
    const [value, setValue] = useState("")
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const submitHandler = (event) =>{
        event.preventDefault()
        if (value.trim()) {
            firebase.addNote(value.trim())
                .then(() => alert.show("Заметка создана", 'success'))
                .catch(() => alert.show("Error, попробуйте позже", 'danger'))
            setValue('');
        } else alert.show("Введите текст");
    };
    return (
        <div>
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Введите название заметки"
                    value={value}
                    onChange={e=>setValue(e.target.value)}
                />
            </div>
        </form>
        </div>
    );
};
export default Form;