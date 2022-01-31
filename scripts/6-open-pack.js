import { sdk } from "./helpers.js";
import { packAddress } from "../constants";

async function main() {
  const packModule = sdk.getPackModule(packAddress);

  console.log("Opening the pack...");
  const opened = await packModule.open("0");
  console.log("Opened the pack!");
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}
