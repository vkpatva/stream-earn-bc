const songId = args[0];

const url = `https://32e6-203-129-213-98.ngrok.io/song/streams`;
const songRequest = Functions.makeHttpRequest({
  url: url,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  data: {
    songId: songId,
  },
});

const songResponse = await songRequest;
console.log(songResponse);
if (songResponse.error) {
  console.error(songResponse.error);
  throw Error("Request failed");
}

const data = songResponse["data"];
if (data.status !== 200) {
  console.error(data.Message);
  throw Error(`Functional error. Read message: ${data.Message}`);
}

return Functions.encodeUint256(parseInt(data.payload.total_plays));
