import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  clusterApiUrl,
} from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("mainnet-beta"));

const publicKey = new PublicKey("86xCnPeV69n6t3DnyGvkKobf9FdN2H9oiVDdaMpo2MMY");

const balanceInLamports = await connection.getBalance(publicKey);
const balnaceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(`Balance of toly.sol: ${balnaceInSOL}`);
