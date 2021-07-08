export const fetchfromURI = async (uri) => {
  const res = await fetch(`http://localhost:5000/${uri}`);
  const data = await res.json();
  return data;
};

export const postToURI = async (uri, obj) => {
  const res = await fetch(`http://localhost:5000/${uri}`, {
    method: "POST",
    body: obj,
  });
  const data = await res.json();
  return data;
};
