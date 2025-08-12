#
//  build_framework.sh
//  SkyFluid
//
//  Created by M.Hashim on 29/05/2025.
//

#!/bin/bash

set -e

FRAMEWORK_NAME="SkyPublisherPlayer"
OUTPUT_DIR="SkyFluidOutput"

rm -rf archives $OUTPUT_DIR
mkdir -p $OUTPUT_DIR

echo "📦 Archiving for iOS..."
xcodebuild archive \
  -workspace SkyFluid.xcworkspace \
  -scheme $FRAMEWORK_NAME \
  -sdk iphoneos \
  -archivePath "archives/ios" \
  SKIP_INSTALL=NO \
  BUILD_LIBRARY_FOR_DISTRIBUTION=YES

echo "🧪 Archiving for Simulator..."
xcodebuild archive \
  -workspace SkyFluid.xcworkspace \
  -scheme $FRAMEWORK_NAME \
  -sdk iphonesimulator \
  -archivePath "archives/simulator" \
  SKIP_INSTALL=NO \
  BUILD_LIBRARY_FOR_DISTRIBUTION=YES

echo "🔧 Creating XCFramework..."
xcodebuild -create-xcframework \
  -framework archives/ios.xcarchive/Products/Library/Frameworks/$FRAMEWORK_NAME.framework \
  -framework archives/simulator.xcarchive/Products/Library/Frameworks/$FRAMEWORK_NAME.framework \
  -output "$OUTPUT_DIR/$FRAMEWORK_NAME.xcframework"

echo "✅ XCFramework created at: $OUTPUT_DIR/$FRAMEWORK_NAME.xcframework"
