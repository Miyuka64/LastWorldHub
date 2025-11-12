import fs from "fs";
import path from "path";

// basit minify (boşlukları ve satır atlamalarını kaldırır)
function minify(content) {
  return content
    .replace(/\s+/g, " ")
    .replace(/>\s+</g, "><")
    .trim();
}

function copyAndMinify(srcDir, distDir) {
  if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

  for (const file of fs.readdirSync(srcDir)) {
    const srcPath = path.join(srcDir, file);
    const distPath = path.join(distDir, file);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      copyAndMinify(srcPath, distPath);
    } else {
      const content = fs.readFileSync(srcPath, "utf-8");
      const ext = path.extname(file);
      if ([".html", ".css", ".js"].includes(ext)) {
        fs.writeFileSync(distPath, minify(content));
      } else {
        fs.copyFileSync(srcPath, distPath);
      }
    }
  }
}

copyAndMinify("./src", "./dist");
console.log("✅ Build complete! Files are in dist/");
