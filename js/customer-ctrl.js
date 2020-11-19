/*
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
 */

/**
 * @author : Ranjith Suranga <suranga@ijse.lk>
 * @since : 11/15/20
 **/

/*===============================================================================
 * Global Variables
 *===============================================================================*/

var txtId;
var txtName;
var txtAddress;

/*===============================================================================
 * Init
 *===============================================================================*/

init();

function init(){
    txtId = $("#txt-id");
    txtName = $("#txt-name");
    txtAddress = $("#txt-address");
    txtId.focus();

}

/*===============================================================================
 * Event Handlers and Timers
 *================================================================= ==============*/

/*txtId.on("change",handleInput);
txtName.on("change",handleInput);
txtAddress.on("click",handleInput);*/


$("#btn-save").click(function (){
    if(validate()) {
        $("table tbody").append('<tr>\n' +
            '                        <td>' + $("#txt-id").val() + '</td>\n' +
            '                        <td>' + $("#txt-name").val() + '</td>\n' +
            '                        <td>' + $("#txt-address").val() + '</td>\n' +
            '                        <td><div id="trash-icon"></div></td>\n' +
            '                    </tr>');
        showOrHideTFoot();
        attachEventListner();
    }else {
        return;
    }

});

/*===============================================================================
 * Functions
 *===============================================================================*/

function handleInput(event){
    this.removeClass('is-invalid');
}

function attachEventListner(){
        $("#trash-icon").click(function () {
            if (confirm("Are you sure whether you want to delete this customer?")) {
                $(this).parents("tr").remove();
            }
            showOrHideTFoot();
        });
}
function showOrHideTFoot(){
    $("table tbody tr").length > 0 ? $("table tfoot").addClass("hide") : $("table tfoot").removeClass("hide");
}

function validate(){
    var regExp = null;
    var validated = true;

    txtId.removeClass('is-invalid');
    txtName.removeClass('is-invalid');
    txtAddress.removeClass('is-invalid');

    if($.trim(txtAddress.val()).length < 3){
        txtAddress.addClass('is-invalid');
        txtAddress.select();
        validated = false;
    }
    var name = $("#txt-name").val();
    var reg = /^[A-Za-z][A-Za-z .]{3,}$/;
    if(!name.text(reg)){
        alert("hello");
    }
 /*   if (!txtName.val().text().match(/^[A-Za-z][A-Za-z .]{3,}$/)){
        txtName.addClass('is-invalid');
        txtName.select();
        validated = false;
    }*/
    return validated;
}