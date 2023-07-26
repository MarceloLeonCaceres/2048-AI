class Tile {

  constructor(position, value){
    this.x = position.x;
    this.y = position.y;
    this.value = value || 2;

    this.previousPosition = null;
    this.mergedFrom = null;
  }

  savePosition(){
    this.previousPosition = { 
      x: this.x, 
      y: this.y};
  }

  updatePosition(position){
    this.x = position.x;
    this.y = position.y;
  }

  clone(){
    let newTile = new Tile({ 
      x: this.x, 
      y: this.y}, this.value);
    return newTile;
  }

  print(){
    console.log('fila: ' + this.y + ' | col: ' + this.x + ' | value: ' + this.value);
  }

}