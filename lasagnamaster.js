/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * Write a function cookingStatus that accepts the remaining time on the timer in minutes as a parameter.
 * The function has three possible results.
 *
 *If the timer shows 0, it should return 'Lasagna is done.'.
 *If the timer shows any other number, the result should be 'Not done, please wait.'.
 *If the function is called without a timer value, the result should be 'You forgot to set the timer.'.
 *The timer will never show a value below 0.
 */

export function cookingStatus(cookTimeLeft){
    if (cookTimeLeft === 0){
      return 'Lasagna is done.'
    } else if (cookTimeLeft > 0) {
      return 'Not done, please wait.'
    } else if (cookTimeLeft === undefined){
      return 'You forgot to set the timer.'
    }
  }

 /**
 * Implement a function preparationTime that accepts an array of layers and the average preparation time per layer in minutes. 
 * The function should return the estimate for the total preparation time based on the number of layers. 
 * If the function is called without providing the average preparation time, 2 minutes should be assumed instead.
 */

  
  export function preparationTime(layers, avgPrepTime){
    if (avgPrepTime === undefined){
      avgPrepTime = 2;
    }
    let prepTimeEstimate = layers.length * avgPrepTime;
    return prepTimeEstimate;
  }

  /**
   * Define the function quantities that takes an array of layers as a parameter. 
   * The function will then determine the quantity of noodles and sauce needed to make your meal. 
   * The result should be returned as an object with keys noodles and sauce.
   */

  export function quantities(layers){
    let noodles = 0;
    let sauce = 0.0;
    
    for (let i = 0; i < layers.length; i++) {
      if (layers[i] == 'noodles'){
        noodles += 50;
      }
      if (layers[i] == 'sauce'){
        sauce += .2;
      }
    }
  
    let quantity = { 
      noodles: noodles, 
      sauce: sauce
    }
    
    return quantity
  }

  /**
   * Write a function addSecretIngredient that accepts two arrays of ingredients as parameters.
   * The first parameter is the list your friend sent you and the second is the ingredient list for your own recipe. The function should add the last item from your friend's list to the end of your list. The array that represents your recipe should be modified directly and the function should not return anything. 
   * However, the first argument should not be modified.
   */

  export function addSecretIngredient(friendList, myList){
    let lastIngredient = friendList[friendList.length -1];
    myList.push(lastIngredient);
    console.log(myList);
  }

  /**
   * Implement a function scaleRecipe that takes two parameters.
   *    A recipe object that holds the amounts needed for 2 portions. The format of the object can be seen in the example below.
   *    The number of portions you want to cook.
   * The function should return a recipe object with the amounts needed for the desired number of portions. You want to keep the original recipe though. 
   * This means, in this task the recipe argument should not be modified.
   */

  export function scaleRecipe(recipe, numberOfPortions){
  
    let scaledRecipe = {...recipe};
    for (let ingredient in scaledRecipe){
      scaledRecipe[ingredient] = scaledRecipe[ingredient] * (numberOfPortions / 2);
    }
    return scaledRecipe;
  }