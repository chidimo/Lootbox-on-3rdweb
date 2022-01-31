import { readFileSync } from "fs";
import { bundleAddress } from "../constants";
import { sdk } from "./helpers";

async function main() {
  const bundleModule = sdk.getBundleModule(bundleAddress);
  console.log("Creating NFT batch...");

  const created = await bundleModule.createAndMintBatch([
    {
      supply: 50,
      metadata: {
        name: "Silver and gold",
        description: "A silver and a gold coin side by side",
        image: readFileSync(
          "./assets/quantitatives-io-yoaDWBZJRcM-unsplash.jpg"
        ),
        properties: {
          rarity: "Not rare",
          fanciness: 7,
        },
      },
    },
    {
      supply: 5,
      metadata: {
        name: "One gold",
        description: "A single large gold coin",
        image: readFileSync(
          "./assets/quantitatives-io-VUMUoUF_WMI-unsplash.jpg"
        ),
        properties: {
          rarity: "Very rare",
          fanciness: 7,
        },
      },
    },
    {
      supply: 50,
      metadata: {
        name: "Guarded gold",
        description: "A large coin with guards on four sides",
        image: readFileSync(
          "./assets/quantitatives-io-kuDDku4EzC4-unsplash.jpg"
        ),
        properties: {
          rarity: "Not rare",
          fanciness: 7,
        },
      },
    },
  ]);

  console.log("NFTs created");
  console.log(JSON.stringify(created, null, 2));
}

try {
  await main();
} catch (error) {
  console.log("Error minting NFTs", error);
  process.exit(1);
}
