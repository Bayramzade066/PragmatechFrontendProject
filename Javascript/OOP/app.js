let form = document.getElementById("form");
var selectedRow = null; 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
})

// read the data

function readFormData(){
    var formData = {};
    formData["name"] = document.getElementById("name").value
    formData["surname"] = document.getElementById("surname").value
    formData["dateOfBirth"] = document.getElementById("dateOfBirth").value
    formData["age"] = document.getElementById("age").value
    formData["startTime"] = document.getElementById("startTime").value
    formData["endTime"] = document.getElementById("endTime").value
    return formData;
}

// insert data
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.name
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.surname;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.dateOfBirth;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.age;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.startTime;
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = data.endTime;
    var cell7 = newRow.insertCell(6);
        cell7.innerHTML = `<button onClick='onEdit(this)' class='hidebutton1 hide'>Edit</button> <button onClick= 'onDelete(this)' class='hidebutton2 hide'>Delete</button>`;
}
// edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('name').value = selectedRow.cells[0].innerHTML;
    document.getElementById('surname').value = selectedRow.cells[1].innerHTML;
    document.getElementById('dateOfBirth').value = selectedRow.cells[2].innerHTML;
    document.getElementById('age').value = selectedRow.cells[3].innerHTML;
    document.getElementById('startTime').value = selectedRow.cells[4].innerHTML;
    document.getElementById('endTime').value = selectedRow.cells[5].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.surname;
    selectedRow.cells[2].innerHTML = formData.dateOfBirth;
    selectedRow.cells[3].innerHTML = formData.age;
    selectedRow.cells[4].innerHTML = formData.startTime;
    selectedRow.cells[5].innerHTML = formData.endTime;
};

//delete the data

function onDelete(td){
    if(confirm('do you want to delete this student?')){
        row = td.parentElement.parentElement
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}


//reset the data

function resetForm(){
    document.getElementById('name').value='';
    document.getElementById('surname').value='';
    document.getElementById('dateOfBirth').value='';
    document.getElementById('age').value='';
    document.getElementById('startTime').value='';
    document.getElementById('endTime').value='';
    
}