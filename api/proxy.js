export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyzwNUuRPbCIQR7ftiVQR15Ul3T6GqAp0W67jqQRiZnVgQA_54kYY1--QpOVHZKhIRC/exec", {
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
  console.log(data); // log data response
};