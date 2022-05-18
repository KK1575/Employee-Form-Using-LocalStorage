function Khushal() {

    let Gujarat = ['Ahmedabad','Surat','Vadodara','Rajkot','Gandhinagar']
    let Maharashtra = ['Mumbai','Pune','Aurangabad','Nagpur','Nashik']
    let Madhyapradesh = ['Bhopal','Jabalpur','Indore','Gwalior','Itarsi']
    let Rajasthan = ['Jaipur','Udaipur','Jodhpur','Kota','Ajmer']
    let Uttarpradesh = ['Lucknow','Allahabad','Meerut','Noida','Varanasi']

    var state = document.getElementById("state").value;
    var city = document.getElementById("city");

    if (state == "Gujarat") {
        document.getElementById('c1').innerHTML = "Ahmedabad";
        document.getElementById('c2').innerHTML = "Surat";
        document.getElementById('c3').innerHTML = "Vadodara";
        document.getElementById('c4').innerHTML = "Rajkot";
        document.getElementById('c5').innerHTML = "Gandhinagar";
    }
    else if (state == "Maharashtra") {
        document.getElementById('c1').innerHTML = "Mumbai";
        document.getElementById('c2').innerHTML = "Pune";
        document.getElementById('c3').innerHTML = "Aurangabad";
        document.getElementById('c4').innerHTML = "Nagpur";
        document.getElementById('c5').innerHTML = "Nashik";
    }
    else if (state == "Madhyapradesh") {
        document.getElementById('c1').innerHTML = "Bhopal";
        document.getElementById('c2').innerHTML = "Jabalpur";
        document.getElementById('c3').innerHTML = "Indore";
        document.getElementById('c4').innerHTML = "Gwalior";
        document.getElementById('c5').innerHTML = "Itarsi";
    }
    else if (state == "Rajasthan") {
        document.getElementById('c1').innerHTML = "Jaipur";
        document.getElementById('c2').innerHTML = "Udaipur";
        document.getElementById('c3').innerHTML = "Jodhpur";
        document.getElementById('c4').innerHTML = "Kota";
        document.getElementById('c5').innerHTML = "Ajmer";
    }
    else if (state == "Uttarpradesh") {
        document.getElementById('c1').innerHTML = "Lucknow";
        document.getElementById('c2').innerHTML = "Allahabad";
        document.getElementById('c3').innerHTML = "Meerut";
        document.getElementById('c4').innerHTML = "Noida";
        document.getElementById('c5').innerHTML = "Varanasi";
    }
	
}
function Khushall() {

    let Gujarat = ['Ahmedabad','Surat','Vadodara','Rajkot','Gandhinagar']
    let Maharashtra = ['Mumbai','Pune','Aurangabad','Nagpur','Nashik']
    let Madhyapradesh = ['Bhopal','Jabalpur','Indore','Gwalior','Itarsi']
    let Rajasthan = ['Jaipur','Udaipur','Jodhpur','Kota','Ajmer']
    let Uttarpradesh = ['Lucknow','Allahabad','Meerut','Noida','Varanasi']

    var state = document.getElementById("state2").value;
    var city = document.getElementById("city2");

    if (state == "Gujarat") {
        document.getElementById('c11').innerHTML = "Ahmedabad";
        document.getElementById('c21').innerHTML = "Surat";
        document.getElementById('c31').innerHTML = "Vadodara";
        document.getElementById('c41').innerHTML = "Rajkot";
        document.getElementById('c51').innerHTML = "Gandhinagar";
    }
    else if (state == "Maharashtra") {
        document.getElementById('c11').innerHTML = "Mumbai";
        document.getElementById('c21').innerHTML = "Pune";
        document.getElementById('c31').innerHTML = "Aurangabad";
        document.getElementById('c41').innerHTML = "Nagpur";
        document.getElementById('c51').innerHTML = "Nashik";
    }
    else if (state == "Madhyapradesh") {
        document.getElementById('c11').innerHTML = "Bhopal";
        document.getElementById('c21').innerHTML = "Jabalpur";
        document.getElementById('c31').innerHTML = "Indore";
        document.getElementById('c41').innerHTML = "Gwalior";
        document.getElementById('c51').innerHTML = "Itarsi";
    }
    else if (state == "Rajasthan") {
        document.getElementById('c11').innerHTML = "Jaipur";
        document.getElementById('c21').innerHTML = "Udaipur";
        document.getElementById('c31').innerHTML = "Jodhpur";
        document.getElementById('c41').innerHTML = "Kota";
        document.getElementById('c51').innerHTML = "Ajmer";
    }
    else if (state == "Uttarpradesh") {
        document.getElementById('c11').innerHTML = "Lucknow";
        document.getElementById('c21').innerHTML = "Allahabad";
        document.getElementById('c31').innerHTML = "Meerut";
        document.getElementById('c41').innerHTML = "Noida";
        document.getElementById('c51').innerHTML = "Varanasi";
    }
	
}

