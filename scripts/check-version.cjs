const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const pkgPath = path.join(root, "package.json");
const versionPath = path.join(root, "src", "version.ts");

const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
const expected = String(pkg.version || "0.0.0");

if (!fs.existsSync(versionPath)) {
  console.error("version.ts is missing. Run `npm run build` first.");
  process.exit(1);
}

const content = fs.readFileSync(versionPath, "utf8");
const match = content.match(/VERSION\s*=\s*"([^"]+)"/);
const actual = match ? match[1] : null;

if (actual !== expected) {
  console.error(`version.ts (${actual}) does not match package.json (${expected}).`);
  console.error("Run `npm run build` to regenerate version.ts.");
  process.exit(1);
}

console.log(`version.ts matches package.json (${expected}).`);
