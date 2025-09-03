class Circle {
    constructor(radius){
        this._radius = radius
    }

    get radius(){
        return this._radius
    }

    set radius(newValue){
        this.radius = newValue
    }

    get diametr(){
        return 2*this._radius
    }

    square(){
        return Math.Pi*r*r
    }
}