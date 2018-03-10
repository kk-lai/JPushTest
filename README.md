# JPushTest
Ionic v1 Testing code for JPush https://www.jiguang.cn/

# Notes
I make use of plugin jpush-phonegap-plugin, but the latest version of plugin doesn't work. I use version 3.3.2 instead.

To install the plugin:
ionic plugin add cordova-plugin-jcore@1.1.12
ionic plugin add jpush-phonegap-plugin@3.3.2 --variable APP_KEY=jpush_app_key

# Advantages of JPush
1. Not rely on Google Play Service, such that it is work in some China brand Android devices which do have have Google Play Service.
2. Work inside China.

