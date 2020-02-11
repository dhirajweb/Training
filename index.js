function valid()

{

	var email = document.getElementById("em").value;
	var pass = document.getElementById("pass").value;
	var con_pass = document.getElementById("confirm_pass").value;
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var zip = document.getElementById("zip").value;
	var mail_reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

			if(email=="")
			{
				alert("Email is required");
				document.form1.email.focus();
			}

			else if(!email.match(mail_reg))
			{
				alert("Please enter a valid email");
			}

			else if(pass=="")
			{
				alert("Password is required");
				document.getElementById("pass").focus();
			}

			else if(con_pass=="")
			{
				alert("Confirm password is required");
				document.getElementById("confirm_pass").focus();
			}

			else if(pass!=con_pass)
			{
				alert("Passwords don't match");
			}

			else if(fname=="")
			{
				alert("First Name is required");
				document.getElementById("fname").focus();
			}

			else if(lname=="")
			{
				alert("Last Name is required");
				document.getElementById("lname").focus();
			}	
}	

			

