export default {
  expo: {
    name: "gleam-frontend",
    slug: "gleam-frontend",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/logo/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/logo/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "moe.theerapakg.gleam",
      googleServicesFile: process.env.IOS_GOOGLE_SERVICES,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/logo/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      permissions: ["android.permission.RECORD_AUDIO"],
      package: "moe.theerapakg.gleam",
      googleServicesFile: process.env.ANDROID_GOOGLE_SERVICES,
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/logo/favicon.png",
    },
    plugins: [
      "@react-native-firebase/app",
      "expo-font",
      "expo-router",
      [
        "expo-image-picker",
        {
          photosPermission:
            "The app accesses your photos and camera to let you share the picture with your hive.",
          cameraPermission:
            "The app accesses your photos and camera to let you share the picture with your hive.",
        },
      ],
      [
        "expo-build-properties",
        {
          ios: {
            useFrameworks: "static",
          },
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "46494948-a277-4a81-aa6a-a036fbca9b46",
      },
    },
    owner: "ice-gleam",
  },
};
