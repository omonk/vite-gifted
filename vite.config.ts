import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const extensions = [
  ".web.tsx",
  ".tsx",
  ".web.ts",
  ".ts",
  ".web.jsx",
  ".jsx",
  ".web.js",
  ".js",
  ".css",
  ".json",
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
      resolveExtensions: extensions,
    },
  },
  resolve: {
    alias: {
      "react-native": "react-native-web",
      "react-native$": "react-native-web",
      "react-native-device-info":
        "react-native-web/dist/exports/DeviceInfo/index.js",
      "@react-native-community/segmented-control":
        "react-native-web/dist/exports/SegmentedControlIOS/index.js",
      "@react-native-community/netinfo":
        "react-native-web/dist/exports/NetInfo/index.js",
      "@react-native-community/async-storage":
        "react-native-web/dist/exports/AsyncStorage/index.js",
    },
  },
  esbuild: {
    loader: "tsx",
  },
});
