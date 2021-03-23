const ADD_NOTE = "notes/ADD_NOTE";

type NoteType = {
	id: number,
	title: string,
	content: Array<any>
}

type NoteStateType = {
	noteList: Array<NoteType>
};

const initialState: NoteStateType = {
    noteList: [],
};

const notesReducer = (state: NoteStateType = initialState, action: any) => {
    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state,
                notesList: action.notes,
            };
    }
};

const addNote = (note: NoteType) => ({
    type: ADD_NOTE,
    payload: note,
});

export default notesReducer;
