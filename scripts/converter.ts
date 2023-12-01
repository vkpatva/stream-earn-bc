interface DataItem {
  [key: string]: any;
}

interface DataObject {
  [key: string]: DataItem[];
}

function attachTitleToData(data: DataObject): DataItem[] {
  const result: DataItem[] = [];

  for (const key in data) {
    // eslint-disable-next-line no-prototype-builtins
    if (data.hasOwnProperty(key)) {
      const title = key;
      const items = data[key];

      for (const item of items) {
        result.push({ title, ...item });
      }
    }
  }

  return result;
}

// Example usage:
const originalData = {
  artistWhitelisteds: [
    {
      id: "0x10f0e14227819b3485239c0cf723bdb60fcb27b08576f6b71743284cfb145e6202000000",
      artist: "0xb076c96e56026eff68a4012c5936977a19142fd9",
      blockNumber: "42975786",
      blockTimestamp: "1701258821",
      transactionHash:
        "0x10f0e14227819b3485239c0cf723bdb60fcb27b08576f6b71743284cfb145e62",
    },
  ],
  songAddeds: [
    {
      transactionHash:
        "0x6c9abe87465ef68fe41f382857bd9a8c3d250623d50061118ca630b60a206596",
      songId: "4d8340b2-d86b-49de-a7a9-1a20b6638f31",
      id: "0x6c9abe87465ef68fe41f382857bd9a8c3d250623d50061118ca630b60a20659608000000",
      blockTimestamp: "1701261042",
      blockNumber: "42976800",
      artist: "0xb076c96e56026eff68a4012c5936977a19142fd9",
    },
    {
      transactionHash:
        "0x7d74b16c28db5c61ee499ca1b7dcf39797b07e7311a6c96d1a91f9608a24d749",
      songId: "d1511237-b146-4741-adf3-b77928546ff8",
      id: "0x7d74b16c28db5c61ee499ca1b7dcf39797b07e7311a6c96d1a91f9608a24d74906000000",
      blockTimestamp: "1701261026",
      blockNumber: "42976793",
      artist: "0xb076c96e56026eff68a4012c5936977a19142fd9",
    },
    {
      transactionHash:
        "0x800febd3612a2d2c8048d99e044317022e33c42f7bf139a7a743a076d017334f",
      songId: "c21f21fc-4b70-469f-88e9-79f339ded281",
      id: "0x800febd3612a2d2c8048d99e044317022e33c42f7bf139a7a743a076d017334f08000000",
      blockTimestamp: "1701258985",
      blockNumber: "42975863",
      artist: "0xb076c96e56026eff68a4012c5936977a19142fd9",
    },
  ],
  requestFulfilleds: [
    {
      StreamEarn_id:
        "0x5f275236d621cb33edf828164b77ee09bab6132ff086c5ece41b30e7cb0e371c",
      blockNumber: "42976816",
      blockTimestamp: "1701261076",
      id: "0x0ceb48312aa9bd46f7263d70dc6afda59c76ac1a60dcc3406987185b1a4f941f13000000",
      transactionHash:
        "0x0ceb48312aa9bd46f7263d70dc6afda59c76ac1a60dcc3406987185b1a4f941f",
    },
    {
      StreamEarn_id:
        "0x9f74dae9f77b103785ceafd8bd7b7b32b097456e99d70de4112cb36b76ec9298",
      blockNumber: "42976822",
      blockTimestamp: "1701261088",
      id: "0x768949db526d384e7c4a1db26c869457fde9cbbf46283968a5215bca9b2079e203000000",
      transactionHash:
        "0x768949db526d384e7c4a1db26c869457fde9cbbf46283968a5215bca9b2079e2",
    },
    {
      StreamEarn_id:
        "0xda0f1c1668a39763dd0c42b9880f9efe936ce922f9c1b933f9441ea26545c06d",
      blockNumber: "42975889",
      blockTimestamp: "1701259041",
      id: "0xdc368910f2e8113b9d65062db34281794ae297d11bae91b1e3676c55ad08124f36000000",
      transactionHash:
        "0xdc368910f2e8113b9d65062db34281794ae297d11bae91b1e3676c55ad08124f",
    },
    {
      StreamEarn_id:
        "0x1d102b12f3e0d0c3988102e93e9a6c64cdeff209a23605ced7e3ecf0877b00e3",
      blockNumber: "42976813",
      blockTimestamp: "1701261068",
      id: "0xe04dc753d54be358985766dc09904eb204a060c904446f304f0f539e21d34d0a1c000000",
      transactionHash:
        "0xe04dc753d54be358985766dc09904eb204a060c904446f304f0f539e21d34d0a",
    },
  ],
  dataRequestMades: [
    {
      blockNumber: "42976805",
      blockTimestamp: "1701261052",
      id: "0x5c01cea7e785cf9a0299b4a3a2ca7a9e9038a3b47505682792575de764c3aa5506000000",
      requestId:
        "0x1d102b12f3e0d0c3988102e93e9a6c64cdeff209a23605ced7e3ecf0877b00e3",
      songId: "d1511237-b146-4741-adf3-b77928546ff8",
      transactionHash:
        "0x5c01cea7e785cf9a0299b4a3a2ca7a9e9038a3b47505682792575de764c3aa55",
    },
    {
      blockNumber: "42976809",
      blockTimestamp: "1701261060",
      id: "0x8b77b9039c49e8aff9ad065b03bc4c5d7d22c659a4f08de36f809571e5040a3c04000000",
      requestId:
        "0x5f275236d621cb33edf828164b77ee09bab6132ff086c5ece41b30e7cb0e371c",
      songId: "4d8340b2-d86b-49de-a7a9-1a20b6638f31",
      transactionHash:
        "0x8b77b9039c49e8aff9ad065b03bc4c5d7d22c659a4f08de36f809571e5040a3c",
    },
    {
      blockNumber: "42975882",
      blockTimestamp: "1701259025",
      id: "0x9e1da97b1e076c0f4e04541c428a645db1293cd0c60c272a3f17a2dec822650325000000",
      requestId:
        "0xda0f1c1668a39763dd0c42b9880f9efe936ce922f9c1b933f9441ea26545c06d",
      songId: "c21f21fc-4b70-469f-88e9-79f339ded281",
      transactionHash:
        "0x9e1da97b1e076c0f4e04541c428a645db1293cd0c60c272a3f17a2dec8226503",
    },
    {
      blockNumber: "42976816",
      blockTimestamp: "1701261076",
      id: "0xdccbffb9fd98d31e05bf3b1f6d9711d28c0ed4817a83dc253cff7a1f95d1126b0b000000",
      requestId:
        "0x9f74dae9f77b103785ceafd8bd7b7b32b097456e99d70de4112cb36b76ec9298",
      songId: "c21f21fc-4b70-469f-88e9-79f339ded281",
      transactionHash:
        "0xdccbffb9fd98d31e05bf3b1f6d9711d28c0ed4817a83dc253cff7a1f95d1126b",
    },
  ],
  dataResponses: [
    {
      blockNumber: "42976816",
      blockTimestamp: "1701261076",
      err: "0x",
      id: "0x0ceb48312aa9bd46f7263d70dc6afda59c76ac1a60dcc3406987185b1a4f941f12000000",
      requestId:
        "0x5f275236d621cb33edf828164b77ee09bab6132ff086c5ece41b30e7cb0e371c",
      response:
        "0x0000000000000000000000000000000000000000000000000000000000000ee6",
      transactionHash:
        "0x0ceb48312aa9bd46f7263d70dc6afda59c76ac1a60dcc3406987185b1a4f941f",
    },
    {
      blockNumber: "42976822",
      blockTimestamp: "1701261088",
      err: "0x",
      id: "0x768949db526d384e7c4a1db26c869457fde9cbbf46283968a5215bca9b2079e202000000",
      requestId:
        "0x9f74dae9f77b103785ceafd8bd7b7b32b097456e99d70de4112cb36b76ec9298",
      response:
        "0x00000000000000000000000000000000000000000000000000000000000023ff",
      transactionHash:
        "0x768949db526d384e7c4a1db26c869457fde9cbbf46283968a5215bca9b2079e2",
    },
    {
      blockNumber: "42975889",
      blockTimestamp: "1701259041",
      err: "0x",
      id: "0xdc368910f2e8113b9d65062db34281794ae297d11bae91b1e3676c55ad08124f35000000",
      requestId:
        "0xda0f1c1668a39763dd0c42b9880f9efe936ce922f9c1b933f9441ea26545c06d",
      response:
        "0x0000000000000000000000000000000000000000000000000000000000000a55",
      transactionHash:
        "0xdc368910f2e8113b9d65062db34281794ae297d11bae91b1e3676c55ad08124f",
    },
    {
      blockNumber: "42976813",
      blockTimestamp: "1701261068",
      err: "0x",
      id: "0xe04dc753d54be358985766dc09904eb204a060c904446f304f0f539e21d34d0a1b000000",
      requestId:
        "0x1d102b12f3e0d0c3988102e93e9a6c64cdeff209a23605ced7e3ecf0877b00e3",
      response:
        "0x00000000000000000000000000000000000000000000000000000000000014ee",
      transactionHash:
        "0xe04dc753d54be358985766dc09904eb204a060c904446f304f0f539e21d34d0a",
    },
  ],
  mintStreamTokens: [
    {
      artist: "0xb076c96e56026eff68a4012c5936977a19142fd9",
      blockNumber: "42976834",
      blockTimestamp: "1701261120",
      id: "0x1684b1548aa031fc360971ab154d6a5f7dc7c3572e8528745d1d8c1d47e2f8c705000000",
      songId: "d1511237-b146-4741-adf3-b77928546ff8",
      tokensMinted: "5358",
      transactionHash:
        "0x1684b1548aa031fc360971ab154d6a5f7dc7c3572e8528745d1d8c1d47e2f8c7",
    },
    {
      artist: "0xb076c96e56026eff68a4012c5936977a19142fd9",
      blockNumber: "42976825",
      blockTimestamp: "1701261094",
      id: "0xa47faa7d02cca079037dfd81633919cb4fdf0f343295782dd6d2f5f329e282af05000000",
      songId: "4d8340b2-d86b-49de-a7a9-1a20b6638f31",
      tokensMinted: "3814",
      transactionHash:
        "0xa47faa7d02cca079037dfd81633919cb4fdf0f343295782dd6d2f5f329e282af",
    },
    {
      artist: "0xb076c96e56026eff68a4012c5936977a19142fd9",
      blockNumber: "42975901",
      blockTimestamp: "1701259065",
      id: "0xc132693e172cd7b1905068049dbfcdf57b5b5aa8f319a545eeb4b9a3097823b905000000",
      songId: "c21f21fc-4b70-469f-88e9-79f339ded281",
      tokensMinted: "2645",
      transactionHash:
        "0xc132693e172cd7b1905068049dbfcdf57b5b5aa8f319a545eeb4b9a3097823b9",
    },
    {
      artist: "0xb076c96e56026eff68a4012c5936977a19142fd9",
      blockNumber: "42976830",
      blockTimestamp: "1701261104",
      id: "0xf43801cb61ab8466e653b9f4f06f1a3f56236ea51c9f49fbf362bb226648519c05000000",
      songId: "c21f21fc-4b70-469f-88e9-79f339ded281",
      tokensMinted: "9215",
      transactionHash:
        "0xf43801cb61ab8466e653b9f4f06f1a3f56236ea51c9f49fbf362bb226648519c",
    },
  ],
};

const newData = attachTitleToData(originalData);
const sortedData = newData.sort(
  (a, b) => parseInt(a.blockNumber) - parseInt(b.blockNumber)
);

console.log(sortedData);
