function showGreetingMessage(){
    let name = window.prompt("What is your name");
    window.alert("Hello ".concat(name))

};

// showGreetingMessage()
document.querySelector("#btn").addEventListener("click", showGreetingMessage);