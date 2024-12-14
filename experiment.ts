import { StargateClient } from "@cosmjs/stargate"
import { config } from "dotenv"

config()

const runAll = async (): Promise<void> => {
    const client = await StargateClient.connect(process.env.COSMOS_HUB_TESTNET_RPC ?? "")
    console.log("With client, chain id:", await client.getChainId(), ", height:", await client.getHeight())
    console.log("Alice balances:", await client.getAllBalances(process.env.ALICE_ADDRESS ?? ""))
}

runAll()
