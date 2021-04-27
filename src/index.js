/*
	@plugin
	@name GrowStocks Theme Customization Plugin
	@version 3.1.4
	@author Jabo
	@description Create your own or use an existing theme witn this plugin that gives you the power to take control over the website's design. - Create or
	@localStoragePrefix gsCTheme-
	@endplugin
*/

const componentTree = [
	{
		name: "Main Container",
		description: "Affects the main container/body of the site. You can change the main background from here.",
		selector: "body",
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		},
	},
	{
		name: "GrowStocks Loading Icon",
		description: "Affects the loading icon that can be seen when going through different pages",
		selector: ".gsLoading",
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		},
	},
	{
		name: "GrowStocks Loading Icon Text",
		description: "Affects the loading icon's text that can be seen when going through different pages",
		selector: ".gsLoading span",
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		},
	},
	{
		name: "Header",
		description: "Affects the container of the GrowStocks' Logo",
		selector: "header",
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		},
	},
	{
		name: "Navigation Bar",
		description: "Affects the navigation bar",
		selector: "#id1",
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		},
	},
	{
		name: "Navigation Bar Item or Link",
		description: "Affects the navigation bar's links (not including the search button)",
		selector: ".navBar #navWrap .navContent, .navBar #navWrap .navContent i",
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		},
	},
	{
		name: "Navigation Bar Active Page",
		description: "Affects the current active link in the navigation bar",
		selector: ".navBar .active",
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		},
	},
	{
		name: "Search Button",
		description: "Affects the search button located in the navigation bar",
		selector: "#searchButton",
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		}
	},
	{
		name: "Search Button Icon",
		description: "Affects the search button's icon (the magnifying glass)",
		selector: '#searchButton > em',
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		}
	},
	{
		name: "Search Bar",
		description: "Affects the search bar container (shown when the search button was clicked)",
		selector: "#searchForm",
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		},
	},
	{
		name: "Search Bar Input",
		description: "Affects the search bar input element",
		selector: "#searchForm input",
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		},
	},
	{
		name: "Search Bar Buttons",
		description: "Affects the search bar button elements (the cross & magnifying glass icon)",
		selector: "#searchForm button",
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		},
	},
	{
		name: "Title Bar",
		description: "Affects the title bars, these elements contains the title containers such as the \"Daily Quest\" container that can be seen on the homepage.",
		selector: '.titleBar2, .titleBar3, .titleBar',
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		}
	},
	{
		name: "Title Bar Text",
		description: "Affects the title bars' text, these elements contains the title containers such as the \"Daily Quest\" container that can be seen on the homepage.",
		selector: '.titleBar2 *, .titleBar3 *, .titleBar *',
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		}
	},
	{
		name: "Title Bar Growtopia Button",
		description: "Affects the huge growtopia-like button that can be found on title bars (commonly seen on website announcement container)",
		selector: '.titleBar2 a.growButton',
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		}
	},
	{
		name: "Title Bar: FAQ Container",
		description: "Affects the title bars in the FAQ page",
		selector: '.openFaq',
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		}
	},
	{
		name: "Title Bar: FAQ Container Text",
		description: "Affects the title bars' text in the FAQ page",
		selector: '.openFaq *',
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		}
	},
	{
		name: "Item Chip Base",
		description: "Affects the main items container",
		selector: '.itemChipHead',
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		}
	},
	{
		name: "Item Chip Base Text",
		description: "Affects all of the text content in the item container",
		selector: '.itemChipHead p, .itemChipHead b, .itemChipHead h2, .itemChipHead h4, .itemChipHead a, .itemChipHead small',
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		}
	},
	{
		name: "Item Chip Base Button",
		description: "Affects the main items container's buttons such as the report button at the top right corner of the container",
		selector: '.itemChipHead button',
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		}
	},
	{
		name: "Item Chip Base Button Text",
		description: "Affects the main items container's buttons' text such as the report button at the top right corner of the container",
		selector: '.itemChipHead button *',
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		}
	},
	{
		name: "Item Chip Base Heading or Title",
		description: "Affects the heading/title elements in an item container",
		selector: '.itemChipHead h2',
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		}
	},
	{
		name: "Item Chip Base Item Name",
		description: "Affects the item name element in an item container",
		selector: '.itemChipHead a.itemLink',
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		}
	},
	{
		name: "Item Information Container",
		description: "Affects the item information container that can be found on an item's page",
		selector: '.infoBlock-items',
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		}
	},
	{
		name: "Item Information Status: Success",
		description: "Affects the status indicator in the item information container",
		selector: '.greenRow, .greenRow *',
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		}
	},
	{
		name: "Item Information Status: Warning",
		description: "Affects the status indicator in the item information container",
		selector: '.yellowRow, .yellowRow *, .orangeRow, .orangeRow *',
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		}
	},
	{
		name: "Item Information Status: Error",
		description: "Affects the status indicator in the item information container",
		selector: '.redRow, .redRow *',
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		}
	},
	{
		name: "Item Information Status: Information",
		description: "Affects the status indicator in the item information container",
		selector: '.blueRow, .blueRow *',
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		}
	},
	{
		name: "Float Buttons",
		description: "Affects the buttons that can be found on the Shop & Marketplace page",
		selector: '.floatButton2, .floatButton',
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		}
	},
	{
		name: "Float Buttons Text",
		description: "Affects the buttons's text that can be found on the Shop & Marketplace page",
		selector: '.floatButton2 *, .floatButton2 p',
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		}
	},	
	{
		name: "Float Buttons: Buy Item Button",
		description: "Affects the buy item button that can be found on the Marketplace page",
		selector: '.floatButton.buyBtn',
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		}
	},	
	{
		name: "Float Buttons: Buy Item Button Text",
		description: "Affects the buy item button's text that can be found on the Marketplace page",
		selector: '.floatButton.buyBtn p',
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		}
	},	
	{
		name: "Float Buttons: Sell Item Button",
		description: "Affects the sell item button that can be found on the Marketplace page",
		selector: '.floatButton.sellBtn',
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		}
	},	
	{
		name: "Float Buttons: Sell Item Button Text",
		description: "Affects the sell item button's text that can be found on the Marketplace page",
		selector: '.floatButton.sellBtn p',
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		}
	},	
	{
		name: "Float Buttons: Find Offer Button",
		description: "Affects the find offer button that can be found on the Marketplace page",
		selector: '.floatButton.findOffer',
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		}
	},	
	{
		name: "Float Buttons: Find Offer Button Text",
		description: "Affects the find offer button's button that can be found on the Marketplace page",
		selector: '.floatButton.findOffer p',
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		}
	},
	{
		name: "Footer",
		description: "Affects the footer of the site",
		selector: "footer",
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		},
	},
	{
		name: "Footer Text",
		description: "Affects the footer's text",
		selector: "footer p, footer h4, footer a, footer em",
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		},
	},
	{
		name: "Footer Heading",
		description: "Affects the footer's headings such as the \"GrowStocks\" text",
		selector: "footer p, footer h4, footer a, footer em",
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		},
	},
	{
		name: "Footer Links",
		description: "Affects the links found in the footer (e.g Status, Privacy Policy, etc.)",
		selector: "footer .varLinks a p, footer .varLinks2 a p",
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		},
	},
	{
		name: "Footer Social Links",
		description: "Affects the social media links",
		selector: "footer .socials a",
		styles: {
			"background": "",
			"color": "",
			"border-radius": "",
			"box-shadow": ""
		},
	},
];

