const body = document.querySelector("body");
const messageForm = document.querySelector(".reply");
const messageInput = document.querySelector(".reply__column:last-child > input");
function messageSubmitted(event){  
    event.preventDefault();
    const newTime = document.createElement("div")
    newTime.innerText = clock.innerText;
    newTime.style.width="400px";
    const newMessage = document.createElement("div");
    
    newMessage.style.height="40px";
    newMessage.style.display="inline-block";
    newMessage.innerText = messageInput.value;
    body.appendChild(newTime);
    newTime.append(newMessage);
    messageInput.value="";

}
messageForm.addEventListener("submit", messageSubmitted)