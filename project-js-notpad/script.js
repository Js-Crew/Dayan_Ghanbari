// A function to save notes in local storage
function saveNote() {
    // دریافت محتوای یادداشت از تکست‌آریا
    var noteContent = document.getElementById("noteInput").value;
    
    // Check if the content is imported or not
    if (noteContent.trim() === "") {
        alert("لطفاً محتوای یادداشت را وارد کنید.");
        return;
    }

    // Get previous notes from local storage
    var savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    // Add a new note to the array
    savedNotes.push(noteContent);

    // Save the new array to local storage
    localStorage.setItem("notes", JSON.stringify(savedNotes));

    // Clear the content of the text area
    document.getElementById("noteInput").value = "";

    // Display the list of notes
    displayNotes();
}

// A function to display notes
function displayNotes() {
    // Get notes from local storage
    var savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    // Making a list of notes
    var notesList = document.getElementById("notesList");
    notesList.innerHTML = "";
    savedNotes.forEach(function(note, index) {
        var noteItem = document.createElement("div");
        noteItem.textContent = (index + 1) + ". " + note;

        // Add delete button
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "حذف";
        deleteButton.onclick = function() {
            deleteNote(index);
        };
        noteItem.appendChild(deleteButton);

        // Add edit button
        var editButton = document.createElement("button");
        editButton.textContent = "ویرایش";
        editButton.onclick = function() {
            editNote(index);
        };
        noteItem.appendChild(editButton);

        notesList.appendChild(noteItem);
    });
}

// A function to delete a note
function deleteNote(index) {
    // Get notes from local storage
    var savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    // Remove the note at the specified index
    savedNotes.splice(index, 1);

    // Save the updated notes to local storage
    localStorage.setItem("notes", JSON.stringify(savedNotes));

    // Display the updated list of notes
    displayNotes();
}

// A function to edit a note
function editNote(index) {
    // Get notes from local storage
    var savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    // Prompt the user to edit the note
    var editedNote = prompt("ویرایش یادداشت:", savedNotes[index]);

    // Update the note if user entered a new content
    if (editedNote !== null) {
        savedNotes[index] = editedNote;

        // Save the updated notes to local storage
        localStorage.setItem("notes", JSON.stringify(savedNotes));

        // Display the updated list of notes
        displayNotes();
    }
}

// Calling the show notes function on page load
displayNotes();