class GrowStocksToolbox {
	static createGrowtopiaModal({ modalClass, itemIcon, title, description, content, footerButtons, triggerClass, closeButtonClass }) {
		$(`.${modalClass}`).remove();
		const growtopiaModalCode = `
			<div class="GTModal ${modalClass}">
				<div class="successBox">
						<div class="header">
								<span class="growsprite"><img src="https://cdn.growstocks.xyz/item/favicon.png" title="${itemIcon} icon" itemsprite></span>&nbsp;&nbsp;&nbsp;<p style="font-family: CenturyGothicBold;font-size: 30px;">${title || "Title goes here"}</p><br/>
								<p>${description || ""}</p>
						</div>
						<div class="colorable">
								<br>
								${content || "Content Here!"}
								<br/>
								<br/>
								<div style="position: sticky; bottom: 1rem; left: 1rem; background-color: rgba(0,0,0,0.75); padding: 0.5rem; border-radius: 5px;">
									${footerButtons || `<button class="growButton ${modalClass}-close growCancelButton">Close</button>`}
								</div>
						</div>
				</div>
			</div>
		`;
		$("body").append(growtopiaModalCode);
		$(`.${triggerClass}`).on('click', () => GrowStocksToolbox.openModalWithClass(modalClass));
		$(`.${closeButtonClass || `${modalClass}-close`}`).on('click', () => GrowStocksToolbox.closeModalWithClass(modalClass));
	}

