import React, {useReducer} from 'react';
import {FirebaseContext} from "./firebaseContext";
import {firebaseReducer} from "./firebaseReducer";
import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER} from "../types";
import axios from "axios";
import {REACT_APP_DB_URL} from '../../api/url'

const url = process.env.REACT_APP_DB_URL
const badUrl = REACT_APP_DB_URL

const FirebaseState = ({children}) => {
    const initialState = {
        notes: [],
        loading: false
    };
    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    const showLoader = () => dispatch({type: SHOW_LOADER});

    const  fetchNotes = async () => {
        showLoader()
        const result = await axios.get(`${badUrl}/notes.json`);
        const payload = Object.keys(result.data).map(key =>{
            return{
                ...result.data[key],
                id: key
            }
        });
        dispatch({type: FETCH_NOTES, payload});
    };

    const addNote = async title => {
        const note = {
            title,
            date: new Date().toJSON()
        };
        try {
            const result = await axios.post(`${badUrl}/notes.json`, note);
            const payload = {
                ...note,
                id: result.data.name
            };
            dispatch({type: ADD_NOTE, payload});
        } catch (e) {
            throw new Error(e.message)
        }
    };

    const removeNote = async id => {
        await axios.delete(`${badUrl}/notes/${id}.json`)
        dispatch({
            type: REMOVE_NOTE,
            payload: id
        })
    };
    return (
        <FirebaseContext.Provider value={{
            showLoader, addNote, removeNote, fetchNotes,
            loading: state.loading,
            notes: state.notes
        }}>
            {children}
        </FirebaseContext.Provider>
    );
};
export default FirebaseState;