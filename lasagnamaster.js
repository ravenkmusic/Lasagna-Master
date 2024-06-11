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