import type { Plugin } from "@elizaos/core";
import { transferAction } from "./actions/transfer";
import { cosmosWalletProvider } from "./providers/wallet";
// import { ICosmosPluginOptions } from "./shared/interfaces";

const cosmosPlugin: Plugin = {
    name: "cosmos",
    description: "Cosmos blockchain integration plugin",
    providers: [cosmosWalletProvider],
    evaluators: [],
    services: [],
    actions: [transferAction],
};

export default cosmosPlugin;
