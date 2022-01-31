import { readFileSync } from "fs";
import { bundleAddress, packAddress } from "../constants.js";
import { sdk } from "./helpers.js";

async function main() {
  const bundleModule = sdk.getBundleModule(bundleAddress);

  const packModule = sdk.getPackModule(packAddress);

  console.log("Getting all NFTs from bundle...");
  const nftsInBundle = await bundleModule.getAll();

  console.log("NFTs in bundle:");
  console.log(nftsInBundle);

  console.log("Creating a pack containing the NFTs from bundle...");
  const created = await packModule.create({
    assetContract: bundleAddress,
    metadata: {
      name: "Rare coins Pack!",
      image: readFileSync("./assets/lootbox-pack-cover.jpg"),
    },
    assets: nftsInBundle.map((nft) => ({
      tokenId: nft.metadata.id,
      amount: nft.supply,
    })),
  });

  console.log("Pack created!");
  console.log(created);
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}
