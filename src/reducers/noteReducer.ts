import {
    NoteStateType,
    NoteActions,
    NoteType,
    NoteActionsType,
    NoteThunkType,
} from "./../types/note";
import NotesAPI from "../api/NotesAPI";

const initialState: NoteStateType = {
    noteList: [],
};

const notesReducer = (
    state: NoteStateType = initialState,
    action: NoteActionsType
): NoteStateType => {
    switch (action.type) {
        case NoteActions.SET_NOTES:
            return {
                ...state,
                noteList: action.payload,
            };
        default:
            return state;
    }
};

export const setNotesAction = (notes: NoteType[]) => ({
    type: NoteActions.SET_NOTES,
    payload: notes,
});

export const addNote = (note: NoteType): NoteThunkType => async (dispatch) => {
    const notes = NotesAPI.addNote(note);
    dispatch(setNotesAction(notes));
};

export const removeNote = (id: string): NoteThunkType => async (dispatch) => {
    const notes = NotesAPI.removeNote(id);
    dispatch(setNotesAction(notes));
};

export const changeNote = (note: NoteType): NoteThunkType => async (dispatch) => {
    const notes = NotesAPI.changeNote(note);
    dispatch(setNotesAction(notes));
};

export const fetchNotes = (): NoteThunkType => async (dispatch) => {
    const notes = NotesAPI.getNotes();
    dispatch(setNotesAction(notes));
};

export default notesReducer;
