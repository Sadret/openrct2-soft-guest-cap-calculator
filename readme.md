# OpenRCT2 Soft Guest Cap Calculator

This OpenRCT2 plugin calculates the soft guest cap for your park and notifies you if it changes.

## Installation

1. Make sure that your OpenRCT2 version is up-to-date (`v0.3.0` or newer)
2. Download the `soft-guest-cap-calculator.js` file and save it in your OpenRCT2 `plugin` folder.\
(Right-click [here](https://raw.githubusercontent.com/Sadret/openrct2-soft-guest-cap-calculator/master/soft-guest-cap-calculator.js) and select "save as" or similar).\
On Windows, this is usually at `C:Users\{User}\Documents\OpenRCT2\plugin`.
3. Start OpenRCT2. The plugin should immediately start working.

## Usage

The plugin calculates the soft guest cap as the sum of the bonus values of all open rides. This is actually not totally accurate:
- Broken or crashed rides do not count into the cap. I personally think this is not a problem at all, as you generally want to know the soft guest cap assuming everything is open and running. If you still want to see the slightly guest cap after subtracting the broken rides, there is a menu to show the current value.
- If "harder guest generation" is enabled for the scenario, the formula is different. The cap for boring rides is capped at 1000 guests, but exciting rides give another cap boost. (See below for more detail.)

The plugin automatically detects when the soft guest cap changes and gives a notification through the in-game message system. The soft guest cap is calculated every in-game day, so it might take a moment until you get a notification.\
At any moment, if you want to get the current cap right now, you can click on the map icon in the upper left toolbar and select `Calculate soft guest cap`. This will immediately trigger a new notification.

## Planned features and why they cannot be implemented right now

- Adjust the calculation for "harder guest generation" scenarios, preferably automatically. Whether this value is needed, is read from the flags of the park. Also code for the calucation of this adjusted soft guest cap has been implemented. However, this code is not yet used as it is not yet accurate. The reason is that the adjusted guest cap adds a bonus for good rides. Three of the factors do not have an easy API. Two of them are flags of the ride type. This could be implemented by hard-coding a mapping between flag type and the value of the flag. See: OpenRCT2/OpenRCT2#12706 The third factor is the length between the first and the second station. At the moment, the internal API know this value. The plugins API can only indirectly provide this value by path-finding from one station to the other and determining the length of this track segment. See OpenRCT2/OpenRCT2#12705
- Bind a hotkey to trigger an instant notification. This requires the plugin API to bind hotkeys. A feature like that has been removed: OpenRCT2/OpenRCT2#12704 For now, only the map menu provides a such a trigger.


## Newly added features and how they have been hacked in

The API has evolved since the creation of this plugin. This allowed some additional features. See: OpenRCT2/OpenRCT2#12703

- Give an option to include or exclude broken or crashed rides. ~~This requires the plugin API to provide information about broken or crashed rides.~~ The API for that is not pretty. The information can be extracted from the lifecycle flags of each ride. The definition of the flags has been extracted from the game's code. Using bitwise binary operations, the information is read. At the moment, the soft guest cap that does exclude broken rides, can only be triggered from the menu. This value is not yet watched automatically.
- Give the soft guest cap as a fraction of the required amount of guests. E.g. "The soft guest cap has increased to 1200 guests, which is 75% of the required guests." There is (now?) an API for that: `scenario.objective.guests`. In scenarios with `scenario.objective.type` set to `"guestsBy"`, the percentage is shown in addition to the absolute value.

## Contribution
 If you have an idea to improve this plugin, feel free to open an issue. Or a pull-request as @Mar-Koeh did.
