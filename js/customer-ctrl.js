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
 *===============================================================================*/

$("#btn-save").click(function (){
    $("table tbody").append('<tr>\n' +
        '                        <td>'+$("#txt-id").val()+'</td>\n' +
        '                        <td>'+$("#txt-name").val()+'</td>\n' +
        '                        <td>'+$("#txt-address").val()+'</td>\n' +
        '                        <td><button type="button">Delete</button></td>\n' +
        '                    </tr>');
    showOrHideTFoot();
    $("tbody button").click(function (){
        $(this).parents("tr").remove();
        showOrHideTFoot();
    })
});

/*===============================================================================
 * Functions
 *===============================================================================*/
function showOrHideTFoot(){
    $("table tbody tr").length > 0 ? $("table tfoot").addClass("hide") : $("table tfoot").removeClass("hide");
}