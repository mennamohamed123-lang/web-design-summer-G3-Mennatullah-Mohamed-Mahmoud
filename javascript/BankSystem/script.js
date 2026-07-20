let users = []

let addUser = () => {

    let id = Number(prompt("Enter user ID : "))
    let name = prompt("Enter user name : ")
    let balance = Number(prompt("Enter user balance : "))

    let user = {
        id: id,
        name: name,
        balance: balance
    }

    users.push(user)

    alert("User added successfully")
}


addUser()
addUser()
addUser()

console.log(users)



let editUserBalanceById = (id, newBalance) => {

    let user = users.find(user => user.id === id)

    if(user){

        user.balance = newBalance
        alert("Balance Updated")

    }
    else{

        alert("User Not Found")

    }
}


let editId = Number(prompt("Enter user ID to edit:"))
let newBalance = Number(prompt("Enter new balance:"))

editUserBalanceById(editId, newBalance)



let transferBalance = (fromId, toId, amount) => {

    let fromUser = users.find(user => user.id === fromId)

    let toUser = users.find(user => user.id === toId)


    if(fromUser && toUser){

        if(fromUser.balance >= amount){

            fromUser.balance -= amount
            toUser.balance += amount

            alert("Transfer Done")

        }
        else{

            alert("Not Enough Balance")

        }

    }
    else{

        alert("User Not Found")

    }
}


let senderId = Number(prompt("Enter sender ID:"))
let receiverId = Number(prompt("Enter receiver ID:"))
let amount = Number(prompt("Enter amount:"))

transferBalance(senderId, receiverId, amount)



let deleteUserById = (id) => {

    let index = users.findIndex(user => user.id === id)


    if(index !== -1){

        users.splice(index, 1)
        alert("User Deleted")

    }
    else{

        alert("User Not Found")

    }
}


let deleteId = Number(prompt("Enter user ID to delete:"))

deleteUserById(deleteId)



console.log(users)