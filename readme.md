# OpenRCT2 Soft Guest Cap Calculator

This OpenRCT2 plugin calculates the soft guest cap for your park and automatically notifies you if it changes.

## What is the soft guest cap?

Every park has a suggested guest maximum, which is commonly "called soft guest cap". If the amount of guests in your park reaches this value, guest spawning will be reduced significantly, which makes it hard to increase the number of guests in your park beyond the cap.

The value depends on the type and number of attractions and stalls that you have built and opened in your park.\
For detailed information, look at [this guide by Deurklink](https://forums.openrct2.org/topic/2861-guide-when-and-how-do-guests-spawn/).

## Installation

1. Make sure that your OpenRCT2 version is up-to-date. You need at least version `0.3.4` (released July 2021).
2. Go to the [releases](https://github.com/Sadret/openrct2-soft-guest-cap-calculator/releases) page and download the `openrct2-soft-guest-cap-calculator-2.0.2.js` file from the latest release. Save it in the `plugin` subfolder of your OpenRCT2 user directory.\
On Windows, this is usually at `C:Users\{User}\Documents\OpenRCT2\plugin`.
3. Start OpenRCT2 and open a scenario.

## Usage

Each in-game day, the plug-in queries the soft guest cap from the game. If it has changed since the last time, the user will be notified by an in-game message.\
The user also has the option to use a hotkey (default: `C`) to instantly trigger this notification.

## Configuration

To open the configuration window of this plug-in, click on "Soft Guest Cap Calculator" in the map menu in the upper toolbar of OpenRCT2. Here you have the following options:

- "Notify on increase" [enabled by default]: If enabled, the plug-in automatically notifies you when the soft guest cap increases.
- "Notify on decrease" [disabled by default]: If enabled, the plug-in automatically notifies you when the soft guest cap decreases.
- "Notify now": immediately sends a soft guest cap notification.

The configuration will be saved in the `plugin.store.json` file in your OpenRCT2 user directory.

If you want to change the hotkey (default: `C`), go to the 'Controls and Interface' tab of OpenRCT2's 'Options' window.

## Notes

The automatic notification is only triggered if the cap increases above (decreases below) *the value that you was last notified about*.\
This means that with default settings, if you close a ride and reopen it, you will get no notifications. The main idea behind this behaviour is to prevent message spamming due to broken (or crashed) rides, which affect the soft guest cap.\
If you actually close or destroy rides and want to "reset" the plug-in, just press `C` once to trigger a notification.

## Support Me

If you find any bugs or if you have any ideas for improvements, you can open an issue on GitHub or contact me on Discord: Sadret#2502.

If you like this plug-in, please leave a star on GitHub.

If you really want to support me, you can [buy me a coffee](https://ko-fi.com/sadret).

## Thanks to
- @Mar-Koeh: Current guest cap as percentage of needed guests to meet scenario objective.

## Copyright and License

Copyright (c) 2020-2022 Sadret\
The OpenRCT2 plug-in "Soft Guest Cap Calculator" is licensed under the GNU General Public License version 3.
