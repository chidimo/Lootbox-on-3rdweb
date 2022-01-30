import { getApp } from './helpers'

async function main() {
  const app = await getApp();

  console.log("Deployingn bundle collection module...");

  const bundleModule = await app.deployBundleModule({
    name: "pointer.gg Lootbox Tutorial Bundle",
    sellerFeeBasisPoints: 0,
  });

  console.log(
    `Deployed bundle collection module with address ${bundleModule.address}`
  );
}

try {
  await main();
} catch (error) {
  console.error("Error creating the bundle collection module", error);
  process.exit(1);
}
