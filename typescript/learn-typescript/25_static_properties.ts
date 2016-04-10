//Please note that in each instance accesses this static value through prepending the name of the class. 
//Similarly to prepending 'this.' in front of instance accesses, here we prepend 'Grid.' in front of static accesses.

class Grid {
    static origin = {x: 0, y: 0};
    
    constructor(public scale: number){ }
    
    public calculateDistanceFromOrigin(point: {x: number; y:number}){
        var xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
}

var grid1 = new Grid(1.0) // 1x scale
var grid2 = new Grid(5.0) // 5x scale

var point = {x: 10, y: 10};
console.log(grid1.calculateDistanceFromOrigin(point));
console.log(grid2.calculateDistanceFromOrigin(point));


// -- You can alse have static methods

class Console1{
    static WriteLine(msg){
        console.log(msg);
        
    }
}

Console1.WriteLine('Hello world');