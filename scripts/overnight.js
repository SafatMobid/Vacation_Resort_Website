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
    //const name=getElementById("name");
    //const email=getElementById("email");
    const kingRoom = document.getElementById("kingRoom").checked;
    const queenRoom = document.getElementById("queenRoom").checked;
    const twinRoom = document.getElementById("twinRoom").checked;
    const checkinDate = document.getElementById("checkinDate");
        let checkinMonth = checkinDate(checkinDate.getMonth()+1);
        //let checkinDay = checkinDate(checkinDate.getDay());
    const nightStay = Number(document.getElementById("nightStay").value);
    const adultStay = Number(document.getElementById("adultStay").value);
    const childrenStay = Number(document.getElementById("childrenStay").value);
    const seniorDiscount = document.getElementById("seniorDiscount").checked;
    const militaryDiscount = document.getElementById("militaryDiscount").checked;

    const kingVal = 150 * nightStay;
    const kingValPeak = 250 * nightStay;
    const queenVal = 150 * nightStay;
    const queenValPeak = 250 * nightStay;
    const twinVal = 210 * nightStay;
    const twinValPeak = 350 * nightStay;

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
