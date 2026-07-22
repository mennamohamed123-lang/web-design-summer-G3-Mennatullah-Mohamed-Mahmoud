let users = [];
let editIndex = -1;

let form = document.getElementById("userForm");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let usersDiv = document.getElementById("users");
let submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let name = nameInput.value.trim();
    let email = emailInput.value.trim();

    if(name === "" || email === ""){
        alert("All fields are required");
        return;
    }

    if(!email.includes("@")){
        alert("Invalid email");
        return;
    }

    let user = {
        name: name,
        email: email
    };

    if(editIndex === -1){
        users.push(user);
    }
    else{
        users[editIndex] = user;
        editIndex = -1;
        submitBtn.textContent = "Add User";
        submitBtn.classList.replace('btn-success', 'btn-primary');
    }

    displayUsers();
    form.reset();
});


function displayUsers(){
    usersDiv.innerHTML = "";

    users.forEach((user, index) => {
        usersDiv.innerHTML += `
            <div class="alert alert-primary mt-3">
                <h2>Name: ${user.name}</h2>
                <h3>Email: ${user.email}</h3>

                <button class="btn btn-danger me-2" onclick="deleteUser(${index})">
                    Remove User
                </button>

                <button class="btn btn-warning" onclick="editUser(${index})">
                    Edit User
                </button>
            </div>
        `;
    });
}


function deleteUser(index){
    users.splice(index, 1);
    displayUsers();
}


function editUser(index){
    nameInput.value = users[index].name;
    emailInput.value = users[index].email;

    editIndex = index;
    submitBtn.textContent = "Save Changes";
    submitBtn.classList.replace('btn-primary', 'btn-success');
}