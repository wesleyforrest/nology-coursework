const validMessage = {
  userName: "Charlie",
  content: "Have a great day!",
};

const invalidMessage = {
  userName: "Charlie",
  error: 6474343,
};

// for (let key in messgae) {
//   console.log(key);
//   console.log(messgae[key]);
// }

// const validateMessageObject = (messageObject) => {
//   for (let key in messageObject) {
//     const typeCheck = typeof messageObject[key] !== "string";

//     if (typeCheck) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(validateMessageObject(validMessage));
// console.log(validateMessageObject(invalidMessage));

const validMessageValues = Object.values(validMessage);
const invalidMessageValues = Object.values(invalidMessage);

//

// const validMessageValue = Object.values(validMessage);
// const invalidMessageValue = Object.values(invalidMessage);

// console.log(validateMessageValue);
// console.log(invalidMessageValue);

// console.log(
//   validMessageValues.every((validMessage) => {
//     const typeCheck = typeof validMessage === "string";
//     return typeCheck;
//   })
// );

const validMessageKeys = Object.keys(validMessage);
const invalidMessageKeys = Object.keys(invalidMessage);

console.log(validMessageKeys);
console.log(invalidMessageKeys);

const checkValidKeys = (key) => {
  if (key == userName || content) return true;
};

const validateMessageKeys = (messsageObject) => {
  const ObjectKeys = Object.keys(messageObject);
  const keyCheck = objectKeys.every((key) => {
    const validKeys = ["userName", "content"];
    return validKeys.includes[key];
  });
  return keyCheck;
};

//

const validMessageEntries = Object.entries(validMessage);
const invalidMessageEntries = Object.entries(invalidMessage);

console.log(validMessageEntries);
console.log(invalidMessageEntries);

const validateMessageObject = (messageObject) => {
  const objectEntries = Object.entries(messageObject);
  const validation = objectEntries.every((entry) => {
    const key = entry[0];
    const value = entry[1];
    const typeCheck = typeof value === "string";
    const validKeys = ["userName", "content"];
    const keyCheck = validKeys.includes(key);

    return typeCheck && keyCheck;
  });
  return validation;
};

console.log(validateMessageObject(validMessage));
console.log(validateMessageObject(invalidMessage));
