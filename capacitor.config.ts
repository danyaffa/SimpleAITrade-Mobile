// FILE: capacitor.config.ts
import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.leffler.simpleaitrade",
  appName: "SimpleAITrade",
  webDir: "www",
  bundledWebRuntime: false,
  server: {
    // 👇 This is your existing web app
    url: "https://simpleaitrade.com",
    cleartext: true
  }
};

export default config;
