// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2 {
    constructor(att){
        this.length = att.length;
        this.width = att.width;
        this.height = att.height;
    }
    volume(){
        const volume = this.length * this.width * this.height;
        return volume;
    }
    surfaceArea(){
        const surfaceA = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
        return surfaceA;
    }
}

  const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5 
  });
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
// Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2 {
    constructor(att){
        super(att);
    }
    cubeVolume(){
        const volume = Math.pow(this.length, 3);
        return volume;
    }
    cubeSurfaceArea(){
        const surfaceA = 6 * (Math.pow(this.length, 2));
        return surfaceA;
    }
}

const cube = new CubeMaker({
    length: 5,
    width: 5,
    height: 5 
});
console.log(cube.cubeVolume()); 
console.log(cube.cubeSurfaceArea());