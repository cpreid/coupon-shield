const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const pkgPath = path.join(root, "package.json");
const outPath = path.join(root, "src", "version.ts");

const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
const version = String(pkg.version || "0.0.0");

const content = `// Auto-generated from package.json. Do not edit by hand.\nexport const VERSION = "${version}";\n`;
fs.writeFileSync(outPath, content, "utf8");

console.log(`version.ts updated to ${version}`);
