/*
	@plugin
	@name GrowStocks Theme Customization Plugin
	@version 2.1
	@author Jabo
	@description A plugin that gives you power to take control over the website's design.
	@localStoragePrefix gsCTheme-
	@endplugin
*/

const gstcName = "GrowStocks Theme Customization";
const gstcDescription = "A plugin that gives you power to take control over the website's design.";
const gstcVersion = "2.1";
const gstcDeveloper = "Jabo#7775";

let communityThemes = null;

const gstcThemePropertyDescriptionMapping = {
	accentColor: "Color of the header and footer including the navigation bar",
	backgroundColor: "Background color or image of the main background",

	headerBackground: "Background color or image of the header's background (will override the accent color)",

	navBarShadow: "Navigation bar shadow",
	navBarActivePage: "Background color or image of the current active page on the navigation bar",
	navBarForegroundColor: "Text color of the navigation bar",

	searchButtonBackground: "Background color or image of the search button",
	searchButtonShadow: "Search button's shadow",
	searchButtonForeground: "Text color of the search button",
	searchButtonBorderRadius: "Search button's border radius",

	priceChartShadow: "Shadow of the price graph on an item's page",

	itemChipBackground: "Background color or image of a default window such as this GUI",
	itemChipForeground: "Text color of a default window such as this GUI",
	itemChipShadow: "Shadow of a default window such as this GUI",
	itemChipBorder: "Border of a default window such as this GUI",

	titleBarBackground: "Background color or image of a title window",
	titleBarForeground: "Text color of a title window",
	titleBarShadow: "Shadow of a title window",
	titleBarBorder: "Border of a title window",

	footerBackground: "Background color or image of the footer's background (will override the accent color)",
	footerShadow: "Shadow of the footer",
	footerForeground: "Text color of the footer"
}

function getTheme() {

	const theme = {
		accentColor: localStorage.getItem("gsCTheme-accentColor") || "",
		backgroundColor: localStorage.getItem("gsCTheme-backgroundColor") || "",

		headerBackground: localStorage.getItem("gsCTheme-headerBackground") || "",

		navBarShadow: localStorage.getItem("gsCTheme-navBarShadow") || "",
		navBarActivePage: localStorage.getItem("gsCTheme-navBarActivePage") || "",
		navBarForegroundColor: localStorage.getItem("gsCTheme-navBarForegroundColor") || "",

		searchButtonBackground: localStorage.getItem("gsCTheme-searchButtonBackground") || "",
		searchButtonForeground: localStorage.getItem("gsCTheme-searchButtonForeground") || "",
		searchButtonShadow: localStorage.getItem("gsCTheme-searchButtonShadow") || "",
		searchButtonBorderRadius: localStorage.getItem("gsCTheme-searchButtonBorderRadius") || "",

		priceChartShadow: localStorage.getItem("gsCTheme-priceChartShadow") || "",

		itemChipBackground: localStorage.getItem("gsCTheme-itemChipBackground") || "",
		itemChipForeground: localStorage.getItem("gsCTheme-itemChipForeground") || "",
		itemChipShadow: localStorage.getItem("gsCTheme-itemChipShadow") || "",
		itemChipBorder: localStorage.getItem("gsCTheme-itemChipBorder") || "",

		titleBarBackground: localStorage.getItem("gsCTheme-titleBarBackground") || "",
		titleBarForeground: localStorage.getItem("gsCTheme-titleBarForeground") || "",
		titleBarShadow: localStorage.getItem("gsCTheme-titleBarShadow") || "",
		titleBarBorder: localStorage.getItem("gsCTheme-titleBarBorder") || "",

		footerBackground: localStorage.getItem("gsCTheme-footerBackground") || "",
		footerShadow: localStorage.getItem("gsCTheme-footerShadow") || "",
		footerForeground: localStorage.getItem("gsCTheme-footerForeground") || "",
	}

	return theme;
}

