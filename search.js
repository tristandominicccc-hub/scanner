// 👇 PASTE YOUR BRAND NEW KEY between the quotes (replace YOUR_NEW_KEY_HERE)
const API_KEY = 'AIzaSyAEoKh_vS5mNDwabjAATtQjn4Ba7K_UFUo'; 

exports.handler = async (event) => {
  const query = event.queryStringParameters.q;
  if (!query) {
    return { statusCode: 400, body: JSON.stringify({ error: "Missing search term" }) };
  }

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&q=${encodeURIComponent(query)}&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: "API call failed" }) };
  }
};