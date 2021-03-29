import { NoteType } from "./../types/note";
const NotesAPI = {
    getNotes() {
        const storageNotes = localStorage.getItem("notes") || "[]";
        return JSON.parse(storageNotes);
    },
    setNotes(notes: NoteType[]) {
        localStorage.setItem("notes", JSON.stringify(notes));
        return notes;
    },
    addNote(note: NoteType) {
        const notes = this.getNotes();
        notes.push(note);
        this.setNotes(notes);
        return notes;
    },
    removeNote(id: string) {
        const notes = this.getNotes();
        const filteredNote = notes.filter((note: NoteType) => note.id !== id);
        if (filteredNote) {
            this.setNotes(filteredNote);
            return filteredNote;
        } else {
            return notes;
        }
    },
    changeNote(note: NoteType) {
        const notes = this.getNotes();
        let foundedNote = notes.find((n: NoteType) => n.id === note.id);
        if (foundedNote) {
            foundedNote.content = note.content;
            foundedNote.title = note.title;
			this.setNotes(notes);
        }
        return notes;
    },
};

export default NotesAPI;
