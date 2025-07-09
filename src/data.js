export let weaponsList = [
  {
    name: "93-R",
    img: "./src/assets/models/640px-93R_Sideview.png",
    id: 0,
    status: false,
  },
  {
    name: "ARN-220",
    img: "./src/assets/models/640px-ARN-220_sideview.png",
    id: 1,
    status: false,
  },
  {
    name: "FAMAS",
    img: "./src/assets/models/640px-FAMAS_Sideview.png",
    id: 2,
    status: false,
  },
  {
    name: "FCAR",
    img: "./src/assets/models/640px-FCAR_Side-View.png",
    id: 3,
    status: false,
  },
  {
    name: "KS-23",
    img: "./src/assets/models/640px-KS-23_Sideview.png",
    id: 4,
    status: false,
  },
  {
    name: "M134",
    img: "./src/assets/models/640px-M134_Minigun_sideview.png",
    id: 5,
    status: false,
  },
  {
    name: "R-357",
    img: "./src/assets/models/640px-R.357_SideView2.png",
    id: 6,
    status: false,
  },
  {
    name: "SH-1900",
    img: "./src/assets/models/640px-Sawnoff_Sideview.png",
    id: 7,
    status: false,
  },
  {
    name: "V9S",
    img: "./src/assets/models/640px-V9S_Sideview.png",
    id: 8,
    status: false,
  },
  {
    name: "M60",
    img: "./src/assets/models/640px-M60_StandardIssue.png",
    id: 9,
    status: false,
  },
  {
    name: "PIKE-556",
    img: "./src/assets/models/640px-Pike-556_Sideview.png",
    id: 10,
    status: false,
  },
  {
    name: "CB-01",
    img: "./src/assets/models/640px-CB-01_Repeater_sideview.png",
    id: 11,
    status: false,
  },
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
