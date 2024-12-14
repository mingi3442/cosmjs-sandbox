import { StargateClient } from "@cosmjs/stargate"

const COSMOS_HUB_RPC_URL = "https://cosmos-rpc.polkachu.com/"

const runAll = async (): Promise<void> => {
    const client = await StargateClient.connect(COSMOS_HUB_RPC_URL)
    console.log("With client, chain id:", await client.getChainId(), ", height:", await client.getHeight())
}

runAll()
