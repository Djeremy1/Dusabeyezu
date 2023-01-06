function sendEmail(){
    Email.send({
        host : "smtp.gmail.com",
        Username : "JeremyDusabeyezu1@gmail.com",
        Passsword : "",
        To : 'mugabojeremy2@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact From Enquiry",
        Body : "Name: " + document.getElementById("Name").value
             + "<br> Email: " + document.getElementById("email").value
             + "<br> Phone: " + document.getElementById("Phone").value
             + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("messsage sent successfuly")
    );
}




const upermenu = document.querySelector('.upermenu');
const openmenu = document.querySelector('.openmenu');
const closemenu = document.querySelector('.closemenu');


openmenu.addEventListener('click',show);
closemenu.addEventListener('click',close);

function show(){
    upermenu.getElementsByClassName.display = 'flex';
    upermenu.style.top = '0';
}

function close(){
    upermenu.style.top = '-100%';
}