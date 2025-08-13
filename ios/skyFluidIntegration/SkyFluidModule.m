#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(SkyFluidModule, NSObject)

RCT_EXTERN_METHOD(fetchAllVideos:(NSString *)zoneID
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(startPlayer)

RCT_EXTERN_METHOD(removePlayer)

RCT_EXTERN_METHOD(setPiPVisible:(BOOL)isVisible)

@end
