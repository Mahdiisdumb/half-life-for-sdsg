zipMods = [
  ['https://github.com/Mahdiisdumb/half-life-for-sdsg/releases/download/v1.0.0/valve.zip',   'Half-Life',       214283501],
];
pkgMods = [
];
var selectZip=document.getElementById('selectZip');
var iArgs=document.getElementById('iArgs');
selectZip.addEventListener('change', function(){
	if(selectZip.value=="https://github.com/Mahdiisdumb/half-life-for-sdsg/releases/download/v1.0.0/valve.zip")
	{
		alert('Bugs: menu lagging.');
		iArgs.value="-dev 1 -game valve";
	}
});