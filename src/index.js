/*
	@plugin
	@name GrowStocks Theme Customization Plugin
	@version 3.2.0
	@author Jabo#7775
	@description Create your own or use an existing theme witn this plugin that gives you the power to take control over the website's design.
	@localStoragePrefix gsCTheme-
	@endplugin
*/

let componentTree = localStorage.getItem('gsCTheme-component-tree') ? JSON.parse(localStorage.getItem('gsCTheme-component-tree')) : null;

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

	constructor(Components) {
		this.Components = Components || [];
		this.styleString = "";
		this.communityThemes = [];
		this.gui = new ThemeCustomizationGUI(this);
		this.gui.createGUI();
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

	_exportTheme = () => {
		let exportThemeContent = {};
		const exportName = prompt("Please enter your theme name") || "my-growstocks-theme";
		componentTree.map(component => {
			exportThemeContent[Utilities.replaceSpacesWithDashes(component.name)] = JSON.parse(localStorage.getItem(`gsCTheme-${Utilities.replaceSpacesWithDashes(component.name)}`)) || {};
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
		const communityTheme = this.gui.getCommunityThemes().find(theme => theme.themeName === $(".community-import").val());
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

	_generateStyles() {
		const styleString = this.Components.map(elem => elem.toStyle()).join('\n');
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
			theme[Utilities.replaceSpacesWithDashes(component.name)] = JSON.parse(localStorage.getItem(`gsCTheme-${Utilities.replaceSpacesWithDashes(component.name)}`)) || {};
		})
		return theme;
	}

}

class ThemeCustomizationGUI {

	constructor(themeCustomization) {
		this.themeCustomization = themeCustomization;
		this.communityThemes = [];
	}

	getCommunityThemes() {
		return this.communityThemes;
	}

	addCSSProperty(e) {
		const componentClass = $(e.target).attr('data-component').replace(/ +/g, '-');
		let propertyName = prompt("Please enter a valid CSS property name:");
		propertyName = propertyName.toLocaleLowerCase();
		propertyName = propertyName.trim()
		propertyName = Utilities.replaceSpacesWithDashes(propertyName);
		if(!propertyName) return;
		$(`.${componentClass}`).append(this.createStyleInputGUI(propertyName, componentClass));
	}

	toggleTableOfContents() {
		$('.gstc-table-of-contents').animate({
			height: "toggle"
		}, 500);
	}

	toggleStyleProperty(e) {
		$(`.${$(e.target).attr('data-target')}`).animate({
			height: "toggle"
		}, 500);
	}

	addListeners() {
		$(".add-property-btn").on('click', e => this.addCSSProperty(e));
		$('.gstcApplyTheme').on('click', this.themeCustomization._applyTheme);
		$('.gstc-toggle-toc').on('click', this.toggleTableOfContents);
		$(".show-property-btn").on('click', this.toggleStyleProperty);
		$('.import-theme-community').on('click', this.themeCustomization._importCommunityTheme);
		$('.import-theme-json').on('click', this.themeCustomization._importThemeJSON);
		$('.export-theme').on('click', this.themeCustomization._exportTheme);
	}

	async getAnnouncementsFromCDN() {
		let latestAnnouncement = await fetch(`https://raw.githubusercontent.com/jabo-bernardo/gs-theme-plugin/master/announcements/current.json?v=${(new Date()).getMinutes()}`);
		latestAnnouncement = await latestAnnouncement.json();
		return latestAnnouncement.content;
	}

	async getCommunityThemesFromCDN() {
		let themes = await fetch(`https://raw.githubusercontent.com/jabo-bernardo/gs-theme-plugin/master/themes/v3/themes-list.json?v=${(new Date()).getMinutes()}`);
		themes = await themes.json();
		return themes;
	}

	async loadCommunityThemes() {
		const themes = await this.getCommunityThemesFromCDN();
		this.communityThemes = themes;
		$('.community-import').html(themes.map(theme => `<option style="color: #1E1E1E">${theme.themeName}</option>`).join(''));
	}

	async loadAnnouncement() {
		const announcement = await this.getAnnouncementsFromCDN();
		$("#gstcAnnouncementContent").html(announcement);
	}

	createStyleInputGUI(propertyName, componentClass, propertyValue) {
		return `
			<div style="display: flex; column-gap: 0.5rem; align-items: center; margin: 0; margin-bottom: 0.25rem;">
				<p style="font-size: 0.8rem; margin: 0;">${propertyName.replace(/-/g, ' ').replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); })}</p>
				<input data-component-field data-component-name="${componentClass.replace(/-/g, " ")}" data-style=${propertyName} style="margin: 0; width: 150px; font-weight: bold; color: white;" class="GTText suggPrice" value="${propertyValue || ""}"/>
			</div>
		`
	}

	createAnnouncementGUI() {
		return `
			<h2>Announcement</h2>
			<p id="gstcAnnouncementContent" style="font-size: 1rem;">Loading...<p>
		`;
	}

	createBasicGuideGUI() {
		return `
			<h2 style="margin-top: 2rem;">Basic Guide</h2>
			<p style="font-size: 1rem;">This plugin will let you customize the whole GrowStocks's website. To get started choose a component/element from the table of contents below that you want to modify initially it will give you 4 styles property to play around with, you can add more style property by clicking the "Add CSS Property" button and it must be a valid css property (e.g background-color, display, transform, and more).<p>				
			<p style="font-size: 1rem; margin-top: 0.5rem;">NOTE: Every value should be a valid CSS value (e.g color hex codes, rgb, rgba, and more!)<p>
			<p style="font-size: 1rem; margin-top: 0.5rem;">TIP: You can set images as your background by setting the value to "url(paste image url here)"<p>
		`;
	}

	createTableOfContentsGUI() {
		const currentPath = location.pathname;
		return `
			<h2 style="margin-top: 2rem;">Table of Contents</h2>
			<p class="gstc-table-of-contents" style="display: none; height: auto; font-size: 0.8rem">${componentTree.map(component => `<a class="noLoader" href="${currentPath}#${Utilities.replaceSpacesWithDashes(component.name)}" style="font-size: 1rem">${component.name}</a>`).join(' Ã¢â‚¬Â¢ ')}</p>			
			<p style="font-size: 1rem">Quickly navigate through your stylesheet.</p>
			<button class="growButton gstc-toggle-toc">Show/Hide</button>
		`;
	}

	createImportGUI() {
		return `
			<h2 style="margin-top: 2rem;">Import Themes</h2>
			<p>Import via JSON</p>
			<p style="font-size: 0.8rem;">If someone sends you the JSON file of their theme open it up and paste the contents here</p>
			<textarea class="json-import" style="padding: 10px; width: 80%; background: transparent; color: #FFFFFF; font-weight: bold; font-family: monospace; border: 5px solid #bee8f1; box-shadow: #000 3px 3px, #000 3px 3px inset; border-radius: 7px;" rows="4" placeholder="Paste the JSON file contents here"></textarea><br/>
			<button class="growButton growCancelButton import-theme-json">Apply Theme</button><br/>
			<br/>
			<p>Community Themes</p>
			<p style="font-size: 0.8rem;">These are the themes that were submitted by the GrowStocks community. Share your theme by <a href="https://discord.gg/GMucqpWYE4">joining the GrowStocks Discord Server</a>, then send a DM to <b>Jabo#7775</b></p>
			<select class="community-import" style="margin-bottom: 0.35rem; padding: 10px; width: 80%; background: transparent; color: #FFFFFF; font-weight: bold; border: 5px solid #bee8f1; box-shadow: #000 3px 3px, #000 3px 3px inset; border-radius: 7px;">
				<option>Loading...</option>
			</select><br/>
			<button class="growButton growCancelButton import-theme-community">Apply Theme</button><br/>
		`;
	}

	createExportGUI() {
		return `
			<h2 style="margin-top: 2rem;">Export Theme</h2>
			<p style="font-size: 1rem;">Want to share your themes to your friends?<p>
			<button class="growButton growCancelButton export-theme">Export Theme</button><br/>
		`;
	}

	createFooterButtonsGUI() {
		return `
			<button class="growButton gstcApplyTheme">Apply Theme</button>
			<button class="growButton growCancelButton gstcModal-close">Close</button>
		`
	}

	async createGUI() {
		this.loadAnnouncement();
		this.loadCommunityThemes();
		this.createFloatButton();

		const content = `
			${this.createAnnouncementGUI()}
			${this.createBasicGuideGUI()}
			${this.createTableOfContentsGUI()}
			${this.createImportGUI()}
			${this.createExportGUI()}
			${this.createCustomizationSection()}
		`;

		GrowStocksToolbox.createGrowtopiaModal({ modalClass: "gstcModal", triggerClass: "gstcTrigger", content, footerButtons: this.createFooterButtonsGUI(), itemIcon: "Paint Bucket - Red", title: "Theme Customization", description: "A plugin that gives you the power to take control over the website's design." });		

		this.addListeners();
	}

	createCustomizationSection() {

		const components = componentTree.map(component => {

			const savedComponentStyle = JSON.parse(localStorage.getItem(`gsCTheme-${Utilities.replaceSpacesWithDashes(component.name)}`));

			const styles = Object.entries({...component.styles, ...savedComponentStyle}).map(([propertyName, propertyValue]) => this.createStyleInputGUI(propertyName, component.name, propertyValue)).join('');

			return `
				<div style="margin-top: 0.25rem;">
					<p style="color: white;" id="${Utilities.replaceSpacesWithDashes(component.name)}">${component.name}</p>
					<p style="font-size: 1rem">${component.description}</p>
					<div class="${Utilities.replaceSpacesWithDashes(component.name).replace(/:/g, "")}-styles" style="height: auto; display: none;">
						<div class="${Utilities.replaceSpacesWithDashes(component.name)}">
							${styles}
						</div>
						<button data-component="${component.name}" class="growButton growCancelButton add-property-btn">Add CSS Property</button>
					</div>
					<button data-target="${Utilities.replaceSpacesWithDashes(component.name).replace(/:/g, "")}-styles" data-component="${component.name}" class="growButton show-property-btn" style="margin-top: 0.5rem;">Toggle Styles</button>
				</div>
			`
		}).join('')

		return `
			<h2 style="margin-top: 1.5rem">Customize</h2>
			<p style="font-size: 1rem">Customize the GrowStocks' website design based on your liking</p>
			${components}
		`
	}

	createFloatButton() {
		$(".gstcTrigger").remove();
		const floatButtonCode = `
			<div class="gstcTrigger" style="cursor: pointer; color: #1E1E1E; display: flex; align-items: center; justify-content: center; position: fixed; width: 50px; height: 50px; background-color: #FFF; border-radius: 50%; bottom: 1rem; right: 1rem; box-shadow: 0 0 5px rgb(0 0 0 / 65%); z-index: 100;">
				<span style="color: #1E1E1E!important; font-size: 2rem" class="material-icons">brush</span>
			</div>
		`;
		$("body").append(floatButtonCode);
	}
}

class Component {
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
				${Object.entries({ ...this.styles, ...savedComponentStyle }).map(([key, value]) => value ? `${key}: ${(savedComponentStyle ? savedComponentStyle[key] : null) || value}!important;` : '').join("\n")}
			}
		`.replace(/\n/g, '');
	}
}

class Utilities {

	static replaceSpacesWithDashes(string) {
		return string.replace(/ +/g, '-');
	}

	static replaceDashesWithSpaces(string) {
		return string.replace(/-/g, ' ');
	}
	
}

class Parser {

	static parseComponentTree(tree) {
		const components = [];
		for(let component of componentTree) components.push(new Component(component));
		return components;
	} 

}

async function updateComponentTree() {
	console.log(`%cGS Theme Customization: %cChecking for updates`, 'color: red; font-weight: bolder', 'color: yellow;');
	let currentComponentTreeVersion = localStorage.getItem('gsCTheme-component-tree-version');
	let liveComponentTreeVersion = await fetch(`https://raw.githubusercontent.com/jabo-bernardo/gs-theme-plugin/master/config/component-tree-version.json?v=${Date.now()}`, { cache: 'no-store' });
	liveComponentTreeVersion = await liveComponentTreeVersion.json();
	liveComponentTreeVersion = liveComponentTreeVersion.version;
	if(!currentComponentTreeVersion) {
		console.log(`%cGS Theme Customization: %cUnable to find component tree version on your machine, Setting it up!`, 'color: red; font-weight: bolder', 'color: yellow;');
		currentComponentTreeVersion = liveComponentTreeVersion;
		console.log(`%cGS Theme Customization: %cLoading component tree version into the memory`, 'color: red; font-weight: bolder', 'color: yellow;');
		localStorage.setItem('gsCTheme-component-tree-version', liveComponentTreeVersion);
		console.log(`%cGS Theme Customization: %cLoaded component tree version into the memory!`, 'color: red; font-weight: bolder', 'color: yellow;');

		console.log(`%cGS Theme Customization: %cLoading component tree contents into the memory`, 'color: red; font-weight: bolder', 'color: yellow;');
		componentTree = await fetch(`https://raw.githubusercontent.com/jabo-bernardo/gs-theme-plugin/master/config/component-tree.json?v=${Date.now()}`, { cache: 'no-store' });
		componentTree = await componentTree.json();
		localStorage.setItem('gsCTheme-component-tree', JSON.stringify(componentTree));
		console.log(`%cGS Theme Customization: %cLoaded component tree contents into the memory!`, 'color: red; font-weight: bolder', 'color: yellow;');
		return componentTree;
	}
	if(parseInt(currentComponentTreeVersion) < parseInt(liveComponentTreeVersion) || !componentTree) {
		if(!componentTree) { 
			console.log(`%cGS Theme Customization: %cFailed to find the component tree contents in your memory loading it in!`, 'color: red; font-weight: bolder', 'color: yellow;');
		} else {
			console.log(`%cGS Theme Customization: %cNEW COMPONENT TREE VERSION FOUND! Loading it in!`, 'color: red; font-weight: bolder', 'color: yellow;');
		}
		componentTree = await fetch(`https://raw.githubusercontent.com/jabo-bernardo/gs-theme-plugin/master/config/component-tree.json?v=${Date.now()}`, { cache: 'no-store' });
		componentTree = await componentTree.json();
		localStorage.setItem('gsCTheme-component-tree', JSON.stringify(componentTree));
		console.log(`%cGS Theme Customization: %cLoaded component tree contents into the memory!`, 'color: red; font-weight: bolder', 'color: yellow;');
		return componentTree;
	}
	console.log(`%cGS Theme Customization: %cAlready up to date :)`, 'color: red; font-weight: bolder', 'color: yellow;');
	return componentTree;
}

async function launchPlugin() {	
	console.log(`%cGS Theme Customization by Jabo`, 'font-weight: bold; font-size: 50px;color: red; text-shadow: 2px 2px 0 rgb(217,31,38) , 5px 5px 0 rgb(226,91,14) , 8px 8px 0 rgb(245,221,8) , 11px 11px 0 rgb(5,148,68) , 14px 14px 0 rgb(2,135,206) , 17px 17px 0 rgb(4,77,145) , 20px 20px 0 rgb(42,21,113)');
	console.log(`%cCreate your own or use an existing theme witn this plugin that gives you the power to take control over the website's design.`, 'color: #AAA');
	console.log(`%cFeel free to contribute to the plugin Github: https://github.com/jabo-bernardo/gs-theme-plugin`, 'color: #AAA');
	const activeComponentTree = await updateComponentTree();
	const parsedComponentTree = Parser.parseComponentTree(activeComponentTree);
	const themeCustomization = new ThemeCustomization(parsedComponentTree);
	themeCustomization.applyStyling();
}

launchPlugin();