	static closeModalWithClass(modalClass) {
		$("." + modalClass).animate({
			height: "toggle",
		}, 500, function(){
			$(".dark-bg").fadeOut();
		});
	}

	static openModalWithClass(modalClass) {
		$(".dark-bg").fadeIn(function(){
			$("." + modalClass).animate({
				height: "toggle"
			}, 500);
		});
	}

	static removeGrowtopiaModal(modalClass) {
		$(`.${modalClass}`).remove();
	}
}

class ThemeCustomization {

	constructor(styledElements) {
		this.styledElements = styledElements || [];
		this.styleString = "";
		this.communityThemes = [];
	}
	applyStyling() {
		// Remove the current styling to prevent overrides
		$(".gstcStyling").remove();

		this._generateStyles();

		const gstcStyleElement = document.createElement('style');
		gstcStyleElement.classList.add("gstcStyling");
		gstcStyleElement.textContent = this.styleString;

		$("body").append(gstcStyleElement);
	}

	async createGUI() {
		let latestAnnouncement = await fetch(`https://raw.githubusercontent.com/jabo-bernardo/gs-theme-plugin/master/announcements/current.json?v=${(new Date()).getMinutes()}`);
		latestAnnouncement = await latestAnnouncement.json();

		let themes = await fetch(`https://raw.githubusercontent.com/jabo-bernardo/gs-theme-plugin/master/themes/v3/themes-list.json?v=${(new Date()).getMinutes()}`);
		themes = await themes.json();

		this.communityThemes = themes;

		this._createFloatButton();
		const currentPath = location.pathname;
		const content = `
			<h2>Announcement</h2>
			<p style="font-size: 1rem;">${latestAnnouncement.content}<p>

			<h2 style="margin-top: 2rem;">Basic Guide</h2>
			<p style="font-size: 1rem;">This plugin will let you customize the whole GrowStocks's website. To get started choose a component/element from the table of contents below that you want to modify initially it will give you 4 styles property to play around with, you can add more style property by clicking the "Add CSS Property" button and it must be a valid css property (e.g background-color, display, transform, and more).<p>				
			<p style="font-size: 1rem; margin-top: 0.5rem;">NOTE: Every value should be a valid CSS value (e.g color hex codes, rgb, rgba, and more!)<p>
			<p style="font-size: 1rem; margin-top: 0.5rem;">TIP: You can set images as your background by setting the value to "url(paste image url here)"<p>

			<h2 style="margin-top: 2rem;">Table of Contents</h2>
			<p class="gstc-table-of-contents" style="display: none; height: auto; font-size: 0.8rem">${componentTree.map(component => `<a class="noLoader" href="${currentPath}#${component.name.replace(/ +/g, "-")}" style="font-size: 1rem">${component.name}</a>`).join(' Ã¢â‚¬Â¢ ')}</p>			
			<p style="font-size: 1rem">Quickly navigate through your stylesheet.</p>
			<button class="growButton gstc-toggle-toc">Show/Hide</button>

			<h2 style="margin-top: 2rem;">Import Themes</h2>
			<p>Import via JSON</p>
			<p style="font-size: 0.8rem;">If someone sends you the JSON file of their theme open it up and paste the contents here</p>
			<textarea class="json-import" style="padding: 10px; width: 80%; background: transparent; color: #FFFFFF; font-weight: bold; font-family: monospace; border: 5px solid #bee8f1; box-shadow: #000 3px 3px, #000 3px 3px inset; border-radius: 7px;" rows="4" placeholder="Paste the JSON file contents here"></textarea><br/>
			<button class="growButton growCancelButton import-theme-json">Apply Theme</button><br/>
			<br/>
			<p>Community Themes</p>
			<p style="font-size: 0.8rem;">These are the themes that were submitted by the GrowStocks community. Share your theme by <a href="https://discord.gg/GMucqpWYE4">joining the GrowStocks Discord Server</a>, then send a DM to <b>Jabo#7775</b></p>
			<select class="community-import" style="margin-bottom: 0.35rem; padding: 10px; width: 80%; background: transparent; color: #FFFFFF; font-weight: bold; border: 5px solid #bee8f1; box-shadow: #000 3px 3px, #000 3px 3px inset; border-radius: 7px;">
				${themes && themes.map(theme => `<option style="color: #1E1E1E">${theme.themeName}</option>`)}
			</select><br/>
			<button class="growButton growCancelButton import-theme-community">Apply Theme</button><br/>

			<h2 style="margin-top: 2rem;">Export Theme</h2>
			<p style="font-size: 1rem;">Want to share your themes to your friends?<p>
			<button class="growButton growCancelButton export-theme">Export Theme</button><br/>

			${this._createCustomizationSection()}
		`
		const footer = `
			<button class="growButton gstcApplyTheme">Apply Theme</button>
			<button class="growButton growCancelButton gstcModal-close">Close</button>
		`
		GrowStocksToolbox.createGrowtopiaModal({ modalClass: "gstcModal", triggerClass: "gstcTrigger", content, footerButtons: footer, itemIcon: "Paint Bucket - Red", title: "Theme Customization", description: "A plugin that gives you the power to take control over the website's design." });		
		$(".add-property-btn").on('click', e => {
			const componentClass = $(e.target).attr('data-component').replace(/ +/g, '-');
			const propertyName = prompt("Please enter a valid CSS property name:");
			if(!propertyName) return;
			const contentToAdd = `
				<div style="display: flex; column-gap: 0.5rem; align-items: center; margin: 0; margin-bottom: 0.25rem;">
					<p style="font-size: 0.8rem; margin: 0;">${propertyName.replace(/-/g, ' ').replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); })}</p>
					<input data-component-field data-component-name="${componentClass.replace(/-/g, " ")}" data-style=${propertyName} style="margin: 0; width: 150px; font-weight: bold; color: white;" class="GTText suggPrice"/>
				</div>			
			`;
			$(`.${componentClass}`).append(contentToAdd);
		});
		$('.gstcApplyTheme').on('click', this._applyTheme);
		$('.gstc-toggle-toc').on('click', () => {
			$('.gstc-table-of-contents').animate({
				height: "toggle"
			}, 500);
		})
		$(".show-property-btn").on('click', e => {
			$(`.${$(e.target).attr('data-target')}`).animate({
				height: "toggle"
			}, 500)
		})
		$('.import-theme-community').on('click', this._importCommunityTheme);
		$('.import-theme-json').on('click', this._importThemeJSON);
		$('.export-theme').on('click', this._exportTheme);
	}

