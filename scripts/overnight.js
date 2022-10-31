"use strict";

window.onload = init;

function init() 
{
    const calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.onclick = calculateBtnClick;
}

//all id's
//id="name" X
//id="email" X
//id="kingRoom" X
//id="queenRoom" X
//id="twinRoom" X
//id="checkinDate" X
//id="nightStay" X
//id="adultStay" X
//id="childrenStay" X
//id="seniorDiscount" X
//id="militaryDiscount" X
//id="room"
//id="discount"
//id="discountRoom"
//id="tax"
//id="totalCost"

function calculateBtnClick() 
{
    //let name=getElementById("name");
    //let email=getElementById("email");
    let kingRoom = document.getElementById("kingRoom").checked;
    let queenRoom = document.getElementById("queenRoom").checked;
    let twinRoom = document.getElementById("twinRoom").checked;
    let checkinDate = document.getElementById("checkinDate");
        let checkinMonth = checkinDate(checkinDate.getMonth()+1);
        let checkinDay = checkinDate(checkinDate.getDay());
    let nightStay = Number(document.getElementById("nightStay").value);
    let adultStay = Number(document.getElementById("adultStay").value);
    let childrenStay = Number(document.getElementById("childrenStay").value);
    let seniorDiscount = document.getElementById("seniorDiscount").checked;
    let militaryDiscount = document.getElementById("militaryDiscount").checked;

    let kingVal = 250 * nightStay
    let queenVal = 250 * nightStay
    let twinVal = 250 * nightStay

    if (kingRoom)
    {

    }

    if (queenRoom)
    {

    }

    if (twinRoom)
    {
        
    }
}
