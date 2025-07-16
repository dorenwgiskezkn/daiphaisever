const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

// Phục vụ file tĩnh từ thư mục "public"
app.use(express.static("public"));

// Bắt tất cả route và trả về index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
