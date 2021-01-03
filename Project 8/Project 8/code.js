var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e7d3ef24-8fdb-46aa-bf1d-e1b2ddbdda8d","e97e01dc-aaca-446a-a7c3-32b44ba619d6","f299f948-c5fa-4c92-8779-11b9b0559dd0","662fe080-a3d5-4f8c-9a09-2b72a603f3f1","42590a67-f21e-4d19-9b79-ba8c6eb17660","507268aa-a54f-48e3-baec-9cf176174ff0","24369b84-6dc5-4742-af06-b00bf9716efe","d832691b-57e7-41f2-9dfb-8b391921707f","f67c06ec-6eab-4cbf-9d2b-0a9d4167c631","d6454b86-9ed2-4fc9-aef1-50ba7b045fb9"],"propsByKey":{"e7d3ef24-8fdb-46aa-bf1d-e1b2ddbdda8d":{"name":"spider.png_1","sourceUrl":"assets/v3/animations/jlnj140JuMAdCAyyoyGvKaws_MwPqen-zzpsT35IQa4/e7d3ef24-8fdb-46aa-bf1d-e1b2ddbdda8d.png","frameSize":{"x":496,"y":280},"frameCount":1,"looping":true,"frameDelay":4,"version":"VDetxWnKEQEvTPTChqWUD.Hs3qPmBe5C","loadedFromSource":true,"saved":true,"sourceSize":{"x":496,"y":280},"rootRelativePath":"assets/v3/animations/jlnj140JuMAdCAyyoyGvKaws_MwPqen-zzpsT35IQa4/e7d3ef24-8fdb-46aa-bf1d-e1b2ddbdda8d.png"},"e97e01dc-aaca-446a-a7c3-32b44ba619d6":{"name":"crab_1","sourceUrl":null,"frameSize":{"x":288,"y":191},"frameCount":7,"looping":true,"frameDelay":12,"version":"QjPzm3D6CMmgOPAzIEfSvmlKe9_WqUOy","loadedFromSource":true,"saved":true,"sourceSize":{"x":576,"y":764},"rootRelativePath":"assets/e97e01dc-aaca-446a-a7c3-32b44ba619d6.png"},"f299f948-c5fa-4c92-8779-11b9b0559dd0":{"name":"rain.png_1","sourceUrl":"assets/v3/animations/jlnj140JuMAdCAyyoyGvKaws_MwPqen-zzpsT35IQa4/f299f948-c5fa-4c92-8779-11b9b0559dd0.png","frameSize":{"x":920,"y":454},"frameCount":1,"looping":true,"frameDelay":4,"version":"yZagzrNTfmS2zwOE23Y5ZTrNIJYg57sB","loadedFromSource":true,"saved":true,"sourceSize":{"x":920,"y":454},"rootRelativePath":"assets/v3/animations/jlnj140JuMAdCAyyoyGvKaws_MwPqen-zzpsT35IQa4/f299f948-c5fa-4c92-8779-11b9b0559dd0.png"},"662fe080-a3d5-4f8c-9a09-2b72a603f3f1":{"name":"player","sourceUrl":"assets/api/v1/animation-library/gamelab/FW8VwzdEyxYf2EGLtcOBDFBpG_3jC91./category_vehicles/playerShip2_blue.png","frameSize":{"x":112,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"FW8VwzdEyxYf2EGLtcOBDFBpG_3jC91.","loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":75},"rootRelativePath":"assets/api/v1/animation-library/gamelab/FW8VwzdEyxYf2EGLtcOBDFBpG_3jC91./category_vehicles/playerShip2_blue.png"},"42590a67-f21e-4d19-9b79-ba8c6eb17660":{"name":"space","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":4,"looping":true,"frameDelay":12,"version":"g1O4PbFWS1UysZvL.X0xIr0ISqDr3uSz","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/42590a67-f21e-4d19-9b79-ba8c6eb17660.png"},"507268aa-a54f-48e3-baec-9cf176174ff0":{"name":"rock1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"0LJKw0saGs.D2J1bhw_bjr_5qLxnXe.R","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/507268aa-a54f-48e3-baec-9cf176174ff0.png"},"24369b84-6dc5-4742-af06-b00bf9716efe":{"name":"rock2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"8VTjOUei3Dk2i9p8ar8t2NM0gkVKOIs0","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/24369b84-6dc5-4742-af06-b00bf9716efe.png"},"d832691b-57e7-41f2-9dfb-8b391921707f":{"name":"rock3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"GkxVZijYn3CkSiP8zaIHbQ3X3DqywP74","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/d832691b-57e7-41f2-9dfb-8b391921707f.png"},"f67c06ec-6eab-4cbf-9d2b-0a9d4167c631":{"name":"start","sourceUrl":null,"frameSize":{"x":108,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"RaDccv357Shn_U7rqpcJQ.tgEZbbbfYx","loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":48},"rootRelativePath":"assets/f67c06ec-6eab-4cbf-9d2b-0a9d4167c631.png"},"d6454b86-9ed2-4fc9-aef1-50ba7b045fb9":{"name":"cave_1","sourceUrl":"assets/api/v1/animation-library/gamelab/noi6SU.ST7VfqHGoH6ijJX1cNwdcFcZM/category_backgrounds/background_cave.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"noi6SU.ST7VfqHGoH6ijJX1cNwdcFcZM","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/noi6SU.ST7VfqHGoH6ijJX1cNwdcFcZM/category_backgrounds/background_cave.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var rain, rainGroup;
var start = createSprite(175,300,10,10)
    
var Background = createSprite(200,200);
var spider = createSprite(200, 390,20,20);
spider.scale = 0.5;
var score
var states = "play";
//stetups evry thing
function setup(){
  createCanvas(400,400);
  rainGroup = new Group();
  Background.setAnimation("space");
  spider.setAnimation("player");
  start.setAnimation("start")
  score = 0;
}
function draw() {
  background("white");
  start.visible = false
  if (touches.length > 0||keyDown("RIGHT_ARROW")){
    //spider.x = spider.x +9
    spider.x = touches[touches.length-1].x
   
    
   // touches = []
  }
  if (touches.length > 0 || keyDown("LEFT_ARROW")){
    spider.x = spider.x-9;
   // touches = []
  }
  for(var i = 0; i < touches.length; i++){
    console.log(touches[i].x)
  }
  createEdgeSprites();
  spider.collide(edges);
  spawnRain();
 // Background.visible = false;
   if (states === "play"){
    Background.visible = true;
    spider.visible = true;
    score = score + Math.round(frameCount/60);
    rainGroup.setVelocityYEach(5)
    rainGroup.setVisibleEach(true)
    start.visible = false;
  }
  if(states === "end"){
    //rain.velocityY = 0;
    Background.visible = false
    spider.visible = false;
    rain.velocityY = 0;
    rain.visible = false;
    start.visible = true;
    damage();
    rainGroup.destroyEach();
   // rainGroup.setColliderEach("circle",)
  }
  if (mousePressedOver(start) && states === "end"){
    states = "play"
    reset()
  }
  drawSprites();
  stroke("lightblue")
  textSize(15)
  text("Your Score is: " + score, 270,50)
}
function spawnRain(){
  if(frameCount % 20 === 0){
    rain = createSprite(200,10,10,10);
    rainGroup.add(rain)
    rain.x = Math.round(random(5,400));
    rain.velocityY = 5;
    //rain.lifetime = Math.round(random(60,400));
    var rand = Math.round(random(1,3));
    switch(rand){
      case 1: rain.setAnimation("rock1");
      break;
      case 2: rain.setAnimation("rock2");
      break;
      case 3: rain.setAnimation("rock3");
      break;
      default : break;
    }
    if(rainGroup.isTouching(spider)){
      damage();
      states = "end";
     // console.log("Hello");
      
    }
    
  }
}
function damage(){
    
    stroke("red");
    textFont("Arial");
    textSize(20);
    text("Engine Down, Abort Mission!!!",75,150);
    stroke("yellow");
    textFont("Arial");
    textSize(20);
    text("Click to Restart",115,250);
    stroke("green")
    text("Try Beating Your Score In Your Next Try!",25, 200)
 // }
}
function reset(){
  score = 0
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
