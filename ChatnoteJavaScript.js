function bars_clicked(){ 
    var UserName = "anonymous";
    document.getElementById("you_account_settings").innerHTML = UserName;
    var x = document.getElementById("settings_wraper");

    var bars = document.getElementById("heello");
    var bar1 = document.getElementById("bar1");
    var bar2 = document.getElementById("bar2");
    var bar3 = document.getElementById("bar3");
    if (x.style.width === "0px") {
        x.style.width = "270px";
        bars.style.display = "block";
        bar1.style.rotate = "-45deg";
        bar1.style.position = "absolute";
        bar2.style.opacity ="0";
        bar3.style.position = "absolute";
        bar3.style.rotate = "45deg";
    } else {
        bars.style.display = "none";
        bar1.style.rotate = "0deg";
        bar1.style.position = "relative";
        bar2.style.opacity ="1";
        bar3.style.position = "relative";
        bar3.style.rotate = "0deg";
        x.style.width = "0px";
    }
}
document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      send();
    }
  });

function send() {
    var chat_wraper = document.getElementById("chat_wraper");
    var inputvalue = document.getElementById("input").value;
    
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes().toString().padStart(2, "0");
    var time = hours + ":" + minutes;
    var message = `<div class="messege_conteiner"><div class="message_box"><p style="color: #edededed; font-size: 12px;">Anonymous</p><p>${inputvalue}</p><span style="font-size: 11px; color: #edededed;">${time}</span></div><img src="./images/user (1).png" alt="" class="avatar_user"></div>`;
    if (inputvalue !== '') {
        chat_wraper.insertAdjacentHTML('beforeend', message);
        document.getElementById("input").value = '';
    } else {
        return;
    }
    chat_wraper.scrollTop = chat_wraper.scrollHeight;
    console.log();(scrollHeight)
}
function theme_color() {
    var UserName = "anonymous";
    document.getElementById("you_account_settings").innerHTML = UserName;
    var x = document.getElementById("settings_wraper");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}