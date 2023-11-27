import { ethers } from "ethers";
export type DecodedResult = bigint | string;
export const decodeResult = (resultHexstring: string): DecodedResult => {
  let decodedOutput;

  if (resultHexstring === "0x") {
    return BigInt(0);
  }
  decodedOutput = BigInt("0x" + resultHexstring.slice(2).slice(-64));

  return decodedOutput as DecodedResult;
};

const responseBytesHexstring =
  "0x0000000000000000000000000000000000000000000000000000000000031e5a";
if (ethers.utils.arrayify(responseBytesHexstring).length > 0) {
  const decodedResponse = decodeResult(
    "0x0000000000000000000000000000000000000000000000000000000000031e5a"
  );
  console.log(`\n✅ Decoded response to ${"uint256"}: `, decodedResponse);
}
