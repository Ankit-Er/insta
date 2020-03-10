<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">

	<title>Registration</title>

	<style>
		#box{
				background:#497f98;
			    margin: 50px auto;
			    width: 40%;		
			    text-align: center;
			    border-radius:10px;
		}
		
		#formTitle{
			    color: #fff;
			    font-weight: bold;
			    font-size: 20pt;
			    background:#00adff91;
			    padding: 6px;
			    border-radius:10px;
		}
		.inputBox{
			border-radius: 2px;
		    border: none;
		    width: 45%;
		    height: 25px;
		}
	</style>
	
</head>
<body>
	
	<div id="box">
			<div style="font-family:sans-serif" id="formTitle">Registration Form</div><br/>
		<form action="btnRegisterClick" method="post">
			<input type="text" name="user_name" class="inputBox"
				placeholder=" please enter name..."> <br /> <br />
				
			<input type="email" name="user_email" class="inputBox"
				placeholder=" please enter email..."><br /> <br />
				
			<input type="password" name="user_password" class="inputBox"
				placeholder=" please enter password..."><br /> <br />
		
			<input type="submit" value="Register Now" class="inputBox"> <br /> <br />
		</form>
	</div>
	
</body>
</html>