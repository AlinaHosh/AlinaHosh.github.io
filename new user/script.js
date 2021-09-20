function validate(){
	var name=document.form.name.value;
    var surname=document.form.surname.value;
	var login=document.form.login.value;
	var password1=document.form.password1.value;
	var password2=document.form.password2.value;
    var email =document.form.email.value;
if (name==0 || surname==0 ||login==0 || password1==0 || password2==0 ||email==0){
	alert("FILL IN ALL EMPTY FIELDS");
}
}

	
