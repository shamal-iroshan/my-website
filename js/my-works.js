var pos = 1;

function goBack() {
    if(pos != 1) {
        pos--;
        let tit = pos;
        document.getElementById("image").src = 'img/work-area/work' + pos + '.jpg';
        document.getElementById("project-name").innerText=projectName[tit-1];
    }
}

function goForward() {
    if(pos < projectName.length) {
        pos++;
        let tit = pos;
        document.getElementById("image").src = 'img/work-area/work' + pos + '.jpg';
        document.getElementById("project-name").innerText=projectName[tit-1];
    }
}

