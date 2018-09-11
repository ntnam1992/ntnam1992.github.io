var userID;
var pass;
var email;
var brDay; 

/**test input user*/
function testUser(){
	userID = document.getElementById("user").value;
	var long = userID.length;
	if (userID == ""){
		//alert("username không được để trống");
		return false;
	}else{
		for( var i = 0;i<long+1;i++)
		{
			if(userID.charCodeAt(i)>57 && userID.charCodeAt(i)<65 || userID.charCodeAt(i)>90 && userID.charCodeAt(i)<97 || userID.charCodeAt(i)>122 || userID.charCodeAt(i)<48 ){
				return false
			}
		}
		if(long > 30){
					//alert("user không quá 30 ký tự");
					return false;
				}else{
					//alert("user hợp lệ");
					return true;
				}
	}
	
}
/**test input pasword*/
function testPass(){
	pass = document.getElementById("pass").value;
	if (pass == ""){ 
		return false;
	}
	return true;
} 
/**test input brithday*/
function testBrDay(){
	brDay = document.getElementsByClassName("txt-date")[0].value;
	if (brDay == ""){
		//alert("Ngày sinh không được để trống");
		return false;
	}
	return true;
}
/**Test input email*/
function testEmail(){
	email = document.getElementById("mail").value;
	if (email == ""){
		//alert("Email không được để trống");
		return false;
	}else{
		var at = email.indexOf("@");
		 var dot = email.lastIndexOf(".");
		 var space = email.indexOf(" ");
		 
		 if ((at != -1) && //có ký tự @
		 (at != 0) && //ký tự @ không nằm ở vị trí đầu
		 (dot != -1) && //có ký tự .
		 (dot > at + 1) && (dot < email.length - 1) //phải có ký tự nằm giữa @ và . cuối cùng
		 &&
		 (space == -1)) //không có khoẳng trắng 
		 {
		 //alert("Email valid");
		 return true;
		 } else {
		 //alert("Email Invalid");
		 return false;
		 }
	}
}

/** Calender */
var table=document.getElementById("table1");
var d= new Date();
var month= d.getMonth();
var year=d.getFullYear();
var 
minyear = year - 50;
maxyear = year + 50;	
var fristday =new Date(year,month,1);
var today=d.getDate();
var selectDate =  today + "/" + (month + 1) + "/" + year;
//document.getElementsByClassName("txt-date")[0].value = selectDate;
	
/*Create table for celender*/
	function insertRow(){
		listmonth(month);
		listyear(year);	
		var rowIn= Math.floor((fristday.getDay() + countDay(month,year))/6);
		rowIn = rowIn*7;
		for(i=7;i<=rowIn;i+=7){
			var row= table.insertRow(i/7);				
			for (j = 0 ;j<7 ;j++){
				var cell = row.insertCell(j);
			}
		}
	}	

/*count days in month*/	
	function countDay(month,year){
		if(month==3||month==5||month==8||month==10){
			return 30;
		}
		else if(month==1){
				if(year%400==0|| year%100==0 && year%4==0){
					return 29;
				}
				else
					return 28;
		}
		else
			return 31;
		
	}
/*inset day in table*/
	function insert(month,year){
		day= countDay(month,year);
		var dem=1;
		for(i=1;i<7;i++)
		{	
			if (i == 1) {
				var tmp = fristday.getDay();
			} else {
				var tmp = 0;
			}
			for(j=tmp;j<7;j++){
				if(dem < day+1){
					table1.rows[i].cells[j].innerText = dem;
					if(dayCurrent(dem, month, year) == true) {
						table1.rows[i].cells[j].style.color = "#00ff00";
					}
					table1.rows[i].cells[j].addEventListener("click", function() {
						var selectDate =  this.innerHTML + "/" + (month + 1) + "/" + year;
						document.getElementsByClassName("txt-date")[0].value = selectDate;
						calandershow();
					})
					dem=dem+1;
				}
			}	
		}
	}

/* craete list year in selectbox*/	
	function listyear(thisYear){
		if(document.getElementById("year").childNodes.length > 0) {
			document.getElementById("year").innerHTML = '';
		}
		for(var i=year -50;i<=year +50;i++){
			var node = document.createElement("option");                 // Create a <option> node
			node.innerHTML = i;
			if(i == year) {
				node.selected = true;
			}
			document.getElementById("year").appendChild(node);
		}
	}
