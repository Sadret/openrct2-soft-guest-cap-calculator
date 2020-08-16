# OpenRCT2 Soft Guest Cap Calculator

This OpenRCT2 plugin calculates the soft guest cap for your park and notifies you if it changes.

## Installation

1. Make sure that your OpenRCT2 version is up-to-date (`v0.3.0` or newer)
2. Download the `soft-guest-cap-calculator.js` file and save it in your OpenRCT2 `plugin` folder.\
On Windows, this is usually at `C:Users\{User}\Documents\OpenRCT2\plugin`.
3. Start OpenRCT2. The plugin should immediately start working.

## Usage

The plugin calculates the soft guest cap as the sum of the bonus values of all open rides. This is actually not totally accurate:
- Broken or crashed rides do not count into the cap. I personally think this is not a problem at all, as you generally want to know the soft guest cap assuming everything is open and running.
- If "harder guest generation" is enabled for the scenario, the formula is different. The cap for boring rides is capped at 1000 guests, but exciting rides give another cap boost. (See below for more detail.)

The plugin automatically detects when the soft guest cap changes and gives a notification through the in-game message system. The soft guest cap is calculated every in-game day, so it might take a moment until you get a notification.\
At any moment, if you want to get the current cap right now, you can click on the map icon in the upper left toolbar and select `Calculate soft guest cap`. This will immediately trigger a new notification.

## Planned features and why they cannot be implemented right now

- Give an option to include or exclude broken or crashed rides. This requires the plugin API to provide information about broken or crashed rides.
- Adjust the calculation for "harder guest generation" scenarios, preferably automatically. For this to work, the API needs to provide information about the segment length of the track. If this calculation should be enabled automatically, it needs to be possible to detect those scenarios.
- Bind a hotkey to trigger an instant notification. This requires the plugin API to bind hotkeys.
- Give the soft guest cap as a fraction of the required amount of guests. E.g. "The soft guest cap has increased to 1200 guests, which is 75% of the required guests." For this to work, the API needs to provide information about the scenarios objective.

## Contribution
 If you have an idea to improve this plugin, feel free to open an issue.
