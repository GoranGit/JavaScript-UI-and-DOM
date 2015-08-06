function createCalendar(selector, events) {
    var element = document.querySelector(selector);
    if (!element) {
        throw Error();
    }
    var div = document.createElement("div");

    var span = document.createElement("span");

    var content = document.createElement('p');

    var dFrag = document.createDocumentFragment();

    div.style.width = "150px";
    div.style.height = "150px";
    div.style.float = "left";
    div.style.border = "solid black 1px";
    div.setAttribute('id', '0');

    span.style.display = 'inline-block';
    span.style.borderBottom = 'solid black 1px;';
    span.style.textAlign = 'center';
    span.style.backgroundColor = 'gray';
    span.style.width = "150px";


    div.appendChild(span);
    div.appendChild(content);

    var days = ['Sun', 'Mon', 'Tus', 'Wed', 'Tur', 'Fri', 'Sut'];
    var month = 'June';

    for (var i = 0; i < 30; i += 1) {
        var clonedDiv = div.cloneNode(true);
        clonedDiv.setAttribute('id', (i + 1).toString());
        var spn = clonedDiv.querySelector('span');
        spn.innerText = days[i % 7].toString() + ' ' + (i + 1) + ' ' + month + ' ' + 2014;
        dFrag.appendChild(clonedDiv);
        if (i % 7 === 0) {
            clonedDiv.style.clear = 'left';
        }
    }

    events.forEach(function (item) {
        var selectedDiv = dFrag.querySelector('div[id="' + item.date + '"]');
        debugger;
        var contentt = selectedDiv.querySelector('p');
        contentt.innerHTML = item.hour + ' ' + item.duration + ' ' + item.title;
    });
    element.appendChild(dFrag);

    var currentDivOver = element.querySelector('div');

    element.addEventListener('mouseover', function (ev) {

        var target = ev.target;
        if (target instanceof HTMLDivElement) {
            console.log("tuka");

            var prevP = currentDivOver.querySelector('p');

            prevP.style.backgroundColor = 'white';
            console.log(prevP);
            var paragraph = target.querySelector('p');
            paragraph.style.backgroundColor = 'red';
            currentDivOver = target;
        }
    }, false);

    element.addEventListener('mousedown', function (ev) {
        var target = ev.target;
        if (target instanceof HTMLDivElement) {
            console.log("tukaaaaaaaaaaa");
            if (target.style.backgroundColor === 'blue') {
                target.style.backgroundColor = 'white';
            } else {
                target.style.backgroundColor = 'blue'
            }
        }
    }, false);

}