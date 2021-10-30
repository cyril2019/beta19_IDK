const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Login = await hre.ethers.getContractFactory("Login");
  const login = await Login.deploy();
  await login.deployed();

  console.log("Login deployed to:", login.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
