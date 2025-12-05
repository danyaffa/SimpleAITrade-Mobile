// FILE: capacitor.config.ts
import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.leffler.simpleaitrade",
  appName: "SimpleAITrade",
  webDir: "www",
  bundledWebRuntime: false,
server: {
  url: "https://www.simpleaitrade.com/",
  cleartext: true
}
};

export default config;
