// src/openrct2/ride/RideData.cpp (legacy)
var rideBonusValue = [
	85, // 00 Spiral Roller coaster
	90, // 01 Stand Up Coaster
	90, // 02 Suspended Swinging
	100, // 03 Inverted
	60, // 04 Steel Mini Coaster
	50, // 05 Mini Railway
	60, // 06 Monorail
	50, // 07 Mini Suspended Coaster
	40, // 08 Boat Hire
	55, // 09 Wooden Wild Mine/Mouse
	60, // 0a Steeplechase/Motorbike/Soap
	50, // 0b Car Ride
	65, // 0c Launched Freefall
	75, // 0d Bobsleigh Coaster
	45, // 0e Observation Tower
	95, // 0f Looping Roller Coaster
	55, // 10 Dinghy Slide
	85, // 11 Mine Train Coaster
	55, // 12 Chairlift
	100, // 13 Corkscrew Roller Coaster
	40, // 14 Maze
	40, // 15 Spiral Slide
	55, // 16 Go Karts
	65, // 17 Log Flume
	70, // 18 River Rapids
	35, // 19 Dodgems
	35, // 1a Pirate Ship
	35, // 1b Swinging Inverter Ship
	15, // 1c Food Stall
	15, // 1d (none)
	15, // 1e Drink Stall
	15, // 1f (none)
	15, // 20 Shop (all types)
	45, // 21 Merry Go Round
	15, // 22 Balloon Stall (maybe)
	15, // 23 Information Kiosk
	5, // 24 Bathroom
	45, // 25 Ferris Wheel
	45, // 26 Motion Simulator
	45, // 27 3D Cinema
	55, // 28 Topspin
	30, // 29 Space Rings
	70, // 2a Reverse Freefall Coaster
	45, // 2b Elevator
	95, // 2c Vertical Drop Roller Coaster
	5, // 2d ATM
	40, // 2e Twist
	22, // 2f Haunted House
	5, // 30 First Aid
	39, // 31 Circus Show
	50, // 32 Ghost Train
	120, // 33 Twister Roller Coaster
	105, // 34 Wooden Roller Coaster
	65, // 35 Side-Friction Roller Coaster
	55, // 36 Wild Mouse
	100, // 37 Multi Dimension Coaster
	100, // 38 (none)
	100, // 39 Flying Roller Coaster
	100, // 3a (none)
	50, // 3b Virginia Reel
	65, // 3c Splash Boats
	45, // 3d Mini Helicopters
	100, // 3e Lay-down Roller Coaster
	60, // 3f Suspended Monorail
	100, // 40 (none)
	65, // 41 Reverser Roller Coaster
	35, // 42 Heartline Twister Roller Coaster
	23, // 43 Mini Golf
	120, // 44 Giga Coaster
	45, // 45 Roto-Drop
	35, // 46 Flying Saucers
	22, // 47 Crooked House
	45, // 48 Monorail Cycles
	80, // 49 Compact Inverted Coaster
	60, // 4a Water Coaster
	70, // 4b Air Powered Vertical Coaster
	55, // 4c Inverted Hairpin Coaster
	35, // 4d Magic Carpet
	40, // 4e Submarine Ride
	65, // 4f River Rafts
	15, // 50 (none)
	45, // 51 Enterprise
	15, // 52 (none)
	15, // 53 (none)
	15, // 54 (none)
	100, // 55 (none)
	75, // 56 Inverted Impulse Coaster
	60, // 57 Mini Roller Coaster
	70, // 58 Mine Ride
	55, // 59 (none)
	55, // 5a LIM Launched Roller Coaster
];

