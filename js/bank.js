document.getElementById('login-submit').addEventListener('click', function(){
  const emailField =  document.getElementById('user-email')
  const userEmail = emailField.value
  const passwordField =  document.getElementById('user-password')
  const userPassword = passwordField.value

  if(userEmail == 'afridi@gmail.com' && userPassword == 'asd'){
      window.location.href = "https://www.facebook.com/"
  }

})