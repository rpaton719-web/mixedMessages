const months = Math.floor(Math.random() * 50) + 1;
const weeks = Math.floor(Math.random() * 100) + 1;
const days = Math.floor(Math.random() * 2000) + 1;
const messages = [
  "Hello Traveller!",
  "Who is this?",
  "I am Spock, pleased to meet you!",
  "I have been on my mission for a long time, and I have seen many things.",
  "My current mission is to explore new worlds and seek out new life and new civilizations.",
  "I am a Vulcan, and I value logic and reason above all else.",
  "I am also a member of Starfleet, and I serve as the science officer on the starship Enterprise.",
  "I am always eager to learn and discover new things, and I hope to share my knowledge with you.",
  "My current mission is classified, but I can tell you that it involves exploring a new planet and studying its inhabitants.",
  `I have been on my mission for ${months} months, ${weeks} weeks, and ${days} days.`,
];

console.log(messages[Math.floor(Math.random() * messages.length)]);
