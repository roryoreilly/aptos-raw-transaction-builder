import { AptosClient, BCS } from "aptos";

export const node_url = "https://fullnode.testnet.aptoslabs.com";
const client = new AptosClient(node_url);

const senderAddress = '0x00d46fea7b193f7e68ea230df4636bd680fd6da3a73590138c925025827911f6'

const rawTx = await client.generateTransaction(senderAddress, {
      function: "0x1::aptos_account::transfer",
      type_arguments: [],
      arguments: ['0x915cc02f55d4c939900341383cd857183b9dd82e21af4179ea27ad4e66426532', 100000],
    });

const serializer = new BCS.Serializer();
rawTx.serialize(serializer)
const tx = Buffer.from(serializer.getBytes()).toString('hex')

console.log(tx)
