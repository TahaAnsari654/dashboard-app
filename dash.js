var quill = new Quill('#editor', {
  theme: 'snow'
});


function submit(){
  var post = document.getElementById("post")
  post.innerHTML += quill.root.innerHTML;
  
  
}



function redirection (){
  window.location.href = "/index.html"
}

function logout(){
  localStorage.clear();
setTimeout(redirection(),2000)
}





  