	_createCustomizationSection() {

		const components = componentTree.map(component => {

			const savedComponentStyle = JSON.parse(localStorage.getItem(`gsCTheme-${component.name.replace(/ +/g, "-")}`));

			const styles = Object.entries({...component.styles, ...savedComponentStyle}).map(([key, value]) => {
				return `
					<div style="display: flex; column-gap: 0.5rem; align-items: center; margin: 0; margin-bottom: 0.25rem;">
						<p style="font-size: 0.8rem; margin: 0;">${key.replace(/-/g, ' ').replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); })}</p>
						<input data-component-field data-component-name="${component.name}" data-style=${key} style="margin: 0; width: 150px; font-weight: bold; color: white;" class="GTText suggPrice" value="${(savedComponentStyle && savedComponentStyle[key]) || value || ""}"/>
					</div>
				`
			}).join('');

			return `
				<div style="margin-top: 0.25rem;">
					<p style="color: white;" id="${component.name.replace(/ +/g, "-")}">${component.name}</p>
					<p style="font-size: 1rem">${component.description}</p>
					<div class="${component.name.replace(/ +/g, '-').replace(/:/g, "")}-styles" style="height: auto; display: none;">
						<div class="${component.name.replace(/ +/g, '-')}">
							${styles}
						</div>
						<button data-component="${component.name}" class="growButton growCancelButton add-property-btn">Add CSS Property</button>
					</div>
					<button data-target="${component.name.replace(/ +/g, '-').replace(/:/g, "")}-styles" data-component="${component.name}" class="growButton show-property-btn" style="margin-top: 0.5rem;">Toggle Styles</button>
				</div>
			`
		}).join('')

		return `
			<h2 style="margin-top: 1.5rem">Customize</h2>
			<p style="font-size: 1rem">Customize the GrowStocks' website design based on your liking</p>
			${components}
		`
	}

