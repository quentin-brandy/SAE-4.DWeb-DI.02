  //tuto position menu tuto
    let positiontuto = {x:-0.64251 , y:1.7 , z:13.53574};
    
    AFRAME.registerComponent('tuto-position', {
      tick: (function () {
        let camera = document.querySelector("#head");
        var position = new THREE.Vector3();
        return function() {
         let tuto = document.querySelector('#level1');
        camera.object3D.getWorldPosition(position);
       
          tuto.addEventListener('click', function() {
            camera.setAttribute('position', positionscene1 );
            positiontuto = {x: position.x , y: 1.7 , z: position.z};
          });
        };
      })()
    });

    //tuto position menu level1
    AFRAME.registerComponent('tuto-positionlvl1', {
      tick: (function () {
        let camera = document.querySelector("#head");
        var position = new THREE.Vector3();
        return function() {
         let tuto = document.querySelector('#level12');
        camera.object3D.getWorldPosition(position);
          tuto.addEventListener('click', function() {
            camera.setAttribute('animation', {
              property: 'position',
              to: positionscene1
            });
            positiontuto = {x: position.x , y: 1.7 , z: position.z};
          });
        };
      })()
    });
    
    // scène2 position menu tuto
    
    let positionscene1 = {x:200 , y:1.7 , z:0};
    AFRAME.registerComponent('scene1-position', {
      tick: (function () {
        let camera = document.querySelector("#head");
        var position = new THREE.Vector3();
        return function() {
         let tuto = document.querySelector('#tuto');
        camera.object3D.getWorldPosition(position);
       
          tuto.addEventListener('click', function() {
            camera.setAttribute('position', positiontuto );
            positionscene1 = {x: position.x , y: 1.7 , z: position.z};
          });
        };
      })()
    });

     // scène2 position menu scène 2
     AFRAME.registerComponent('scene1-positionlvl1', {
      tick: (function () {
        let camera = document.querySelector("#head");
        var position = new THREE.Vector3();
        return function() {
         let tuto = document.querySelector('#tutolvl1');
        camera.object3D.getWorldPosition(position);
       
          tuto.addEventListener('click', function() {
            camera.setAttribute('position', positiontuto );
            positionscene1 = {x: position.x , y: 1.7 , z: position.z};
          });
        };
      })()
    });

  AFRAME.registerComponent('animation-obj', {
    init: function () {
      var el = this.el;
      var initialPosition = el.getAttribute('position');
      console.log(initialPosition);

      el.addEventListener('click', function() {
        el.setAttribute('animation__position', {
          property: "position",
          to: {x: initialPosition.x, y: initialPosition.y + 1, z: initialPosition.z},
          dur: 2000,
        });
      });
    }
  });

