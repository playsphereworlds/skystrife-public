import { MUDChain, mudFoundry, redstone as mudRedstone } from "@latticexyz/common/chains";
import { parseGwei } from "viem";

export type SkyStrifeChain = MUDChain & {
  indexerUrl?: string;
  matchIndexerUrl?: string;
  bridgeUrl?: string;
};

export const garnet = {
  id: 17069,
  name: "Redstone Garnet Testnet",
  network: "garnet",
  summary: {
    location: "Holesky",
  },
  description: "Redstone Garnet Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Holesky Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://17069.rpc.thirdweb.com/27ba31e8fedf04a29c6004f4f745038e"],
      webSocket: ["wss://rpc.garnetchain.com"],
    },
    public: {
      http: ["https://17069.rpc.thirdweb.com/27ba31e8fedf04a29c6004f4f745038e"],
      webSocket: ["wss://rpc.garnetchain.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://explorer.garnet.qry.live",
    },
  },
  fees: {
    baseFeeMultiplier: 1.2,
    defaultPriorityFee: parseGwei("0.001"),
  },
  indexerUrl: "https://indexer.mud.garnetchain.com",
};

export const redstone = {
  ...mudRedstone,
  indexerUrl: "https://dozer.mud.redstonechain.com/",
  matchIndexerUrl: "https://skystrife-indexer-api.onrender.com/",
  bridgeUrl: "https://race.redstone.xyz/deposit",
};

// If you are deploying to chains other than anvil or Lattice testnet, add them here
export const supportedChains: SkyStrifeChain[] = [mudFoundry, garnet, redstone];
