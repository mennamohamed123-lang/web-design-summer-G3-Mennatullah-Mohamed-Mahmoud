let ids=[10 , 5 , 2 , 20]

let userId=prompt("Enter your ID : ")

let index = ids.findIndex(id => id==userId)
if(index != -1){
    alert ("Found at " + index)
}
else{
    ids.push(userId)
    alert("added")
}

console.log(ids)