var confirmation = document.getElementById("confirm");
var password = document.getElementById("password");
var btn = document.getElementById("btn");
btn.addEventListener("click", (event)=>{
    if(confirmation.value !== password.value){
        // alert("Passwords do not match");
        alertTo();
        event.preventDefault();
    }
    regularState();
});

function alertTo(){
    var additional = document.getElementsByClassName("addition1")[0];
    additional.textContent = "Passwords do not match";
    additional.style.color = "red";
}

function regularState(event){
    confirmation.addEventListener("mouseleave", ()=>{
        var additional = document.getElementsByClassName("addition1")[0];
        additional.textContent = "Take the leap with us!";
        additional.style.color = "#a7a899";
    });
}