function gstcLoadTheme(theme) {
	$("body").css("background", theme.backgroundColor);
	$("footer").css("background", theme.footerBackground || theme.accentColor);
	$("footer, footer *").css("color", theme.footerForeground);
	$("footer hr").css("background-color", theme.footerForeground);
	$("footer hr").css("border-color", theme.footerForeground);
	$("footer a p").css("border", "1px solid " + theme.footerForeground);
	$(".navBar").css("background", theme.accentColor);
	$(".navBar .active").css("background", theme.navBarActivePage);
	$(".navBar").css("box-shadow", theme.navBarShadow);
	$(".navBar *").css("color", theme.navBarForegroundColor);
	$("footer").css("box-shadow", theme.footerShadow);
	$("header").css("background", theme.headerBackground || theme.accentColor + (theme.accentColor.startsWith("#") && theme.accentColor.length < 7 ? "BB" : ""));
	$("#searchButton").css("background", theme.searchButtonBackground);
	$("#searchButton").css("box-shadow", theme.searchButtonShadow);
	$("#searchButton").css("color", theme.searchButtonForeground);
	$("#searchButton").css("border-radius", theme.searchButtonBorderRadius);
	$(".chartWrap").css("box-shadow", theme.priceChartShadow);
	$(".floatButton, .floatButton2").css("background", theme.accentColor);
	$("div").css("background-size", "cover!important");

	const itemChips = $(".itemChipHead");
	const itemChipsChild = $(".itemChipHead h4, .itemChipHead b, .itemChipHead p, .itemChipHead h2, .itemChipHead a, .itemChipHead .reportPrice");
	itemChips.css("box-shadow", theme.itemChipShadow);
	itemChips.css("background", theme.itemChipBackground);
	itemChips.css("border", theme.itemChipBorder);
	itemChipsChild.css("color", theme.itemChipForeground);

	const titleBars = $(".titleBar2, .titleBar, .titleBar3");
	const titleBarsChild = $(".titleBar2 h2, .titleBar2 b, .titleBar2 p, .titleBar h2, .titleBar b, .titleBar p, .titleBar p span, .titleBar h3, .titleBar3 h2, .titleBar3 b, .titleBar3 p");
	titleBars.css("background", theme.titleBarBackground);
	titleBars.css("box-shadow", theme.titleBarShadow);
	titleBars.css("border", theme.titleBarBorder);
	titleBarsChild.css("color", theme.titleBarForeground);
	
}

async function gstcCreateGUI() {
	const generateInputRow = (propertyName, propertyValue) => {
		return `
			<div style="width: 100%; text-align: left; margin-bottom: 0.5rem">
				<p style="width: 100%"><b>${propertyName.split(/(?=[A-Z])/).join(" ").replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); })}: </b></p>
				<p style="width: 100%; margin-bottom: 0.3rem; font-size: 0.8rem">${gstcThemePropertyDescriptionMapping[propertyName]}</p>
				<input data-theme-input data-field="${propertyName}" style="width: 80%; color: white" class="GTText suggPrice" placeholder="Leave empty to use GrowStocks's default styling" value="${propertyValue}"/>
			</div>
		`
	}

	let fields = Object.entries(getTheme());
	fields = fields.map(([key, value]) => generateInputRow(key, value));

	const currentDay = new Date();
	const requestTimestamp = currentDay.getHours();

	let themes = await fetch(`https://raw.githubusercontent.com/jabo-bernardo/gs-theme-plugin/master/themes/themes-list.json?v=${requestTimestamp}`);
	themes = await themes.json();
	communityThemes = themes;

	const guiLayoutCode = `
		<p>Import via JSON</p>
		<textarea class="json-import" style="padding: 10px; width: 80%; background: transparent; color: #FFFFFF; font-weight: bold; font-family: monospace; border: 5px solid #bee8f1; box-shadow: #000 3px 3px, #000 3px 3px inset; border-radius: 7px;" rows="4" placeholder="Paste the JSON file contents here"></textarea><br/>
		<button class="growButton growCancelButton import-theme-json">Import Theme</button><br/>
		<br/>
		<p>Community Themes</p>
		<p style="font-size: 0.8rem;">These are the themes that was submitted by the GrowStocks community. Share your theme by <a href="https://discord.gg/GMucqpWYE4">joining the GrowStocks Discord Server</a> and send a DM to <b>Jabo#7775</b></p>
		<select class="community-import" style="margin-bottom: 0.35rem; padding: 10px; width: 80%; background: transparent; color: #FFFFFF; font-weight: bold; border: 5px solid #bee8f1; box-shadow: #000 3px 3px, #000 3px 3px inset; border-radius: 7px;">
			${themes && themes.map(theme => `<option style="color: #1E1E1E">${theme.themeName}</option>`)}
		</select><br/>
		<button class="growButton growCancelButton import-theme-community">Import Theme</button><br/>
		<br/>
		<br/>
		<p>Customize</p>
		<p style="font-size: 0.8rem;">All of the value should be a valid CSS value</p>
		<p style="font-size: 0.8rem;">Tip: to use image as background use this as a value <code>url("paste image url here")</code></p>
		${fields.join("")}
  `;

	const floatButtonCode = `
		<div class="gstcTrigger" style="cursor: pointer; color: #1E1E1E; display: flex; align-items: center; justify-content: center; position: fixed; width: 50px; height: 50px; background-color: #FFF; border-radius: 50%; bottom: 1rem; right: 1rem; box-shadow: 0 0 5px rgb(0 0 0 / 65%); z-index: 100;">
			<span style="color: #1E1E1E!important; font-size: 2rem" class="material-icons">brush</span>
		</div>
	`

	const modal = `
		<div class="GTModal gstcModal">
		<div class="successBox">
				<div class="header">
						<span class="growsprite"><img src="https://cdn.growstocks.xyz/item/favicon.png" title="Paintbrush icon" itemsprite></span>&nbsp;&nbsp;&nbsp;<p style="font-family: CenturyGothicBold;font-size: 30px;">${gstcName} v${gstcVersion}</p><br/>
						<p>${gstcDescription} by ${gstcDeveloper}</p>
				</div>
				<div class="colorable">
						<br>
						${guiLayoutCode}
						</p>
						<button class="growButton gsct-apply">Apply Theme</button>
						<button class="growButton gsct-export">Export or Share Theme</button>
						<button class="growButton gsct-close growCancelButton">Close</button>
				</div>
		</div>
</div>
	`

	$("body").append(floatButtonCode)
	$("body").append(modal);

	$(".gsct-apply").on("click", gstcApplyTheme);
	$(".gsct-export").on("click", gstcExportTheme);
	$(".import-theme-json").on("click", gstcImportThemeJSON);
	$(".import-theme-community").on("click", gstcImportThemeCommunity);
	$(".gstcTrigger").on("click", gsctOpenModal);
	$(".gsct-close").on("click", gsctCloseModal);
}

