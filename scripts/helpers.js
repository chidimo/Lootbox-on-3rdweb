import { ThirdwebSDK } from "@3rdweb/sdk";
import ethers from "ethers";
import dotenv from "dotenv";

dotenv.config();

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
