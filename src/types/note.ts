import { setNotesAction } from "./../reducers/noteReducer";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./../store";
export enum NoteActions {
    SET_NOTES = "notes/SET_NOTES",
}

export type NoteType = {
    id: string;
    title: string;
    content: string;
};

export type NoteStateType = {
    noteList: Array<NoteType>;
};

export type NoteActionsType = ReturnType<typeof setNotesAction>;

export type NoteThunkType<ReturnType = void> = ThunkAction<
    Promise<ReturnType>,
    RootState,
    unknown,
    NoteActionsType
>;
