//Using for
const resume = {
  // (JSON data as above)
};

// For loop
for (let key in resume) {
  console.log(`${key}:`);
  if (Array.isArray(resume[key])) {
    for (let i = 0; i < resume[key].length; i++) {
      if (typeof resume[key][i] === "object") {
        for (let prop in resume[key][i]) {
          console.log(`  ${prop}: ${resume[key][i][prop]}`);
        }
      } else {
        console.log(`  ${resume[key][i]}`);
      }
    }
  } else if (typeof resume[key] === "object") {
    for (let subKey in resume[key]) {
      console.log(`  ${subKey}: ${resume[key][subKey]}`);
    }
  } else {
    console.log(`  ${resume[key]}`);
  }
}

//Using for.in

// For-in loop
for (let key in resume) {
  console.log(`${key}:`);
  if (Array.isArray(resume[key])) {
    resume[key].forEach((item) => {
      if (typeof item === "object") {
        for (let prop in item) {
          console.log(`  ${prop}: ${item[prop]}`);
        }
      } else {
        console.log(`  ${item}`);
      }
    });
  } else if (typeof resume[key] === "object") {
    for (let subKey in resume[key]) {
      console.log(`  ${subKey}: ${resume[key][subKey]}`);
    }
  } else {
    console.log(`  ${resume[key]}`);
  }
}

//Using for.of

// For-of loop
for (let key of Object.keys(resume)) {
  console.log(`${key}:`);
  if (Array.isArray(resume[key])) {
    for (let item of resume[key]) {
      if (typeof item === "object") {
        for (let prop of Object.keys(item)) {
          console.log(`  ${prop}: ${item[prop]}`);
        }
      } else {
        console.log(`  ${item}`);
      }
    }
  } else if (typeof resume[key] === "object") {
    for (let subKey of Object.keys(resume[key])) {
      console.log(`  ${subKey}: ${resume[key][subKey]}`);
    }
  } else {
    console.log(`  ${resume[key]}`);
  }
}

//Using forEach
// For-each loop
Object.keys(resume).forEach((key) => {
  console.log(`${key}:`);
  if (Array.isArray(resume[key])) {
    resume[key].forEach((item) => {
      if (typeof item === "object") {
        Object.keys(item).forEach((prop) => {
          console.log(`  ${prop}: ${item[prop]}`);
        });
      } else {
        console.log(`  ${item}`);
      }
    });
  } else if (typeof resume[key] === "object") {
    Object.keys(resume[key]).forEach((subKey) => {
      console.log(`  ${subKey}: ${resume[key][subKey]}`);
    });
  } else {
    console.log(`  ${resume[key]}`);
  }
});
