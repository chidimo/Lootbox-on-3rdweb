import { ThirdwebSDK } from "@3rdweb/sdk";
import ethers from "ethers";
import dotenv from "dotenv";

dotenv.config();

export const bundleModuleAddress = "0xecA6faa24ee108872e0cE5B9229fE340E791bf80";
export const packModuleAddress = "0x4B82f504b0B2523462a52FaE445E987a2E7d01E0"; // your pack module address

const walletPrivateKey = process.env.WALLET_PRIVATE_KEY;

if (!walletPrivateKey) {
  console.error("Wallet private key is not set");
  process.exit(1);
}

export const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.WALLET_PRIVATE_KEY,
    ethers.getDefaultProvider("https://rpc-mumbai.maticvigil.com")
  )
);

const appAddress = "0x6615B7f14A988D5EC63C1F0f8a78DCdb2af1276B";

export async function getApp() {
  const app = await sdk.getAppModule(appAddress);
  return app;
}
