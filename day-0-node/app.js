const userName = "Vivek";
const userData = () => {
  const userName = "Vivek Sahu";
  const password = 1257;
  const email = "vivek@123";

  return { userName, password, email };
};

const user = userData();

console.log(`Hello ${user.userName}`);
console.log(`Hello ${user.password}`);
console.log(`Hello ${user.email}`);

console.log("Hello from Node 🚀");
console.log(`Hello ${userName}`);
