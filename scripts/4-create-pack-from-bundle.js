import { readFileSync } from "fs";
import { sdk, bundleModuleAddress, packModuleAddress } from "./helpers.js";

async function main() {
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  const packModule = sdk.getPackModule(packModuleAddress);

  console.log("Getting all NFTs from bundle...");
  const nftsInBundle = await bundleModule.getAll();

  console.log("NFTs in bundle:");
  console.log(nftsInBundle);

  console.log("Creating a pack containing the NFTs from bundle...");
  const created = await packModule.create({
    assetContract: bundleModuleAddress,
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
