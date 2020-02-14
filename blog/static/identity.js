function init() {
    var userName = localStorage.getItem('frname');
    var userBranch = localStorage.getItem('Branch');
    var userRollNo = localStorage.getItem('RollNo');
    var userYear = localStorage.getItem('Year');

    if ((userName != null)&&(userBranch != null)&&(userRollNo != null)&&(userYear != null)) {
        document.getElementById("uname").innerText = userName;
        document.getElementById("ubranch").innerText = userBranch;
        document.getElementById("uroll").innerText = userRollNo;
        document.getElementById("uyear").innerText = userYear;
        document.getElementById("get-details").style.display = "block";
    }
    else document.getElementById("input-details").style.display = "block";
}

function formsubmit() {
    //Get variable names for each form element
    var frname = document.getElementById("fname").value;
    var Branch = document.getElementById("branch").value;
    var RollNo = document.getElementById("rollNo").value;
    var Year = document.getElementById("year").value;
    //Save into localStorage
    localStorage.setItem('frname', frname);
    localStorage.setItem('Branch', Branch);
    localStorage.setItem('RollNo', RollNo);
    localStorage.setItem('Year', Year);
    //Call the next function to change the display
    overlay();
}

function overlay() {
    //Hide Form
    document.getElementById("input-details").style.display = 'none';
    //Enter Details
    document.getElementById("uname").innerText = localStorage.getItem('frname');
    document.getElementById("ubranch").innerText = localStorage.getItem('Branch');
    document.getElementById("uroll").innerText = localStorage.getItem('RollNo');
    document.getElementById("uyear").innerText = localStorage.getItem('Year');
    //Show Details
    document.getElementById("get-details").style.display = 'block';
}
