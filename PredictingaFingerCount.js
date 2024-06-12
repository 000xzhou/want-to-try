/**
 * I was recommend the book Algorithmic Puzzles. And this was one of them.
 * I want to code it to solve it without knowing math.
 * I did added a 2nd one with math. Which is just taking the reminder and plugging it into an obj.
 */
// 6. Predicting a FingerCount
/**
 *  A little girl counts from 1 to 1000 using the fingers of her left hand as
 *  follows. She starts by calling her thumb 1, the first finger 2, middle finger 3,
 *  ring finger4, and little finger 5. Then she reverses direction,calling the ring
 *  finger 6, middlefinger7,thefirstfinger8,andherthumb9,afterwhichshe
 *  calls her first finger 10, and so on. If she continues to count in this manner,
 *  on which finger will she stop?
 */

// Time complexity: 0(nm)
const countfingers = (num) => {
  const fingers = ["thumb", "index", "middle", "ring", "pink"];

  let i = 0; // Current index in the array
  let count = 0; // Counter for the number of elements processed
  let direction = 1; // 1 means forward, -1 means backward
  let element;

  while (count < num) {
    element = fingers[i];
    i += direction;

    if (i === fingers.length) {
      direction = -1;
      // Move to the second last element
      i = fingers.length - 2;
    } else if (i === -1) {
      direction = 1;
      // Move to the second element
      i = 1;
    }

    count++;
  }

  return element;
};

console.log(countfingers(1));
console.log(countfingers(2));
console.log(countfingers(3));
console.log(countfingers(4));
console.log(countfingers(5));
console.log(countfingers(6));
console.log(countfingers(7));
console.log(countfingers(8));
console.log(countfingers(9));
console.log(countfingers(10));

// math way if you know the math
const countfingers2 = (num) => {
  const fingers = {
    1: "thumb",
    2: "index",
    3: "middle",
    4: "ring",
    5: "pink",
    6: "ring",
    7: "middle",
    0: "index",
  };

  return fingers[num % 8];
};
console.log("===============");
console.log(countfingers2(1));
console.log(countfingers2(2));
console.log(countfingers2(3));
console.log(countfingers2(4));
console.log(countfingers2(5));
console.log(countfingers2(6));
console.log(countfingers2(7));
console.log(countfingers2(8));
console.log(countfingers2(9));
console.log(countfingers2(10));
