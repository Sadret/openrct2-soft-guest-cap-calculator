/*****************************************************************************
 * Copyright (c) 2020-2021 Sadret
 *
 * The OpenRCT2 plug-in "Soft Guest Cap Calculator" is licensed
 * under the GNU General Public License version 3.
 *****************************************************************************/

/// <reference path="./../../openrct2.d.ts" />

var notifyOnIncrease = context.sharedStorage.get("soft_guest_cap_calculator.notifyOnIncrease", true);
var notifyOnDecrease = context.sharedStorage.get("soft_guest_cap_calculator.notifyOnDecrease", false);

var last = 0;

var prepareNotify = function(forceNotify) {
	var sgc = park.suggestedGuestMaximum;
	if (sgc > last && notifyOnIncrease)
		return notify("increased to", sgc);
	if (sgc < last && notifyOnDecrease)
		return notify("decreased to", sgc);
	if (sgc === last && forceNotify)
		return notify("is", sgc);
}

var notify = function(wording, sgc) {
	var text = "soft guest cap " + wording + " " + sgc;
	if (scenario.objective.type === "guestsBy" || scenario.objective.type === "guestsAndRating")
		text += " (" + Math.floor(100 * sgc / scenario.objective.guests) + "%)";
	park.postMessage({
		type: "blank",
		text: text,
	});
	last = sgc;
}

var handle = undefined;
var openWindow = function() {
	if (handle !== undefined)
		return;
	handle = ui.openWindow({
		classification: "soft-guest-cap-calculator",
		width: 128,
		height: 92,
		title: "SGC - Options",
		onClose: function() {
			handle = undefined;
		},
		widgets: [{
			type: "checkbox",
			text: "Notify on increase",
			isChecked: notifyOnIncrease,
			onChange: function(isChecked) {
				notifyOnIncrease = isChecked;
				context.sharedStorage.set("soft_guest_cap_calculator.notifyOnIncrease", notifyOnIncrease);
			},
			x: 5,
			y: 20,
			width: 118,
			height: 12,
		}, {
			type: "checkbox",
			text: "Notify on decrease",
			isChecked: notifyOnDecrease,
			onChange: function(isChecked) {
				notifyOnDecrease = isChecked;
				context.sharedStorage.set("soft_guest_cap_calculator.notifyOnDecrease", notifyOnDecrease);
			},
			x: 5,
			y: 36,
			width: 118,
			height: 12,
		}, {
			type: "button",
			text: "Notify now",
			onClick: function() {
				prepareNotify(true);
			},
			x: 5,
			y: 57,
			width: 118,
			height: 14,
		}, {
			type: "label",
			text: "(Default hotkey: C)",
			x: 5,
			y: 74,
			width: 118,
			height: 12,
		}],
	});
}

registerPlugin({
	name: "soft guest cap calculator",
	version: "2.0.1",
	authors: ["Sadret", "Mar-Koeh"],
	type: "local",
	licence: "GPL-3.0",
	minApiVersion: 29,
	main: function() {
		ui.registerShortcut({
			id: "sgc.notify",
			text: "[SGC] Soft guest cap",
			bindings: ["C"],
			callback: function() {
				prepareNotify(true);
			},
		});
		context.subscribe(
			"interval.day",
			function() {
				prepareNotify(false);
			}
		);
		ui.registerMenuItem(
			"Soft Guest Cap Calculator",
			function() {
				openWindow();
			}
		);
	},
});