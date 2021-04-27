const fs = require('fs');
const path = require('path');

const oldFiles = fs.readdirSync(path.join(__dirname, '../../themes')).filter(file => file.endsWith('.json') && file != "themes-list.json");
console.log(oldFiles);
oldFiles.forEach(fileName => {
	const fileContents = fs.readFileSync(path.join(__dirname, `../../themes/${fileName}`)).toString();
	const theme = JSON.parse(fileContents);
	const finalTheme = {
		"Main-Container": {
			"background": theme.backgroundColor
		},
		"Header": {
			"background": theme.headerBackground || theme.accentColor
		},
		"Navigation-Bar": {
			background: theme.accentColor,
			"box-shadow": theme.navBarShadow
		},
		"Navigation-Bar-Item-or-Link": {
			color: theme.navBarForegroundColor
		},
		"Navigation-Bar-Active-Page": {
			background: theme.navBarActivePage
		},
		"Search-Button": {
			background: theme.searchButtonBackground,
			"box-shadow": theme.searchButtonShadow,
			"border-radius": theme.searchButtonBorderRadius
		},
		"Search-Button-Icon": {
			color: theme.navBarForegroundColor
		},
		"Title-Bar": {
			background: theme.titleBarBackground,
			"box-shadow": theme.titleBarShadow,
			border: theme.titleBarBorder
		},
		"Title-Bar-Text": {
			color: theme.titleBarForeground
		},
		"Title-Bar-Growtopia-Button": {},
		"Title-Bar:-FAQ-Container": {},
		"Title-Bar:-FAQ-Container-Text": {},
		"Item-Chip-Base": {
			"background": theme.itemChipBackground,
			"box-shadow": theme.itemChipShadow,
			"border": theme.itemChipBorder
		},
		"Item-Chip-Base-Text": {
			color: theme.itemChipForeground
		},
		"Item-Chip-Base-Button": {},
		"Item-Chip-Base-Button-Text": {},
		"Item-Chip-Base-Heading-or-Title": {},
		"Item-Chip-Base-Item-Name": {},
		"Item-Information-Container": {},
		"Item-Information-Status:-Success": {},
		"Item-Information-Status:-Warning": {},
		"Item-Information-Status:-Error": {},
		"Item-Information-Status:-Information": {},
		"Float-Buttons": {
			background: theme.accentColor,
			"box-shadow": theme.navBarShadow
		},
		"Float-Buttons-Text": {
			color: theme.navBarForegroundColor
		},
		"Float-Buttons:-Buy-Item-Button": {

		},
		"Float-Buttons:-Buy-Item-Button-Text": {
			color: theme.navBarForegroundColor
		},
		"Float-Buttons:-Sell-Item-Button": {
			
		},
		"Float-Buttons:-Sell-Item-Button-Text": {
			color: theme.navBarForegroundColor
		},
		"Float-Buttons:-Find-Offer-Button": {},
		"Float-Buttons:-Find-Offer-Button-Text": {
			color: theme.navBarForegroundColor
		},
		"Footer": {
			"background": theme.footerBackground || theme.accentColor,
			"box-shadow": theme.footerShadow
		},
		"Footer-Text": {
			color: theme.footerForeground
		},
		"Footer-Heading": {},
		"Footer-Links": {},
		"Footer-Social-Links": {},
		"meta": {
			"version": 3
		}
	}
	fs.writeFileSync(path.join(__dirname, `../../themes/v3/${fileName}`), JSON.stringify(finalTheme, null, 2));
})