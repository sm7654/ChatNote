var UserName = "Anonymous";
function bars_clicked(){ 
    document.getElementById("you_account_settings").innerHTML = UserName;
    var x = document.getElementById("settings_wraper");

    var bar1 = document.getElementById("bar1");
    var bar2 = document.getElementById("bar2");
    var bar3 = document.getElementById("bar3");
    if (x.style.width === "0px") {
        x.style.width = "270px";
        bar1.style.rotate = "-45deg"; bar1.style.position = "absolute";
        bar2.style.opacity ="0";
        bar3.style.position = "absolute"; bar3.style.rotate = "45deg";
    } else {
        bar1.style.rotate = "0deg"; bar1.style.position = "relative";
        bar2.style.opacity ="1"; 
        bar3.style.position = "relative"; bar3.style.rotate = "0deg";
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
    var messageType1 = `<div class="messege_conteiner"><div class="message_box"><p style="color: #edededed; font-size: 12px; text-align: end;">${UserName}</p><p>${inputvalue}</p><span style="font-size: 11px; color: #edededed;">${time}</span></div><img src="./images/user (1).png" alt="" class="avatar_user"></div>`;
    var messgeType2 = `<div class="messege_conteiner"><div class="message_box"><div style="display: flex; align-items: center; gap: 7px; width: 100%; justify-content: space-between;"><p style="color: #edededed; font-size: 12px;">${UserName}</p><span style="font-size: 10px; color: #edededed;">${time}</span></div><p>${inputvalue}</p></div><img src="./images/user (1).png" alt="" class="avatar_user"></div>`;
    if (inputvalue !== '') {
        chat_wraper.insertAdjacentHTML('beforeend', messageType1);
        document.getElementById("input").value = '';
    } else {
        return;
    }
    chat_wraper.scrollTop = chat_wraper.scrollHeight;
    console.log();(scrollHeight)
}
function dark_theme(){ 
    var logo = document.getElementById("logo");
    var input = document.getElementById("input");
    var header = document.getElementById("header");
    var bars = document.getElementsByClassName("bars");
    var background = document.getElementsByClassName("background");
    var setting = document.getElementsByClassName("settings_wraper");
    var account_buttons = document.getElementsByClassName("account");
    var text_settings = document.getElementsByClassName("setting_text");
    var icons_settings = document.getElementsByClassName("icon_settings");
    var input_wraper = document.getElementsByClassName("input_send_wraper");
    header.style.background = "black"; 
    header.style.borderBottom = "1px solid black";
    logo.src = "./images/logo-white.png";
    for (let i = 0; i < 3; i++) {
        bars[i].style.background = "white";
    }
    for (let i = 0; i < 2; i++) {
        account_buttons[i].style.background = "#1B1B1B";
        account_buttons[i].style.border = "none";
    }
    input_wraper[0].style.background = "#0C0404";
    input.style.background = "#1B1B1B";
    input.style.color = "white";
    background[0].style.background = "url(./images/background.jpg)";
    background[0].style.backgroundSize = "cover";
    setting[0].style.background = "black";
    for (let i = 0; i < 3; i++) {
        icons_settings[i].style.fill = "white";
        text_settings[i].style.color = "white";
        document.getElementsByClassName("heading_color_theme")[0].style.color = "white";
        document.getElementsByClassName("heading_color_theme")[0].style.borderBottom = "1px solid #253529";
    }
}
function light_theme(){ 
    var logo = document.getElementById("logo");
    var input = document.getElementById("input");
    var header = document.getElementById("header");
    var bars = document.getElementsByClassName("bars");
    var background = document.getElementsByClassName("background");
    var setting = document.getElementsByClassName("settings_wraper");
    var account_buttons = document.getElementsByClassName("account");
    var text_settings = document.getElementsByClassName("setting_text");
    var icons_settings = document.getElementsByClassName("icon_settings");
    var input_wraper = document.getElementsByClassName("input_send_wraper");
    header.style.background = "white"; 
    header.style.borderBottom = "1px solid #ededed";
    logo.src = "./images/logo-black-removebg-preview.png";
    for (let i = 0; i < 3; i++) {
        bars[i].style.background = "black";
    }
    for (let i = 0; i < 2; i++) {
        account_buttons[i].style.background = "black";
        account_buttons[i].style.border = "1px solid black";
    }
    input_wraper[0].style.background = "#ededed";
    input.style.background = "white";
    input.style.color = "black";
    background[0].style.background = "url(./images/cool-background3.png)";
    background[0].style.backgroundSize = "cover";
    setting[0].style.background = "white";
    for (let i = 0; i < 3; i++) {
        icons_settings[i].style.fill = "black";
        text_settings[i].style.color = "black";
        document.getElementsByClassName("heading_color_theme")[0].style.color = "black";
        document.getElementsByClassName("heading_color_theme")[0].style.borderBottom = "1px solid #ededed";
    }
}

