import pistol from './assets/models/640px-V9S_Sideview.png';
import burstpistol from './assets/models/640px-93R_Sideview.png';
import ARN from './assets/models/640px-ARN-220_sideview.png';
import FAMAS from './assets/models/640px-FAMAS_Sideview.png';
import FCAR from './assets/models/640px-FCAR_Side-View.png';
import pump from './assets/models/640px-KS-23_Sideview.png';
import pike from './assets/models/640px-Pike-556_Sideview.png';
import revolver from './assets/models/640px-R.357_SideView2.png';
import minigun from './assets/models/640px-M134_Minigun_sideview.png';
import m60 from './assets/models/640px-M60_StandardIssue.png';
import db from './assets/models/640px-Sawnoff_Sideview.png';
import repeater from './assets/models/640px-CB-01_Repeater_sideview.png';

export let weaponsList = [
  { name: "93-R", img: burstpistol, id: 0, status: false },
  { name: "ARN-220", img: ARN, id: 1, status: false },
  { name: "FAMAS", img: FAMAS, id: 2, status: false },
  { name: "FCAR", img: FCAR, id: 3, status: false },
  { name: "KS-23", img: pump, id: 4, status: false },
  { name: "M134", img: minigun, id: 5, status: false },
  { name: "R-357", img: revolver, id: 6, status: false },
  { name: "SH-1900", img: db, id: 7, status: false },
  { name: "V9S", img: pistol, id: 8, status: false },
  { name: "M60", img: m60, id: 9, status: false },
  { name: "PIKE-556", img: pike, id: 10, status: false },
  { name: "CB-01", img: repeater, id: 11, status: false },
];

export function shuffle(weaponsList) {
  weaponsList.sort(() => Math.random() - 0.5);
}

// export function cli(weaponsList) {
//     shuffle(weaponsList);
//     weaponsList.forEach(element => {
//         console.log(element.name + " " +  element.id)
//     });
// }

// cli(weaponsList);