// src/openrct2/ride/Ride.h
var RIDE_TYPE_SPIRAL_ROLLER_COASTER = 0;
var RIDE_TYPE_STAND_UP_ROLLER_COASTER = 1;
var RIDE_TYPE_SUSPENDED_SWINGING_COASTER = 2;
var RIDE_TYPE_INVERTED_ROLLER_COASTER = 3;
var RIDE_TYPE_JUNIOR_ROLLER_COASTER = 4;
var RIDE_TYPE_MINIATURE_RAILWAY = 5;
var RIDE_TYPE_MONORAIL = 6;
var RIDE_TYPE_MINI_SUSPENDED_COASTER = 7;
var RIDE_TYPE_BOAT_HIRE = 8;
var RIDE_TYPE_WOODEN_WILD_MOUSE = 9;
var RIDE_TYPE_STEEPLECHASE = 10;
var RIDE_TYPE_CAR_RIDE = 11;
var RIDE_TYPE_LAUNCHED_FREEFALL = 12;
var RIDE_TYPE_BOBSLEIGH_COASTER = 13;
var RIDE_TYPE_OBSERVATION_TOWER = 14;
var RIDE_TYPE_LOOPING_ROLLER_COASTER = 15;
var RIDE_TYPE_DINGHY_SLIDE = 16;
var RIDE_TYPE_MINE_TRAIN_COASTER = 17;
var RIDE_TYPE_CHAIRLIFT = 18;
var RIDE_TYPE_CORKSCREW_ROLLER_COASTER = 19;
var RIDE_TYPE_MAZE = 20;
var RIDE_TYPE_SPIRAL_SLIDE = 21;
var RIDE_TYPE_GO_KARTS = 22;
var RIDE_TYPE_LOG_FLUME = 23;
var RIDE_TYPE_RIVER_RAPIDS = 24;
var RIDE_TYPE_DODGEMS = 25;
var RIDE_TYPE_SWINGING_SHIP = 26;
var RIDE_TYPE_SWINGING_INVERTER_SHIP = 27;
var RIDE_TYPE_FOOD_STALL = 28;
var RIDE_TYPE_ = 29;
var RIDE_TYPE_DRINK_STALL = 30;
var RIDE_TYPE_ = 31;
var RIDE_TYPE_SHOP = 32;
var RIDE_TYPE_MERRY_GO_ROUND = 33;
var RIDE_TYPE_ = 34;
var RIDE_TYPE_INFORMATION_KIOSK = 35;
var RIDE_TYPE_TOILETS = 36;
var RIDE_TYPE_FERRIS_WHEEL = 37;
var RIDE_TYPE_MOTION_SIMULATOR = 38;
var RIDE_TYPE_ = 39;
var RIDE_TYPE_TOP_SPIN = 40;
var RIDE_TYPE_SPACE_RINGS = 41;
var RIDE_TYPE_REVERSE_FREEFALL_COASTER = 42;
var RIDE_TYPE_LIFT = 43;
var RIDE_TYPE_VERTICAL_DROP_ROLLER_COASTER = 44;
var RIDE_TYPE_CASH_MACHINE = 45;
var RIDE_TYPE_TWIST = 46;
var RIDE_TYPE_HAUNTED_HOUSE = 47;
var RIDE_TYPE_FIRST_AID = 48;
var RIDE_TYPE_CIRCUS = 49;
var RIDE_TYPE_GHOST_TRAIN = 50;
var RIDE_TYPE_TWISTER_ROLLER_COASTER = 51;
var RIDE_TYPE_WOODEN_ROLLER_COASTER = 52;
var RIDE_TYPE_SIDE_FRICTION_ROLLER_COASTER = 53;
var RIDE_TYPE_STEEL_WILD_MOUSE = 54;
var RIDE_TYPE_MULTI_DIMENSION_ROLLER_COASTER = 55;
var RIDE_TYPE_MULTI_DIMENSION_ROLLER_COASTER_ALT = 56;
var RIDE_TYPE_FLYING_ROLLER_COASTER = 57;
var RIDE_TYPE_FLYING_ROLLER_COASTER_ALT = 58;
var RIDE_TYPE_VIRGINIA_REEL = 59;
var RIDE_TYPE_SPLASH_BOATS = 60;
var RIDE_TYPE_MINI_HELICOPTERS = 61;
var RIDE_TYPE_LAY_DOWN_ROLLER_COASTER = 62;
var RIDE_TYPE_SUSPENDED_MONORAIL = 63;
var RIDE_TYPE_LAY_DOWN_ROLLER_COASTER_ALT = 64;
var RIDE_TYPE_REVERSER_ROLLER_COASTER = 65;
var RIDE_TYPE_HEARTLINE_TWISTER_COASTER = 66;
var RIDE_TYPE_MINI_GOLF = 67;
var RIDE_TYPE_GIGA_COASTER = 68;
var RIDE_TYPE_ROTO_DROP = 69;
var RIDE_TYPE_FLYING_SAUCERS = 70;
var RIDE_TYPE_CROOKED_HOUSE = 71;
var RIDE_TYPE_MONORAIL_CYCLES = 72;
var RIDE_TYPE_COMPACT_INVERTED_COASTER = 73;
var RIDE_TYPE_WATER_COASTER = 74;
var RIDE_TYPE_AIR_POWERED_VERTICAL_COASTER = 75;
var RIDE_TYPE_INVERTED_HAIRPIN_COASTER = 76;
var RIDE_TYPE_MAGIC_CARPET = 77;
var RIDE_TYPE_SUBMARINE_RIDE = 78;
var RIDE_TYPE_RIVER_RAFTS = 79;
var RIDE_TYPE_ = 80;
var RIDE_TYPE_ENTERPRISE = 81;
var RIDE_TYPE_ = 82;
var RIDE_TYPE_ = 83;
var RIDE_TYPE_ = 84;
var RIDE_TYPE_ = 85;
var RIDE_TYPE_INVERTED_IMPULSE_COASTER = 86;
var RIDE_TYPE_MINI_ROLLER_COASTER = 87;
var RIDE_TYPE_MINE_RIDE = 88;
var RIDE_TYPE_ = 89;
var RIDE_TYPE_LIM_LAUNCHED_ROLLER_COASTER = 90;
var RIDE_TYPE_HYPERCOASTER = 91;
var RIDE_TYPE_HYPER_TWISTER = 92;
var RIDE_TYPE_MONSTER_TRUCKS = 93;
var RIDE_TYPE_SPINNING_WILD_MOUSE = 94;
var RIDE_TYPE_CLASSIC_MINI_ROLLER_COASTER = 95;
var RIDE_TYPE_COUNT = 96;

