import {AptosAccount, AptosClient, BCS, TxnBuilderTypes} from "aptos";
import {Buffer} from "buffer";

export const node_url = "https://fullnode.mainnet.aptoslabs.com";
const client = new AptosClient(node_url);

const senderAddress = '0xd46fea7b193f7e68ea230df4636bd680fd6da3a73590138c925025827911f6'

const payload = {
  type: "entry_function_payload",
  function: "0x1::aptos_account::transfer",
  type_arguments: [],
  arguments: ['0x915cc02f55d4c939900341383cd857183b9dd82e21af4179ea27ad4e66426532', 100],
};

const rawTx = await client.generateTransaction(senderAddress, payload, { expiration_timestamp_secs: "2014829468", max_gas_amount: "15" });

const serializer = new BCS.Serializer();
rawTx.serialize(serializer)
const tx = Buffer.from(serializer.getBytes()).toString('hex')

console.log(tx)