/* craete list month in selectbox*/	
	function listmonth(thisMonth){
		if(document.getElementById("month").childNodes.length > 0) {
			document.getElementById("month").innerHTML = '';
		}
		for(i=0;i<=11;i++){
			var node = document.createElement("option");             // Create a text node
			if(i == thisMonth) {
				node.selected = true;
			}
			node.innerHTML = i + 1;                            // Append the text to <option>
			document.getElementById("month").appendChild(node);
		}
	}
/* delete table */
	function deleteRow(){
		if(table1.rows.length >0){
			for(i=table1.rows.length-1;i>=1;i--){
				table1.deleteRow(i);
			}
		}
	}
	
	function updateCalender() {
		fristday =new Date(year,month,1); // update first day
		listmonth(month);
		listyear(year);
		deleteRow();
		insertRow();
		insert(month,year);	
		
		var selectDate =  1 + "/" + (month + 1) + "/" + year;
		document.getElementsByClassName("txt-date")[0].value = selectDate;
	}
	
/*event onclick for button pre-year*/
	function preYear() {
		if (year > minyear) {
			year = year - 1;
		} else {
			alert('nam khong ton tai');
		}
		updateCalender();
	}
	
		
/*event onclick for button pre-month*/
	function preMonth() {
		if (month == 0) {
			month = 11;
			year = year -1;
		} else {
			month = month - 1;	
		}
		updateCalender();
	}
	
/*event onclick for button next-year*/
	function nextYear() {
		if (year < maxyear) {
			year = year + 1;
		} else {
			alert('nam khong ton tai');
		}
		updateCalender();
	}
	
/*event onclick for button next-month*/
	function nextMonth() {
		if (month == 11) {
			month = 0;
			year = year + 1;
		} else {
			month = month + 1;	
		}
		updateCalender();
	}

/*event onchange for selectbox. select month and view this month on table celander*/
	function changeMonth() {
		month = document.getElementById("month").value - 1;
		updateCalender();
	}
/*event onchange for selectbox. select year and view this year on table celander*/
	function changeYear() {
		year = parseInt(document.getElementById("year").value);
		updateCalender();
	}
	
	function dayCurrent()
	{
		monthcurrent = document.getElementById("month").value - 1;
		yearcurrent = parseInt(document.getElementById("year").value);
		var rowIn= Math.floor((fristday.getDay() + countDay(month,year))/6);
		if(monthcurrent==month && yearcurrent==year){
			for(i = 1;i<=rowIn;i++){
				for(j=0;j<= today;j++){
					if(parseInt(document.getElementById("table1").rows[i].cells[j]) == today){
						table1.rows[i].cells[j].style.color="#FF6600";
					}
					
				}
			}
			
		}
	}
	function calandershow(){
		tmp= document.getElementsByClassName("show").length;
		if(tmp != 0){
			document.getElementById("table1").classList.remove("show");
			document.getElementById("table2").classList.remove("show")
		}else{
			document.getElementById("table1").classList.add("show");
			document.getElementById("table2").classList.add("show")
		}	
	}
	function dayCurrent(dayCheck, monthCheck, yearCheck)
	{
		var dayNow, monthNow, yearNow;
		dayNow = d.getDate();
		monthNow = d.getMonth();
		yearNow = d.getFullYear();
		if(dayCheck == dayNow && monthCheck == monthNow && yearCheck == yearNow) {
			return true;
		} else {
			return false;
		}
	}
	function resetForm() {
		var listSpanNote = document.getElementsByClassName('text-note');
		for(var i = 0; i < listSpanNote.length; i++) {
			listSpanNote[i].innerHTML = '';
		}
	}
	function testForm() {
		if(testUser() == true) {
			document.getElementsByClassName('mess-user')[0].innerHTML = "";
		} else{
			document.getElementsByClassName('mess-user')[0].innerHTML = "user Invalid";
		}
		if(testPass() == true) {
			document.getElementsByClassName('mess-pass')[0].innerHTML = "";
		} else{
			document.getElementsByClassName('mess-pass')[0].innerHTML = "password Invalid";
		}	
		if(testEmail() == true) {
			document.getElementsByClassName('mess-email')[0].innerHTML = "";
		} else{
			document.getElementsByClassName('mess-email')[0].innerHTML = "email Invalid";
		}	
		if(testBrDay() == true) {
			document.getElementsByClassName('mess-brith')[0].innerHTML = "";
		} else{
			document.getElementsByClassName('mess-brith')[0].innerHTML = "birth day InValid";
		}		
	}
	insertRow();
	insert(month,year);