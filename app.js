

function sign(){
    
    var name = document.getElementById("name")
    var number = document.getElementById("number")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var cpassword = document.getElementById("cpassword")


    if(name.value === ""){

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'kindly please enter your name',
        
      })
    }
    else if(number.value === "" ){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'kindly please enter your number',   
      })
    }
    else if(email.value === "" ){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'kindly please enter your email',   
      })
    }
    else if(password.value === "" ){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'kindly please enter your password',   
      })
    }
    else if( password.value !== cpassword.value ){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'kindly please enter your same password',   
      })
    } else{
      Swal.fire({
        icon: 'success',
        title: `${name.value} succesfully your account`,
        showConfirmButton: false,
        timer: 1500
      })

       var userData = {
            name : name.value,
            number : number.value,
            email : email.value,
            password : password.value,
            cpassword : cpassword.value, 
        
           }
        
           localStorage.setItem("userData" , JSON.stringify(userData));

           setTimeout(() =>{
            window.location.href = "login.html"

           },2000)



          }

     
    
    

//    userData = {
//     name : name.value,
//     number : number.value,
//     email : email.value,
//     password : password.value,
//     cpassword : cpassword.value, 

//    }

//    localStorage.setItem("userData" , JSON.stringify(userData));
//    var getUserData = JSON.parse (localStorage.getItem("userData"))
//   console.log(getUserData)

}



// function getdata(){
//   var getUserData = document.querySelector("#getdata");
//   var getUserDataLocal = JSON.parse (localStorage.getItem("userData"))
//   getUserData.innerHTML = `
  
// <ul> 
//   <li>Name  : ${getUserDataLocal.name}</li>
//   <li>Email : ${getUserDataLocal.email}</li>
//   <li>phone  : ${getUserDataLocal.number}</li>

// </ul>


//   `


// }
    


function login(){
  var email = document.getElementById("email")
  var password = document.getElementById("password")

  var loginData = JSON.parse (localStorage.getItem("userData"))

  if(!loginData){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'user not found',   
    })
    setTimeout(() =>{
      window.location.href = "./index.html"
  
     },1500)

  }
  

  if(loginData.email !== email.value ){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'kindly please enter your Invalid Email',   
    })
  }
  else if(loginData.password !== password.value ){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'kindly please enter your Invalild Password',   
    })
  } else{

    Swal.fire({
      icon: 'success',
      title: `${loginData.name} succesfully login your account`,
      showConfirmButton: false,
      timer: 1500

  })
  setTimeout(() =>{
    window.location.href = "./dashboard.html"

   },2000)
}
}