function gsctCloseModal() {
	$(".gstcModal").animate({
		height: "toggle",
	}, 500, function(){
			$(".dark-bg").fadeOut();
	});
}

function gsctOpenModal() {
	$(".dark-bg").fadeIn(function(){
		$(".gstcModal").animate({
				height: "toggle"
			}, 500);
	});
}

function gstcApplyTheme() {
	$("*[data-theme-input]").each(function (index) {
		localStorage.setItem(`gsCTheme-${$(this).attr('data-field')}`, $(this).val());
	})
	gstcLoadTheme(getTheme());
	gsctCloseModal()
}

function gstcImportThemeJSON() {
	const validKeys = Object.keys(getTheme());
	try {
		const jsonTheme = JSON.parse($(".json-import").val());
		validKeys.forEach(value => {
			localStorage.setItem(`gsCTheme-${value}`, jsonTheme[value]);
			$(`input[data-field=${value}]`).val(jsonTheme[value]);
		});
		gsctCloseModal()
		gstcLoadTheme(getTheme());
	} catch(err) {
		alert("Invalid theme. Please try again");
	}
}

async function gstcImportThemeCommunity() {
	const validKeys = Object.keys(getTheme());
	const communityTheme = communityThemes.find(theme => theme.themeName === $(".community-import").val());
	if(!communityTheme.url) return alert("Please select a community theme from the dropdown menu");
	$(".import-theme-community").html("Importing...");
	$(".import-theme-community").attr("disabled", "true");
	let theme = await fetch(communityTheme.url);
	theme = await theme.json().catch(err => { 
		console.error(err); 
		$(".import-theme-community").removeAttr("disabled")
		$(".import-theme-community").html("Import Theme"); 
		alert("Failed to load the selected theme.") 
	});
	validKeys.forEach(value => {
		localStorage.setItem(`gsCTheme-${value}`, theme[value]);
		$(`input[data-field=${value}]`).val(theme[value]);
	});
	gstcLoadTheme(getTheme());
	$(".import-theme-community").html("Imported!");
	setTimeout(() => {
		$(".import-theme-community").removeAttr("disabled");
		$(".import-theme-community").html("Import Theme");
	}, 1000);
	gsctCloseModal()
}

function gstcExportTheme() {
	downloadObjectAsJson(getTheme(), prompt("Please name your theme"));
}

function downloadObjectAsJson(obj, exportName) {
	const dataUri = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
	const downloadElement = document.createElement('a');
	downloadElement.setAttribute("href", dataUri);
	downloadElement.setAttribute("download", exportName + ".json");
	$("body").append(downloadElement);
	downloadElement.click();
	downloadElement.remove();
}

function gstcRun() {
	gstcCreateGUI();
	gstcLoadTheme(getTheme());
}

gstcRun();