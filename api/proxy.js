export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const response = await fetch("https://0e0b1395-6661-4929-8ca9-13bf5982a2ea.mock.pstmn.io", {
        method: "POST",
        body: JSON.stringify(req.body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  } else {
    res.status(405).json({ status: "error", message: "Method Not Allowed" });
  }
};