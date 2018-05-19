var eventsData;
var request = new XMLHttpRequest();
var matches = document.getElementsByTagName('html');
var numRegex = /(?<![0-9])[0-9]{2}(?![0-9])/;
var numsArr = [];

loadData();

function loadData() {
    request.open('GET', 'json/events.json');
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt) {
    eventsData = JSON.parse(request.responseText);
    console.log(eventsData);
    for (var k = 0; k < eventsData.eventsList.length; k++) {
        numsArr.push(eventsData.eventsList[k].eventDate.match(numRegex));

    }
    var s = "";
    console.log("NUMS: " + numsArr);


    initDiv = document.createElement("h1");
    initDiv.innerHTML = "Upcoming Events";
    document.body.appendChild(initDiv);

    for (var i = 1; i < eventsData.eventsList.length; i++) {
        newDiv = document.createElement("div");
        newDiv.id = "div" + i.toString();
        newDiv.style.width = "400px";
        newDiv.style.height = "100px";
        newDiv.innerHTML = eventsData.eventsList[i - 1].eventDate + "\t" + eventsData.eventsList[i - 1].eventTime + "\t" + eventsData.eventsList[i - 1].eventLocation + "<br/>" + eventsData.eventsList[i - 1].eventDescription + "<br/>";
        document.body.appendChild(newDiv);
    }

    console.log("matches: " + matches.innerHTML);
    for (var l = 0; l < matches.length; l++) {
        s = matches[l].innerHTML;
        console.log(l);
        console.log("Matches: " + matches[l].innerHTML);
        // if (matches[l].innerHTML.match(numsArr[l])) {
        //   matches[l].style.color = "red";
        // }
    }


}