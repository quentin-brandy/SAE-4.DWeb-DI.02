  function attachClickEventToClones(clones) {
    clones.forEach(clone => {
        clone.addEventListener('click', function () {
            compteur.incrCompteur();
            var textContainer = document.querySelector("#progression");
            var textContainer2 = document.querySelector("#progression2");
            textContainer.setAttribute('text', {
                value: 'Score :' + compteur.getCompteur() + " /" + compteur.getNombreObj(),
                align: 'center',
                color: '#ffffff'
            })
            textContainer2.setAttribute('text', {
              value: 'Score :' + compteur.getCompteur() + " /" + compteur.getNombreObj(),
              align: 'center',
              color: '#ffffff'
          })
            if (compteur.getCompteur()== compteur.getNombreObj()) {
              document.querySelector("#head").setAttribute('position', {x:-200, y:0,z:0} );
              document.querySelector("#scene-endGame").setAttribute("visible", true);
              // document.querySelectorAll(".endGame").forEach(feu => {
              //   feu.setAttribute("visible", true);
                
              // })
            }
        });
    });
}




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