function KK() {

    // Name
var k=0;
    var name = document.getElementById("name").value;

    if (name == "") {
        document.getElementById("1").innerHTML = "<a href='#name'> Please Enter Name</a><br>";
        k=1;
    }
    else if (!name.match(/^[A-Za-z ]*$/)) {
        document.getElementById("1").innerHTML = "<a href='#name'>Please Enter Valid Name</a><br>";
        k=1;
    }
    else {
        document.getElementById("1").innerHTML ="";
    }

    // E-mail

    var email = document.getElementById('email').value;

    if (email == "") {
        document.getElementById("2").innerHTML = "<a href='#email'> Please Enter E-mail Id</a><br>";
         k=1;
    }
    else if (!email.match(/^([a-z0-9]+)@([a-z0-9]+).([a-z]+)$/)) {
        document.getElementById("2").innerHTML = "<a href='#email'> Please Enter Valid E-mail Id</a><br>";
         k=1;
    }
    else {
        document.getElementById("2").innerHTML = "";
    }

    // Mobile Number

    var mobile = document.getElementById('mobile').value;

    if (mobile == "") {
        document.getElementById("3").innerHTML = "<a href='#mobile'>Please Enter Mobile Number</a><br>";
        k=1;
    }
    else if (mobile.length < 10 || mobile.length > 10) {
        document.getElementById("3").innerHTML = " <a href='#mobile'>Please Enter Valid Mobile Number</a><br>";
         k=1;
    } 
    else if (!mobile.match(/^[0-9]*$/)) {
        document.getElementById("3").innerHTML = " <a href='#mobile'>Mobile Number must include numbers only</a><br>";
        k=1;
    }
    else {
        document.getElementById("3").innerHTML = "";
    }
	
	//Gender
	var gender = document.getElementById('gender').value;

    if(gender == " ") {

        document.getElementById("4").innerHTML = "<a href='#gender'>Please Select Gender</a><br>";
         k=1;
    }
    else {
        document.getElementById("4").innerHTML = "";
    }
	//
	var country = document.getElementById("country").value;
	if(country != "India")
	{
	document.getElementById("8").innerHTML = "<a href='#country'> Please Select Country</a><br>";
         k=1;
	}
	else
	{
	document.getElementById("8").innerHTML = "";
	}
	//
	var gender = document.getElementById("gender").value;
	if(gender == "")
	{
	document.getElementById("9").innerHTML = "<a href='#gender'> Please Select Gender</a><br>";
         k=1;
	}
	else
	{
	document.getElementById("9").innerHTML = "";
	}


    // State

    var state = document.getElementById("state").value;

    if (state == "1") {
        document.getElementById("5").innerHTML = "<a href='#state'> Please Select State</a><br>";
         k=1;
    }
    else {
        document.getElementById("5").innerHTML = "";
    }
	//
	

    // City

    var city = document.getElementById('city').value;

    if (city == "1") {
        document.getElementById("6").innerHTML = "<a href='#city'> Please Select City</a><br>";
        k=1;
    }
    else {
        document.getElementById("6").innerHTML = "";
    }

    // Empcode

    var emp = document.getElementById('emp').value;

    if (emp == "") {
        document.getElementById("7").innerHTML = "<a href='#emp'> Please Enter EmpCode</a><br>";
         k=1;
    }
    else if (!emp.match(/^[A-Z]{3}[0-9]{4}$/)) {
        document.getElementById("7").innerHTML = "<a href='#emp'> Please Enter Valid EmpCode</a><br>";
         k=1;
    }
    else {
        document.getElementById("7").innerHTML = "";
    }
	//
	var state=document.getElementById("state").value;
	if(state = ""){
	document.getElementById("10").innerHTML =" plase enter State";
	k=1;
	}
	else
	{
	document.getElementById("10").innerHTML ="";
	}
	if (k == 1) {
                return false;
            }
            else {
                document.getElementById("1").innerHTML = "";
            }
            k = 0;
	

    function save() {
    
        let name, email, mobile, country, state, city, empcode,gender;
    
        name = document.getElementById("name").value;
        email = document.getElementById("email").value;
        mobile = document.getElementById("mobile").value;
		gender=document.getElementById("gender").value;
        country = document.getElementById("country").value;
        state = document.getElementById("state").value;
        city = document.getElementById("city").value;
        empcode = document.getElementById("emp").value;
        //let state1 = state.options[state.selectedIndex].text;
        // var cname = city.options[city.selectedIndex].text;
        //let letter = /^[ a-zA-Z]+$/;
    
        //console.log(name.match(letter));

        if (name == "") {
            document.getElementById("1").innerHTML = "<a href='#name'> Please Enter Name</a>";
            return false;
        }
        else {
        let Userdata={
            "Name": name,
            "Email": email,
            "MobileNumber": mobile,
            "Country": "India",
			"Gender" : gender,
            "State": state,
            "City": city,
            "Empcode": empcode
        }
        //let userData = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : []
        //userData.push(sdata);
        localStorage.setItem(name, JSON.stringify(Userdata));
        alert("Data successfully stored...");
    }
    }
    save();   
}

function show() {

    let name = document.getElementById("name2").value;
    let email = document.getElementById("email2");
    let mobile = document.getElementById("mobile2");
	let gender=document.getElementById("gender2");
    let state = document.getElementById("state2");
    let city = document.getElementById("city2");
    let empcode = document.getElementById("emp2");
    let count = 0;
    
    if (name == "") {
        document.getElementById("1").innerHTML = "<a href='#name2'> Please Enter Name</a>";
    }

    else {
        document.getElementById("1").innerHTML = "";
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key == name) {
                let Userdata = localStorage.getItem(key);
                let data = JSON.parse(Userdata);
                email.value = data.Email;
                mobile.value = data.MobileNumber;
				gender.value =data.Gender;
                state.value = data.State;
                city[0].innerHTML = data.City;
                emp2.value = data.Empcode;
                count++;
            }
        } if (count < 1)
            alert("Information not found");
    }
    return false;
}
