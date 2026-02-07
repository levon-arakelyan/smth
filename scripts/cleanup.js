import fs from "fs";
import path from "path";

const dist = path.resolve("dist");

const filesToRemove = [
  "200.html",
  "400.html",
  "404.html"
];

filesToRemove.forEach(file => {
  const filePath = path.join(dist, file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
});
