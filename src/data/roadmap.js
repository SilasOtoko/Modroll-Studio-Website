// status must be 'released', 'next', or 'planned' — anything else renders unstyled
const roadmap = [
  {
    title: 'Critfall 0.2.0',
    status: 'released',
    note: 'd20 attack rolls, dice damage, crits and fumbles for Minecraft 1.21.1 — out now on GitHub.',
  },
  {
    title: 'Store launch',
    status: 'next',
    note: 'Critfall lands on Modrinth and CurseForge for one-click installs. Highly recommended to use alongside Initiative.',
  },
  {
    title: 'Initiative',
    status: 'planned',
    note: 'Dice-driven turn order for Minecraft combat. Other features are welcome to be requested.',
  },
  {
    title: 'Checks',
    status: 'planned',
    note: 'Ability checks and saving throws as well as other RPG mechanics. Other features are welcome to be requested.',
  },
];

export default roadmap;
