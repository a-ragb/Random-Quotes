var bookmarkName = document.querySelector("#bookmarkName");
var bookmarkUrl = document.querySelector("#bookmarkUrl");

var submitBtn = document.querySelector(".submit-button");
var visitBtn = document.querySelector(".visit-button");
var deleteBtn = document.querySelector(".delete-button");
var closeBtn = document.querySelector(".close-button");

var alert = document.querySelector(".alert-section");

var bookmarkList = [];

var regex = {
    bookmarkName: {
        val: /^[\sa-zA-Z0-9_-]{3,}$/,
        isValid: false
    },
    bookmarkUrl: {
        val: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        isValid: false
    }
}

if (localStorage.getItem("bookmarkList") != null) {
    bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
    displayTable();
}

submitBtn.addEventListener("click", function () {
    if(regex.bookmarkName.isValid && regex.bookmarkUrl.isValid){
        alert.classList.add("d-none");
        alert.classList.remove("d-block");
        addBookmark();
    }
    else {
        alert.classList.add("d-block");
        alert.classList.remove("d-none");
    }
})

closeBtn.addEventListener("click", function () {
    alert.classList.add("d-none");
    alert.classList.remove("d-block");
})

function addBookmark () {
    var bookmark = {
        name: bookmarkName.value,
        url: bookmarkUrl.value
    };

    bookmarkList.push(bookmark);

    localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));

    clearInputs();

    displayTable();
}

function displayTable () {
    var cartona= ``;

    for (var i = 0; i < bookmarkList.length; i++) {
        cartona+=`<tr>
                        <td>${i+1}</td>
                        <td>${bookmarkList[i].name}</td>
                        <td><button onclick="visitSite(${i})" class="btn visit-button"><i class="fa-solid fa-eye pe-2"></i>Visit</button></td>
                        <td><button onclick="deleteRow(${i})" class="btn pe-2 delete-button"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
                    </tr>`;
    }

    document.querySelector(".table-body").innerHTML = cartona;
}

function clearInputs () {
    bookmarkName.value = "";
    bookmarkUrl.value = "";
}

function deleteRow (index) {
    bookmarkList.splice(index,1);
    localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
    displayTable();
}

function visitSite (index) {
    window.open("https://" + bookmarkList[index].url);
}

function validateInputs (element) {  

    if(regex[element.id].val.test(element.value)){
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        regex[element.id].isValid = true;
    }
    else {
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        regex[element.id].isValid = false;
    }
}