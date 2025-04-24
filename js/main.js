var name1=document.getElementById('name')
var signUPEmail=document.getElementById('email1')
var signUPPassword=document.getElementById('password1')
var signInEmail=document.getElementById('Email11')
var signInPassword=document.getElementById('Password11')
var list=[]
if(JSON.parse(localStorage.getItem('list'))!=null)
{
    list=JSON.parse(localStorage.getItem('list'))
    
}
var xemail=''
var xname=''

var obj1;
var x11=document.querySelector('.alert1')
let xx1=document.querySelector('#home .sec1')

// var x2=document.getElementById('section1')
// console.log(x2.innerHTML)
function save(){

}
function signUP(){
    
        var regex1=/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
          xemail=regex1.test(signUPEmail.value)
        var regex2=/^[a-z0-9_-]{3,15}$/
         xname=regex2.test(name1.value)
        if(!xemail){
           x11.innerHTML='Invalid Email'
           x11.classList.remove('d-none')
           x11.classList.replace('text-success','text-danger')
        }
        if(!xname){
           x11.innerHTML='Invalid Name'
           x11.classList.remove('d-none')
           x11.classList.replace('text-success','text-danger')
        }
        if(xname&&xemail)
         {      let Found=false
                for(let i=0;i<list.length;i++)
                {
                    if(list[i].Email1===signUPEmail.value){
                        Found=true
                    }
                    
                }
                if(Found){
                    x11.innerHTML='email already exists'
                    x11.classList.remove('d-none')
                    x11.classList.replace('text-success','text-danger')
                }
                else{
                    x11.classList.replace('text-danger','text-success')
                x11.innerHTML='Success'
                obj1={
                    name:name1.value,
                    Email1:signUPEmail.value,
                    Password1:signUPPassword.value,
                }
                list.push(obj1)
                localStorage.setItem('list',JSON.stringify(list))
                console.log(list)
                }

         }
         
         return (xname&&xemail)
        
}
function signIn(){
    let Found1=false
    let x12=''
    
    
                for(let i=0;i<list.length;i++)
                {
                    if(list[i].Email1===signInEmail.value && list[i].Password1===signInPassword.value){
                        Found1=true
                        x12=i
                    }
                    
                }
                if(Found1){
                    x11.classList.add('d-none')
                    // x2.classList.add('d-flex','justify-content-center','align-items-center')
                    localStorage.setItem('currentUser', list[x12].name);
                    
                    window.location.href='Home.html'
                }
                else{
                    x11.classList.replace('text-success','text-danger')
                    x11.innerHTML='incorrect email or password'
                    x11.classList.remove('d-none')
                
                }
}
window.onload = function () {
    let userName = localStorage.getItem('currentUser');
    let welcomeMsg = document.getElementById('welcomeMsg');
    
    if (userName) {
        welcomeMsg.innerHTML = `Welcome ${userName}`;
        welcomeMsg.style.cssText=`color: #17A2B8;`
    }
}
function Logout(){
    localStorage.removeItem('currentUser')
}
