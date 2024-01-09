const { readFileSync, writeFileSync } = require("fs");

function checkConfig() {
  const configFile = readFileSync("./config.json", { encoding: "utf-8", flag: "a+" });
  if (!configFile.length) {
    writeFileSync(
      "./config.json",
      JSON.stringify({ TOKEN: "MTE5NDM1NDc5Mzc5NjM1NDE2OQ.GcjbHm.uccL-FeQCr3-mfCOXk9C4zoGH2DLEWkCIEOTWk" }, undefined, 2)
    );
    console.warn("[CONFIG] Config dosyası sıfırdan oluşturuldu. Lütfen ayarları doldurunuz.");
    return false;
  }
  return true;
}

module.exports = {
  checkConfig,
};
