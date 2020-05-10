var body = document.body;

//All elements
var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var ariEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

//Placing li elements in a variable
var listItems = document.getElementsByTagName("li");

//Text elements of each variable
h1El.textContent = "Welcome to my page";
h2El.textContent = "These are my favorite things!";
ariEl.textContent = "This is my Pup";
nameEl.textContent = "His name is Ari";
favoriteEl.textContent = "My favorite foods are:";
li1.textContent = "Lasagna";
li2.textContent = "Pizza";
li3.textContent = "Anything Mexican";
li4.textContent = "Sushi";

//Append elements
body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(ariEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

// Style all of our elements
h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
h2El.setAttribute("style", "margin:auto; width:100%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "https://scontent.fbkl1-1.fna.fbcdn.net/v/t1.0-9/49288364_10156643826204927_6917847967617515520_o.jpg?_nc_cat=104&_nc_sid=dd7718&_nc_ohc=9d4BL93foXAAX9_w8_Q&_nc_ht=scontent.fbkl1-1.fna&oh=8cc7a003c20668c6f1bcf51948318c79&oe=5E952CF8");
imgEl.setAttribute("height", 400);
imgEl.setAttribute("width", 400);
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
ariEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");
listEl.setAttribute("style", "background:#333333; padding:20px;");
listItems[0].setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");
listItems[1].setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
listItems[2].setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
listItems[3].setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");