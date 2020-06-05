window.onload = function () {
	var fileupload = document.getElementById('pageUploader');
	var button = document.getElementById('btnFileUpload');
	button.onclick = function () {
		fileupload.click();
	};
	fileupload.onchange = function () {
		var reader = new FileReader();
		reader.readAsDataURL(fileupload.files[0]);
		reader.onload = function (e) {
			img = loadImage(e.target.result, () => {
				loop();
			});
		};
	};
	loadDarkModeFromLocalStorage();
	darkLightToggle();
};

function loadDarkModeFromLocalStorage() {
	isDark = boolean(localStorage.isDark);
	document.getElementById('darkmode').checked = isDark;
}

function darkLightToggle() {
	saveLocalStorageDarkMode();
	isDark = document.getElementById('darkmode').checked;
	if (isDark) {
		var link = document.createElement('link');
		link.rel = 'stylesheet';
		link.type = 'text/css';
		link.href = 'assets/css/dark.css';
		link.id = 'darkcss';
		document.getElementsByTagName('head')[0].appendChild(link);
	} else {
		if (document.contains(document.getElementById('darkcss'))) {
			document.getElementById('darkcss').remove();
		}
	}
}

function saveLocalStorageDarkMode() {
	isDark = document.getElementById('darkmode').checked;
	localStorage.isDark = isDark;
}
