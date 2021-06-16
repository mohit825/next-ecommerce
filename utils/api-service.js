export const fetchfromURI = async (uri) => {
  const res = await fetch(`http://localhost:5000/${uri}`);
  const data = await res.json();
  return data;
};
