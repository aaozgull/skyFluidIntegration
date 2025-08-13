import Foundation
import React
import SkyPublisherPlayer

@objc(SkyFluidModule)
class SkyFluidModule: NSObject {
  
  @objc static func requiresMainQueueSetup() -> Bool { return true }

//  @objc func fetchAllVideos(_ zoneID: String, resolver: @escaping RCTPromiseResolveBlock, rejecter: @escaping RCTPromiseRejectBlock) {
//    SkyFluidSDK.default.fetchAllVideos(by: zoneID) { success in
//      resolver(success)
//    }
//  }

  @objc func startPlayer() {
    DispatchQueue.main.async {
      if let rootVC = UIApplication.shared.delegate?.window??.rootViewController,
         let view = rootVC.view {
        SkyFluidSDK.default.startPlayer(from: rootVC, on: view)
      }
    }
  }

//   @objc func removePlayer() {
//     SkyFluidSDK.default.removePlayer()
//   }

//   @objc func setPiPVisible(_ isVisible: Bool) {
//     SkyFluidSDK.default.setFloatingPlayerPiPVisibility(isVisible)
//   }

  @objc func removePlayer() {
    DispatchQueue.main.async {
        SkyFluidSDK.default.removePlayer()
    }
}

@objc func setPiPVisible(_ isVisible: Bool) {
    DispatchQueue.main.async {
        SkyFluidSDK.default.setFloatingPlayerPiPVisibility(isVisible)
    }
}

}
