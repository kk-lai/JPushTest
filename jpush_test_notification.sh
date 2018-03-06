#!/bin/bash

APP_KEY={ appKey }
MASTER_SECRET={ masterSecret }

curl --insecure -X POST -v https://api.jpush.cn/v3/push -H "Content-Type: application/json" -u "$APP_KEY:$MASTER_SECRET" -d '{"platform":"all","audience":"all","notification":{"alert":"Hi,JPush !","android":{"extras":{"android-key1":"android-value1"}},"ios":{"sound":"sound.caf","badge":"+1","extras":{"ios-key1":"ios-value1"}}}}'


