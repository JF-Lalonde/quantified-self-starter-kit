// method to iterate thru foods to feed constructor a food
class Food {
  constructor(responseFood){
    this.id       = responseFood['id'];
    this.name     = responseFood['name'];
    this.calories = responseFood['calories']
  }
  static eachFood(responseFoodsList){
    responseFoodsList.forEach(function(food){
      new Food(food);
    })

  deleteFood(deleteFoodHandler){
    deleteFoodHandler(); // require handlers on top // make a handler class and call new foodsHandler
  }
  }
}
