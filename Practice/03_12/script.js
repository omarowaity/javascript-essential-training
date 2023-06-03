/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Backpack from "./Backpack.js";

const myPack = new Backpack(
  "My BackPack",
  25,
  "blue",
  2,
  15,
  15,
  false
);

console.log("My BackPack object:", myPack);
