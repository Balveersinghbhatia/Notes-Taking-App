// initialization section

let saveBtn = document.querySelector("#saveBtn");
let addTitle = document.querySelector("#addTitle");
let textArea = document.querySelector("#addTxt");
let notesDiv = document.querySelector("#notes");



notesDiv.textContent =
  'You dont have any note! Click on "Add note" section to add a note.';

saveBtn.addEventListener("click", () => {
  let notes = localStorage.getItem("notes");
  let title = localStorage.getItem("title");
  if (notes == null) {
    notesObj = [];
    titleObj = [];
  } else {
    notesObj = JSON.parse(notes);
    titleObj = JSON.parse(title);
  }

  if (addTitle.value !== "") {
	  notesDiv.innerHTML = ""
    notesObj.push(textArea.value);
    titleObj.push(addTitle.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    localStorage.setItem("title", JSON.stringify(titleObj));
//     console.log(notesObj);
//     console.log(titleObj);
    addTitle.value = "";
    textArea.value = "";
    showNotes();
  } else {
	  notesDiv.textContent="You can't save a empty note."
  }
});

// function to show the notes
function showNotes() {
  let notes = localStorage.getItem("notes");
  let title = localStorage.getItem("title");
  if (notes == null) {
    notesObj = [];
    titleObj = [];
  } else {
    notesObj = JSON.parse(notes);
    titleObj = JSON.parse(title);
  }
  for (i = 0; i < notesObj.length; i++) {
//     console.log(i);
    notesDiv.innerHTML += `<div class="card my-2 mx-2" style="width: 17rem;">
	  <div class="card-body">
		  <h5 class="card-title">${titleObj[i]}</h5>
		  <p class="card-text">${notesObj[i]}</p>
		  <a id=${i} onclick=deleteNote(this.id) class="btn btn-warning">Delete Note</a>
	  </div>
  </div> `;
  }
}

// function to delete the note
function deleteNote(id) {
  notesDiv.innerHTML = "";
  let notes = localStorage.getItem("notes");
  let title = localStorage.getItem("title");
  if (notes == null) {
    notesObj = [];
    titleObj = [];
  } else {
    notesObj = JSON.parse(notes);
    titleObj = JSON.parse(title);
  }
  notesObj.splice(id, 1);
  titleObj.splice(id, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  localStorage.setItem("title", JSON.stringify(titleObj));
  showNotes();
}

//function for implementing search bar
let search = document.getElementById("searchTxt")
search.addEventListener("input",(val)=>{
	let searchBtn = document.getElementById("searchBtn")
	let inputVal = search.value;
	
	let noteCard = document.querySelectorAll("#notes  .card-body")
	console.log("This is ")
	console.log(noteCard)
	for( i of noteCard)
	{
		let cardTxt = i.querySelector(".card-title").innerText;
		// console.log(cardTxt)
		if(cardTxt.includes(inputVal) && inputVal != "")
		{
			console.log("i am in",inputVal)
			console.log(i)
			i.style.display = "block"
		}
		else{
			i.style.display = "none"
		}
	}
	// console.log("input event is fired, " + inputVal)
	
})

