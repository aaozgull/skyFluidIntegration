import UIKit
import React
import React_RCTAppDelegate
import ReactAppDependencyProvider
import SkyPublisherPlayer

@main
class AppDelegate: UIResponder, UIApplicationDelegate {
  var window: UIWindow?

  var reactNativeDelegate: ReactNativeDelegate?
  var reactNativeFactory: RCTReactNativeFactory?

  func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil
  ) -> Bool {
    let clientID = "672b5b77459268796714fa95"
        let secretKey = "nYeabZMnxEppIS5pxpwA0SIRhDFdDKNi"
        let baseURL = "https://mobile-lon-lambda.covatic.io/"
        let projectID = "6034891"
        let apiKey = "5878f9f0-edd3-4623-b2af-0ba860f8fe23"
        let productionZoneID = "17437" //19027 //17437
        // ✅ Initialize SkyFluid SDK
        SkyFluidSDK.default.configure(by: productionZoneID)
       
        SkyFluidSDK.default.initIpsos(with: apiKey)
        SkyFluidSDK.default.initComscore(with: projectID)
    let delegate = ReactNativeDelegate()
    let factory = RCTReactNativeFactory(delegate: delegate)
    delegate.dependencyProvider = RCTAppDependencyProvider()

    reactNativeDelegate = delegate
    reactNativeFactory = factory

    window = UIWindow(frame: UIScreen.main.bounds)

    factory.startReactNative(
      withModuleName: "skyFluidIntegration",
      in: window,
      launchOptions: launchOptions
    )

    return true
  }
}

class ReactNativeDelegate: RCTDefaultReactNativeFactoryDelegate {
  override func sourceURL(for bridge: RCTBridge) -> URL? {
    self.bundleURL()
  }

  override func bundleURL() -> URL? {
#if DEBUG
    RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
#else
    Bundle.main.url(forResource: "main", withExtension: "jsbundle")
#endif
  }
}
