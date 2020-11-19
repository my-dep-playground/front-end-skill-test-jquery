/*
/!*
 *             DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 *                     Version 2, December 2004
 *
 *  Copyright (C) 2020 IJSE. All Rights Reserved.
 *
 *  Everyone is permitted to copy and distribute verbatim or modified
 *  copies of this license document, and changing it is allowed as long
 *  as the name is changed.
 *
 *             DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 *    TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
 *
 *   0. You just DO WHAT THE FUCK YOU WANT TO.
 *!/

/!**
 * @author : Ranjith Suranga <suranga@ijse.lk>
 * @since : 11/15/20
 **!/

/!*===============================================================================
 * Global Variables
 *===============================================================================*!/

var txtId;
var txtName;
var txtAddress;
var tblCustomers;
var customers = [];
var selectedCustomer = null;
var selectedRow = null;

/!*===============================================================================
 * Init
 *===============================================================================*!/

init();

function init(){
    txtId = document.getElementById('txt-id');
    txtName = document.getElementById('txt-name');
    txtAddress = document.getElementById('txt-address');
    tblCustomers = document.getElementById('tbl-customers');

    txtId.focus();
}

/!*===============================================================================
 * Event Handlers and Timers
 *===============================================================================*!/

document.getElementById('btn-save').addEventListener('click',handleSave);
txtId.addEventListener('input', handleInput)
txtName.addEventListener('input', handleInput)
txtAddress.addEventListener('input', handleInput)

/!*===============================================================================
 * Functions
 *===============================================================================*!/

function handleSave(event){
    validate();

    /!* Truthy: {}, [], "0", true *!/
    /!* Falsy: "", 0, 0.0, null, undefined, false *!/
    if (!selectedCustomer){
        customers.push({
            id: txtId.value,
            name: txtName.value,
            address: txtAddress.value
        });

        var row = tblCustomers.tBodies.item(0).insertRow(-1);
        row.onclick = handleSelection;

        var idCell = row.insertCell(0);
        idCell.innerText = txtId.value;

        var nameCell = row.insertCell(1);
        nameCell.innerText = txtName.value;

        var addressCell = row.insertCell(2);
        addressCell.innerText = txtAddress.value;

        var trashCell = row.insertCell(3);
        trashCell.innerHTML = '<div class="trash" onclick="handleDelete(event)"></div>';

        showOrHideTFoot();

        txtId.value = '';
        txtName.value = '';
        txtAddress.value = '';
        txtId.focus();

    }else{
        selectedCustomer.name = txtName.value;
        selectedCustomer.address = txtAddress.value;
        selectedRow.cells[1].innerText = txtName.value;
        selectedRow.cells[2].innerText = txtAddress.value;
    }

}

function clearSelection(){
    var rows = document.querySelectorAll("#tbl-customers tbody tr");
    for (var i = 0; i < rows.length; i++) {
        rows[i].classList.remove('selected');
    }
    txtId.disabled = false;
    selectedRow = null;
    selectedCustomer = null;
}

function handleSelection(event){
    clearSelection();
    selectedRow = event.target.parentElement;
    selectedRow.classList.add('selected');
    txtId.value = selectedRow.cells[0].innerText;
    txtId.disabled = true;
    txtName.value = selectedRow.cells[1].innerText;
    txtAddress.value = selectedRow.cells[2].innerText;
    selectedCustomer = customers.find(function(c){
        return c.id === selectedRow.cells[0].innerText;
    });
}

function handleDelete(event){
    if (confirm("Are you sure whether you want to delete this customer?")){
        tblCustomers.deleteRow(event.target.parentElement.parentElement.rowIndex);
        showOrHideTFoot();

        customers.splice(customers.findIndex(function(c){
            return c.id === event.target.parentElement.parentElement.cells[0].innerText;
        }),1);
        event.stopPropagation();
    }
}

function showOrHideTFoot(){
    if (tblCustomers.tBodies.item(0).rows.length > 0){
        document.querySelector("#tbl-customers tfoot").classList.add('d-none');
    }else{
        document.querySelector("#tbl-customers tfoot").classList.remove('d-none');
    }
}

function handleInput(event){
    this.classList.remove('is-invalid');
}

function validate(){
    /!* Object Literal {}, Array Literal [], RegExp Literal /expression/ *!/
    /!* new Object(), new Array(), new RegExp() *!/

    var regExp = null;
    var validated = true;

    txtId.classList.remove('is-invalid');
    txtName.classList.remove('is-invalid');
    txtAddress.classList.remove('is-invalid');

    if (txtAddress.value.trim().length < 3){
        txtAddress.classList.add('is-invalid');
        txtAddress.select();
        validated = false;
    }

    regExp = /^[A-Za-z][A-Za-z .]{3,}$/;
    if (!regExp.test(txtName.value)){
        txtName.classList.add('is-invalid');
        txtName.select();
        validated = false;
    }

    regExp = /^C\d{3}$/;
    if (!regExp.test(txtId.value)){
        txtId.classList.add('is-invalid');
        document.getElementById('helper-txt-id').classList.remove('text-muted');
        document.getElementById('helper-txt-id').classList.add('invalid-feedback');
        txtId.select();
        validated = false;
    }

    return validated;
}
*/
