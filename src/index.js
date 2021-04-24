/*
	@plugin
	@name GrowStocks Theme Customization Plugin
	@version 1.1
	@author Jabo
	@description A plugin that gives you power to take control over the website's design.
	@endplugin
*/

const gstcName = "GrowStocks Theme Customization Beta";
const gstcDescription = "A plugin that gives you power to take control over the website's design.";
const gstcVersion = "1.1";
const gstcDeveloper = "Jabo#7775";

const gstcThemePropertyDescriptionMapping = {
	accentColor: "Color of the header and footer including the navigation bar",
	backgroundColor: "Color or Image URL of the main background",

	navBarShadow: "Navigation bar shadow",
	navBarActivePage: "Color of the current active page on the navigation bar",

	searchButtonBackground: "Color of the search button's background",
	searchButtonShadow: "Search button's shadow",

	priceChartShadow: "Shadow of the price graph on an item's page",

	itemChipBackground: "Background color of a default window such as this GUI",
	itemChipForeground: "Text color of a default window such as this GUI",
	itemChipShadow: "Shadow of a default window such as this GUI",
	itemChipBorder: "Border of a default window such as this GUI",

	titleBarBackground: "Background color of a title window",
	titleBarForeground: "Text color of a title window",
	titleBarShadow: "Shadow of a title window",
	titleBarBorder: "Border of a title window",

	footerBackground: "Color of the footer's background (will override the accent color)",
	footerShadow: "Shadow of the footer"
}

function getTheme() {

	const theme = {
		accentColor: localStorage.getItem("gsCTheme-accentColor") || "",
		backgroundColor: localStorage.getItem("gsCTheme-backgroundColor") || "",

		navBarShadow: localStorage.getItem("gsCTheme-navBarShadow") || "",
		navBarActivePage: localStorage.getItem("gsCTheme-navBarActivePage") || "",

		searchButtonBackground: localStorage.getItem("gsCTheme-searchButtonBackground") || "",
		searchButtonShadow: localStorage.getItem("gsCTheme-searchButtonShadow") || "",

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
		footerShadow: localStorage.getItem("gsCTheme-footerShadow") || ""
	}

	return theme;
}

function gstcLoadTheme(theme) {
	$("body").css("background", theme.backgroundColor);
	$("footer").css("background-color", theme.footerBackground || theme.accentColor);
	$(".navBar").css("background-color", theme.accentColor);
	$(".navBar .active").css("background-color", theme.navBarActivePage);
	$(".navBar").css("box-shadow", theme.navBarShadow);
	$("footer").css("box-shadow", theme.footerShadow);
	$("header").css("background-color", theme.accentColor + "BB");
	$("#searchButton").css("background-color", theme.searchButtonBackground);
	$("#searchButton").css("box-shadow", theme.searchButtonShadow);
	$(".chartWrap").css("box-shadow", theme.priceChartShadow);
	$(".floatButton, .floatButton2").css("background", theme.accentColor);

	const itemChips = $(".itemChipHead");
	const itemChipsChild = $(".itemChipHead h4, .itemChipHead b, .itemChipHead p, .itemChipHead h2, .itemChipHead a, .itemChipHead .reportPrice");
	itemChips.css("box-shadow", theme.itemChipShadow);
	itemChips.css("background-color", theme.itemChipBackground);
	itemChips.css("border", theme.itemChipBorder);
	itemChipsChild.css("color", theme.itemChipForeground);

	const titleBars = $(".titleBar2, .titleBar, .titleBar3");
	const titleBarsChild = $(".titleBar2 h2, .titleBar2 b, .titleBar2 p, .titleBar h2, .titleBar b, .titleBar p, .titleBar p span, .titleBar h3, .titleBar3 h2, .titleBar3 b, .titleBar3 p");
	titleBars.css("background-color", theme.titleBarBackground);
	titleBars.css("box-shadow", theme.titleBarShadow);
	titleBars.css("border", theme.titleBarBorder);
	titleBarsChild.css("color", theme.titleBarForeground);
}

function gstcCreateGUI() {
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

	const guiLayoutCode = `
		<p>Import via JSON</p>
		<textarea class="json-import" style="padding: 10px; width: 80%; background: transparent; color: #FFFFFF; font-weight: bold; font-family: monospace; border: 5px solid #bee8f1; box-shadow: #000 3px 3px, #000 3px 3px inset; border-radius: 7px;" rows="4" placeholder="Paste the JSON file contents here"></textarea><br/>
		<button class="growButton growCancelButton import-theme-json">Import Theme</button><br/>
		<br/>
		<p>Community Themes</p>
		<select class="community-import" style="margin-bottom: 0.35rem; padding: 10px; width: 80%; background: transparent; color: #FFFFFF; font-weight: bold; border: 5px solid #bee8f1; box-shadow: #000 3px 3px, #000 3px 3px inset; border-radius: 7px;">
			<option style="color: #1E1E1E">Default Theme</option>
			<option style="color: #1E1E1E">Cloow Nightmare</option>
		</select><br/>
		<button class="growButton growCancelButton import-theme-community">Import Theme</button><br/>
		<br/>
		<br/>
		<p>Customize</p>
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
						<span class="growsprite"><img src="https://cdn.growstocks.xyz/item/favicon.png" title="Paintbrush icon" itemsprite></span>&nbsp;&nbsp;&nbsp;<p style="font-family: CenturyGothicBold;font-size: 30px;">${gstcName} v${gstcVersion}</p><button class="growButton gsct-apply">Apply Theme</button>
						<button class="growButton gsct-close growCancelButton">Close</button><br/>
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
	$(".gstcTrigger").on("click", () => {
		$(".dark-bg").fadeIn(function(){
			$(".gstcModal").animate({
					height: "toggle"
				}, 500);
		});
	});
	$(".gsct-close").on("click", () => {
		$(".gstcModal").animate({
				height: "toggle",
		}, 500, function(){
				$(".dark-bg").fadeOut();
		});
	});
}

function gstcApplyTheme() {
	$("*[data-theme-input]").each(function (index) {
		localStorage.setItem(`gsCTheme-${$(this).attr('data-field')}`, $(this).val());
	})
	gstcLoadTheme(getTheme());
}

function gstcImportThemeJSON() {
	const validKeys = Object.keys(getTheme());
	try {
		const jsonTheme = JSON.parse($(".json-import").val());
		console.log(jsonTheme);
		validKeys.forEach(value => {
			localStorage.setItem(`gsCTheme-${value}`, jsonTheme[value]);
			$(`input[data-field=${value}]`).val(jsonTheme[value]);
		});
		gstcLoadTheme(getTheme());
	} catch(err) {
		alert("Invalid theme. Please try again");
	}
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