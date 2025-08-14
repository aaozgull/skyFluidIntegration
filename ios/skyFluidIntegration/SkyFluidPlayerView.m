#import "SkyFluidPlayerView.h"
#import "YourSDKHeader.h" // whatever header for SkyPublisherPlayer

@implementation SkyFluidPlayerView {
  YourSDKPlayer *_player;
}

- (instancetype)init {
  if (self = [super init]) {
    _player = [[YourSDKPlayer alloc] initWithFrame:self.bounds];
    _player.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
    [self addSubview:_player];
  }
  return self;
}

- (void)startPlayer {
  [_player start];
}

- (void)removeFromSuperview {
  [_player stop];
  [super removeFromSuperview];
}

@end
