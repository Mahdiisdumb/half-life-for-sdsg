zipMods = [
  ['https://github.com/Mahdiisdumb/half-life-for-sdsg/releases/tag/ZIP', 'Half-Life',       214283501],
  ['https://github.com/Mahdiisdumb/half-life-for-sdsg/releases/tag/ZIP', 'Blue Shift',      304000000],
  ['https://github.com/Mahdiisdumb/half-life-for-sdsg/releases/tag/ZIP', 'Opposing Force',  221191140]
];
pkgMods = [];

var selectZip = document.getElementById('selectZip');
var iArgs = document.getElementById('iArgs');

selectZip.addEventListener('change', function () {
  switch (selectZip.value) {
    case './Half-Life Games/valve.zip':
      iArgs.value = '-dev 1 -game valve';
      break;

    case './Half-Life Games/bshift.zip':
      iArgs.value = '-dev 1 -game valve';
      break;

    case './Half-Life Games/gearbox.zip':
      iArgs.value = '-dev 1 -game gearbox';
      break;
  }
});