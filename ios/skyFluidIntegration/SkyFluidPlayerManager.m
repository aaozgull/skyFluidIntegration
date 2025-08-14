#import <React/RCTViewManager.h>
#import "SkyFluidPlayerView.h" // this is your SDK’s UIView subclass

@interface SkyFluidPlayerManager : RCTViewManager
@end

@implementation SkyFluidPlayerManager

RCT_EXPORT_MODULE(SkyFluidPlayer)

- (UIView *)view {
  SkyFluidPlayerView *playerView = [[SkyFluidPlayerView alloc] init];
  // Initialize and start player here
  [playerView startPlayer]; 
  return playerView;
}

@end
