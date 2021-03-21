const countSheep = (sheep) => {
  if (sheep < 0) {
    return;
  } else if (sheep > 0) {
    console.log(`${sheep}: another sheep jumped over the fence`);
    countSheep(sheep - 1);
  } else {
    console.log("All sheep have jumped over the fence");
  }
};

countSheep(3);

const powerCalculator = (base, exp) => {
  if (exp < 0) {
    return "Exponent should be greater >= 0";
  } else if (exp === 0) {
    return 1;
  } else {
    return base * powerCalculator(base, exp - 1);
  }
};

console.log(powerCalculator(10, 10));

const reverseString = (string) => {
  if (string.length === 0) {
    return "";
  } else {
    return reverseString(string.slice(1)) + string[0];
  }
};

console.log(reverseString("abcdefg"));

const triNumSeq = (n) => {
  if (n <= 0) {
    return 0;
  } else {
    return n + triNumSeq(n - 1);
  }
};

console.log(triNumSeq(9));

const stringSplitter = (string, splitter) => {
  if (string === "") {
    return "";
  }
  let newChar = string[0];
  if (newChar === splitter) {
    newChar = "";
  }
  return newChar + stringSplitter(string.slice(1), splitter);
};

console.log(stringSplitter("02/20/2020", "/"));

const fibSeq = (num) => {
  if (num === 0) {
    return 0;
  } else if (num <= 2) {
    return 1;
  } else {
    return fibSeq(num - 1) + fibSeq(num - 2);
  }
};

console.log(fibSeq(7));

const factorial = (num) => {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

console.log(factorial(5));

let smallMaze = [
  [" ", " ", " "],
  [" ", "*", " "],
  [" ", " ", "e"],
];

let bigMaze = [
  [" ", " ", " ", "*", " ", " ", " "],
  ["*", "*", " ", "*", " ", "*", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", "*", "*", "*", "*", "*", " "],
  [" ", " ", " ", " ", " ", " ", "e"],
];

let escape = (maze, pos = 0, row = 0, col = 0, dir = "S", path = []) => {
  if (col < 0 || row < 0) return;
  if (col >= maze[0].length || row >= maze.length) return;

  path[pos] = dir;
  pos++;

  if (maze[row][col] === "e") {
    console.log(path);
    return;
  }

  if (maze[row][col] === " ") {
    // The current cell is free. Mark it as visited
    maze[row][col] = "V";
    // Invoke recursion to explore all possible directions
    escape(maze, pos, row - 1, col, "U", path); // Up
    escape(maze, pos, row, col + 1, "R", path); // Right
    escape(maze, pos, row + 1, col, "D", path); // Down
    escape(maze, pos, row, col - 1, "L", path); // Left
    // Mark back the current cell as free
    // maze[row][col] = " ";
  }
  // Remove the last direction from the path
  pos--;
};

escape(bigMaze);

const anagram = (word) => {
  let list = [];
  if (word.length === 1) {
    list.push(word[0]);
    return list;
  }
  for (let i = 0; i < word.length; i++) {
    const prefix = word[i];
    const rest = word.substring(0, i) + word.substring(i + 1);
    let words = anagram(rest);
    for (let j = 0; j < words.length; j++) {
      list.push(prefix + words[j]);
    }
  }
  return list;
};

console.log(anagram("east"));

let facebook = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: {},
        Kyle: {},
        Andra: {},
      },
      Zhao: {
        Richie: {},
        Sofia: {},
        Jen: {},
      },
    },
    Schrage: {
      VanDyck: {
        Sabrina: {},
        Michelle: {},
        Josh: {},
      },
      Swain: {
        Blanch: {},
        Tom: {},
        Joe: {},
      },
    },
    Sandberg: {
      Goler: {
        Eddie: {},
        Julie: {},
        Annie: {},
      },
      Hernandez: {
        Rowi: {},
        Inga: {},
        Morgan: {},
      },
      Moissinac: {
        Amy: {},
        Chuck: {},
        Vinni: {},
      },
      Kelley: {
        Eric: {},
        Ana: {},
        Wes: {},
      },
    },
  },
};

const orgChart = (obj, indent = "") => {
  let output = "";
  for (let key in obj) {
    output = output + indent + key + "\n";
    output = output + orgChart(obj[key], indent + "     ");
  }
  return output;
};

console.log(orgChart(facebook));

let binary = (num) => {
  if (num === 0) {
    return "";
  } else {
    return `${binary(Math.floor(num / 2))}${num % 2}`;
  }
};

console.log(binary(25));
