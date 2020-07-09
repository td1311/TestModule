//
//  Device.m
//  TestModule
//
//  Created by luvina on 7/9/20.
//

#import <UIKit/UIKit.h>
#import "Device.h"

@implementation Device

//export the name of the native module as 'Device' since no explicit name is mentioned
RCT_EXPORT_MODULE();

//exports a method getDeviceName to javascript
RCT_EXPORT_METHOD(getDeviceName:(RCTResponseSenderBlock)callback){
 @try{
   NSString *deviceName = [[UIDevice currentDevice] name];
   callback(@[[NSNull null], deviceName]);
 }
 @catch(NSException *exception){
   callback(@[exception.reason, [NSNull null]]);
 }
}

@end
