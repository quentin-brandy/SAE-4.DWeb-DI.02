// import compteur from "../Model/model.js"

function getPlace() {
    for (let i = emplacement.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [emplacement[i], emplacement[j]] = [emplacement[j], emplacement[i]];
    }
    return emplacement.pop();
}


for (let i = 0; i < compteur.getNombreObj(); i++) {
    let pileFace = Math.random() * 2;
    let obj;
    if (pileFace > 1) {
        obj = document.querySelector("#trash_1").cloneNode(true);
    } else {
        obj = document.querySelector("#trash_2").cloneNode(true);
    }
    let place = getPlace();
    obj.setAttribute("position", { x: place.x, y: place.y, z: place.z });
    console.log(obj, place);
    document.querySelector("#scene2").appendChild(obj);
    attachClickEventToClones([obj]);
}