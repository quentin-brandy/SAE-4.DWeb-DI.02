// changement de la visibilité par changement d'entité
AFRAME.registerComponent('sceneloading', {
    init: function() {
      let btn1 = document.querySelector('#tuto')
      let btn2 = document.querySelector('#level1')
      let btn3 = document.querySelector('#boutontuto')
      let scene1 = document.querySelector('#scene1');
      let scene2 = document.querySelector('#scene2');
      btn1.addEventListener('click', function() {
        scene1.setAttribute('visible' , true);
        scene2.setAttribute('visible' , false);
        document.querySelector("#menu").setAttribute('visible' , false);
      });
      btn2.addEventListener('click', function() {
        scene1.setAttribute('visible' , false);
        scene2.setAttribute('visible' , true);
        document.querySelector("#menu").setAttribute('visible' , false);
      });
      btn3.addEventListener('click', function() {
        scene1.setAttribute('visible' , false);
        scene2.setAttribute('visible' , true);
        document.querySelector("#menu").setAttribute('visible' , false);
      });
    }
  }); 
 
 
 //tuto position
    let positiontuto = {x:-0.64251 , y:0 , z:13.53574};
    
    AFRAME.registerComponent('tuto-position', {
      tick: (function () {
        let camera = document.querySelector("#cameraRig");
        var position = new THREE.Vector3();
        return function() {
         let tuto = document.querySelector('#level1');
        camera.object3D.getWorldPosition(position);
       
          tuto.addEventListener('click', function() {
            camera.setAttribute('position', positionscene1 );
            positiontuto = {x: position.x , y: 0 , z: position.z};
          });
        };
      })()
    });

// tuto bouton position
    AFRAME.registerComponent('bouton-position', {
      tick: (function () {
        let camera = document.querySelector("#cameraRig");
        var position = new THREE.Vector3();
        return function() {
         let tuto = document.querySelector('#boutontuto');
        camera.object3D.getWorldPosition(position);
       
          tuto.addEventListener('click', function() {
            camera.setAttribute('position', positionscene1 );
            positiontuto = {x: position.x , y: 0 , z: position.z};
          });
        };
      })()
    });

    // scène2 position
    
    let positionscene1 = {x:200 , y:0 , z:0};
    AFRAME.registerComponent('scene1-position', {
      tick: (function () {
        let camera = document.querySelector("#cameraRig");
        var position = new THREE.Vector3();
        return function() {
         let tuto = document.querySelector('#tuto');
        camera.object3D.getWorldPosition(position);
       
          tuto.addEventListener('click', function() {
            camera.setAttribute('position', positiontuto );
            positionscene1 = {x: position.x , y: 0 , z: position.z};
          });
        };
      })()
    });



//menu rotation
AFRAME.registerComponent('animation-rotation', {
  tick: (function () {
    let head = document.querySelector("#head");
    let right = document.querySelector("#right");
    var quaternion = new THREE.Quaternion();
    return function() {
      test = head.object3D.getWorldQuaternion(quaternion);
      let menu = document.querySelector("#menu");
      right.addEventListener('abuttondown', function() {
        menu.object3D.rotation.set(quaternion._x , quaternion._y , quaternion._z);
      });
    };
  })()
});

// menu position 
AFRAME.registerComponent('animation-position', {
  tick: (function () {
    let right = document.querySelector("#right");
    var position = new THREE.Vector3();
    return function() {
      test = right.object3D.getWorldPosition(position);
      let menu = document.querySelector("#menu");
      right.addEventListener('abuttondown', function() {
        menu.object3D.position.set(position.x , position.y , position.z);
      });
    };
  })()
});
// menu visibilité
AFRAME.registerComponent('animation-visible', {
    init: (function () {
      let right = document.querySelector("#right");
        let menu = document.querySelector("#menu");
        right.addEventListener('abuttondown', function() {
          var isVisible = menu.getAttribute('visible');
          if (isVisible) {
            menu.setAttribute('visible', false);
          } else {
            menu.setAttribute('visible', true);
          }
        });
     
    })
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

