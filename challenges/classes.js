




class CuboidMaker2 {
 constructor(Attributes) {
    this.length = Attributes.length;
    this.width = Attributes.width;
    this.height = Attributes.height;
  };

  volume () {
    return (this.length * this.width * this.height);
  }

  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  };

}; // CuboidMaker
    
  
 class cubeMaker extends CuboidMaker {
    constructor(cubeAtt){
        super(cubeAtt)
    } 
    
    cubeVolume() {
        return console.log(this.length * this.length * this.length)
    }

    cubeSurfaceArea(){
        return console.log(6 * (this.length * this.length))
    }
 }



  cuboid = new CuboidMaker2 ({
    length: 4,
    width: 5,
    height: 5
  });

  cube = new cubeMaker({
      length: 3
  })

  cube2 = new cubeMaker ({
      length: 2
  })
  
  
  console.log(cuboid.volume()); // 100
  console.log(cuboid.surfaceArea()); // 130
  cube.cubeVolume();
  cube.cubeSurfaceArea();
  cube2.cubeVolume();
  cube2.cubeSurfaceArea();
  

 