	_exportTheme = () => {
		let exportThemeContent = {};
		const exportName = prompt("Please enter your theme name") || "my-growstocks-theme";
		componentTree.map(component => {
			exportThemeContent[component.name.replace(/ +/g, '-')] = JSON.parse(localStorage.getItem(`gsCTheme-${component.name.replace(/ +/g, '-')}`)) || {};
		})
		exportThemeContent.meta = {
			version: 3,
			exportName: exportName,
			timestamp: Date.now()
		}
		const dataUri = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportThemeContent, null, 2));
		const downloadElement = document.createElement('a');
		downloadElement.classList.add('noLoader')
		downloadElement.setAttribute("href", dataUri);
		downloadElement.setAttribute("download", exportName.replace(/ +/g, '-') + ".json");
		$("body").append(downloadElement);
		downloadElement.click();
		downloadElement.remove();
	}

	_importThemeJSON = () => {
		let jsonData = $(".json-import").val();
		try {
			jsonData = JSON.parse(jsonData);
			if(!jsonData.meta) return alert("Invalid theme format");
			if(jsonData.meta.version < 3) return alert("Incompatible theme");

			delete jsonData.meta;

			Object.entries(jsonData).map(([key, value]) => {
				if(!componentTree.find(component => component.name === key.replace(/-/g, ' '))) {
					console.log(`ignored invalid component ${key}`);
					return null
				};
				localStorage.setItem(`gsCTheme-${key}`, JSON.stringify(value));
			});

			$("input[data-component-field]").each(function(index) {
				const propertyName = $(this).attr("data-style");
				const componentName = $(this).attr('data-component-name').replace(/ +/g, '-');
				if(!jsonData[componentName]) {
					jsonData[componentName] = "";
				}
				$(this).val((jsonData[componentName])[propertyName]);
			});

			this._applyTheme();

		} catch(err) {
			console.error(err);
			alert("Invalid theme!")
		}
	}

	_importCommunityTheme = async () => {
		const communityTheme = this.communityThemes.find(theme => theme.themeName === $(".community-import").val());
		if(!communityTheme.url) return alert("Please select a community theme from the dropdown menu");
		$(".import-theme-community").html("Importing...");
		$(".import-theme-community").attr("disabled", "true");
		let theme = await fetch(communityTheme.url + `?v=${Date.now()}`);
		theme = await theme.json().catch(err => { 
			console.error(err); 
			$(".import-theme-community").removeAttr("disabled")
			$(".import-theme-community").html("Import Theme"); 
			alert("Failed to load the selected theme.") 
		});

		delete theme.meta;

		Object.entries(theme).map(([key, value]) => {
			if(!componentTree.find(component => component.name === key.replace(/-/g, ' '))) {
				console.log(`ignored invalid component ${key}`);
				return null
			};
			localStorage.setItem(`gsCTheme-${key}`, JSON.stringify(value));
		});

		$("input[data-component-field]").each(function(index) {
			const propertyName = $(this).attr("data-style");
			const componentName = $(this).attr('data-component-name').replace(/ +/g, '-');
			if(!theme[componentName]) {
				theme[componentName] = "";
			}
			$(this).val((theme[componentName])[propertyName]);
		});

		this._applyTheme();

		$(".import-theme-community").html("Imported!");
		setTimeout(() => {
			$(".import-theme-community").removeAttr("disabled");
			$(".import-theme-community").html("Import Theme");
		}, 1000);
	}

	_applyTheme = () => {
		let theme = Object.assign({}, ThemeCustomization.getTheme());
		$("input[data-component-field]").each(function(index) {
			const propertyName = $(this).attr("data-style");
			const propertyValue = $(this).val();
			const componentName = $(this).attr('data-component-name').replace(/-/g, ' ');
			(theme[componentName.replace(/ +/g, '-')])[propertyName] = propertyValue || "";		
		})
		for(let [key, value] of Object.entries(theme)) {
			const currentComponent = theme[key];
			for(let [key2, value2] of Object.entries(currentComponent)) {
				if(!value2) {
					delete currentComponent[key2]
				};	
			}
		}
		Object.entries(theme).map(([key, value]) => {
			localStorage.setItem(`gsCTheme-${key.replace(/ +/g, "-")}`, JSON.stringify(value));
		});
		this.applyStyling();
		GrowStocksToolbox.closeModalWithClass('gstcModal');
	}

	_createFloatButton() {
		// Removes the existing float button
		$(".gstcTrigger").remove();

		const floatButtonCode = `
			<div class="gstcTrigger" style="cursor: pointer; color: #1E1E1E; display: flex; align-items: center; justify-content: center; position: fixed; width: 50px; height: 50px; background-color: #FFF; border-radius: 50%; bottom: 1rem; right: 1rem; box-shadow: 0 0 5px rgb(0 0 0 / 65%); z-index: 100;">
				<span style="color: #1E1E1E!important; font-size: 2rem" class="material-icons">brush</span>
			</div>
		`;
		$("body").append(floatButtonCode);
	}

	_generateStyles() {
		const styleString = this.styledElements.map(elem => elem.toStyle()).join('\n');
		this.styleString = `
			.gsWrap {
				overflow-x: visible;
			}
			${styleString}
		`;
	}

	static getTheme() {
		let theme = {}
		componentTree.forEach(component => {
			theme[component.name.replace(/ +/g, "-")] = JSON.parse(localStorage.getItem(`gsCTheme-${component.name.replace(/ +/g, "-")}`)) || {};
		})
		return theme;
	}

}

class StyledElement {
	constructor({ childrens, styles, name, description, selector }) {
		this.name = name;
		this.description = description;
		this.selector = selector || "*";
		this.styles = styles || {};
		this.childrens = childrens;
	}

	addStyling(property, value) {
		this.styles[property] = value;
	}

	toStyle() {

		const savedComponentStyle = JSON.parse(localStorage.getItem(`gsCTheme-${this.name.replace(/ +/g, "-")}`));

		return `
			${this.selector} {
				${Object.entries({ ...this.styles, ...savedComponentStyle }).map(([key, value]) => `${key}: ${(savedComponentStyle ? savedComponentStyle[key] : null) || value}!important;`).join("\n")}
			}
		`
	}
}

function _parseComponentTree(componentTree) {
	const components = [];
	for(let component of componentTree) {
		components.push(_parseComponent(component));
	}
	return components;	
}

function _parseComponent(component) {
	let element = new StyledElement(component);
	element.childrens = element.childrens ? element.childrens.map(child => _parseComponent(child)) : [];
	return element;
}

const themeCustomization = new ThemeCustomization(_parseComponentTree(componentTree));
themeCustomization.createGUI();
themeCustomization.applyStyling()