// src/openrct2/rct2/RCT2.cpp
var OpenRCT2RideTypeToRCT2RideType = function(openrct2Type) {
	switch (openrct2Type) {
		case RIDE_TYPE_HYPERCOASTER:
			return RIDE_TYPE_CORKSCREW_ROLLER_COASTER;
		case RIDE_TYPE_CLASSIC_MINI_ROLLER_COASTER:
			return RIDE_TYPE_JUNIOR_ROLLER_COASTER;
		case RIDE_TYPE_MONSTER_TRUCKS:
			return RIDE_TYPE_CAR_RIDE;
		case RIDE_TYPE_HYPER_TWISTER:
			return RIDE_TYPE_TWISTER_ROLLER_COASTER;
		case RIDE_TYPE_SPINNING_WILD_MOUSE:
			return RIDE_TYPE_STEEL_WILD_MOUSE;

		default:
			return openrct2Type;
	}
};

var calculateSoftGuestCap = function() {
	var sgc = 0;
	for (var idx = 0; idx < map.rides.length; idx++) {
		var ride = map.rides[idx];
		var type = OpenRCT2RideTypeToRCT2RideType(ride.type);
		if (ride.status === "open")
			sgc += rideBonusValue[type];
	}
	return sgc;
};

var notify = function(sgc, wording) {
	park.postMessage({
		type: "blank",
		text: "soft guest cap " + wording + " " + sgc + " guests",
	});
}

function main() {
	ui.registerMenuItem("Calculate soft guest cap", function() {
		notify(calculateSoftGuestCap(), "is");
	});
	var sgc = 0;
	context.subscribe("interval.day", function() {
		var calc = calculateSoftGuestCap();
		if (sgc == calc)
			return;
		if (sgc < calc)
			notify(calc, "increased to");
		else
			notify(calc, "decreased to");
		sgc = calc;
	});
}

registerPlugin({
	name: 'soft guest cap calculator',
	version: '1.0',
	authors: ['Sadret'],
	type: 'local',
	licence: 'MIT',
	main: main,
});