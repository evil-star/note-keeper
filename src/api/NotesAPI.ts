const NotesAPI = {
	getNotes() {
		return new Promise((res, rej) => {
            const storageNotes = localStorage.getItem("notes") || "";
            const storageNotesJson = JSON.parse(storageNotes);
			res(storageNotesJson);
        });
	},
	setNotes(notes: any) {
		return new Promise((res, rej) => {
            localStorage.setItem("notes", notes);
			res(notes);
        });
	},
    // addNote(note: any) {
    //     return new Promise((res, rej) => {
    //         return this.getNotes().then(allNotes => {
	// 			allNotes.push(note);
	// 			res(allNotes);
	// 		})

    //     });
    // },
	
};

export default NotesAPI;
