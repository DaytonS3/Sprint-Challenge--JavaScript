




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
    
  

  cuboid = new CuboidMaker2 ({
    length: 4,
    width: 5,
    height: 5
  });
  
  
  console.log(cuboid.volume()); // 100
  console.log(cuboid.surfaceArea()); // 130
  
  

 

