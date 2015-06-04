/**
 * Created by jurez on 06/03/2015.
 */
$(document).ready(function() {

    var errors = {};

    $("#datePicker").appendDtpicker({
        "inline": true,
        "futureOnly": true,
        "locale": "en",
        'dateFormat' : 'DD - MM - YYYY   hh:mm',
        'minuteInterval' : 15,
        'firstDayOfWeek' : 1,
        'timelistScroll' : false
    });

    $("#saveBtn").click(function () {
        checkTitleLength();
        checkBgImgLink();
        if(Object.keys(errors).length == 0) {
            console.log("no errors");
            saveDataToFile();
        }
    });

    function saveDataToFile() {

        var dataObj = new Object();
        var date = $("#datePicker").handleDtpicker("getDate");

        //console.log(date);
        //console.log(date.getFullYear());
        //console.log(date.getDate());
        //console.log(date.getMonth());
        //console.log(date.getHours());
        //console.log(date.getMinutes());
        //console.log($("#counterTitle").val());
        //console.log(cLink);
        //console.log($("#photoLink").val());

        var cLink = $("#link").val().trim();
        if(cLink.length == 0) {
            cLink = "#";
        }

        dataObj.saveData = "true";
        dataObj.year = date.getFullYear();
        dataObj.month = date.getMonth();
        dataObj.day = date.getDate();
        dataObj.hour = date.getHours();
        dataObj.minutes = date.getMinutes();
        dataObj.title = $("#counterTitle").val();
        dataObj.link = cLink;
        dataObj.bgPhoto = $("#photoLink").val();

        var posting = $.post("writeJsonFile.php", dataObj);
        posting.success(function(data) {
            if(data.indexOf("saveSuccessful") < 0) {
                window.location = "errorSavingData.html";
            } else {
                window.location = "demoCounter.html";
            }
        });
    }

    function checkTitleLength() {
        var ielm = $("#counterTitle");
        var elm = $("#titleError");
        var strLength = ielm.val().trim().length;
        if(strLength < 31 && strLength > 0) {
            hideError(elm, ielm);
            if(errors.title) {
                delete errors.title;
            }
        } else {
            showError(elm, ielm);
            errors.title = true;
        }
    }

    function checkBgImgLink() {
        var ielm = $("#photoLink");
        var elm = $("#photoError");
        if(ielm.val().trim().length != 0) {
            hideError(elm, ielm);
            if(errors.photo) {
                delete errors.photo;
            }
        } else {
            showError(elm, ielm);
            errors.photo = true;
        }
    }

    function hideError(element, inpElem) {
        if(!element.hasClass("hidden")) {
            element.addClass("hidden");
        }
        if(inpElem.hasClass("errorInput")) {
            inpElem.removeClass("errorInput");
        }
    }

    function showError(element, inpElem) {
        if(element.hasClass("hidden")) {
            element.removeClass("hidden");
        }
        if(!inpElem.hasClass("errorInput")) {
            inpElem.addClass("errorInput");
        }
    }


});