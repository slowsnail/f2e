//
//  CalendarManager.m
//  f2e
//
//  Created by tianxuezhi on 2018/9/27.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "CalendarManager.h"
#import <React/RCTLog.h>
#import <React/RCTConvert.h>
#import <React/RCTEventEmitter.h>


@implementation CalendarManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString*)name details:(NSDictionary *)details)
{
  NSString *location = [RCTConvert NSString:details[@"location"]];
  NSDate *time = [RCTConvert NSDate:details[@"time"]];
  RCTLogInfo(@"Pretending to create an event %@ at %@ %@", name, location, time);
}

@end
