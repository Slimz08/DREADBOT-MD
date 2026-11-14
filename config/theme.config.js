export default Object.freeze({
  botTitle: "✨ 𝐃𝐫𝐞𝐚𝐝𝐛𝐨𝐭 𝐌𝐃 𝐁𝐨𝐭 ✨",
  menu: {
    top: "┌──〔 ",
    titleEnd: " 〕───✦",
    infoLine: "│ ✦ ",
    itemLine: "│ ✦❯ ",
    blankLine: "│",
    bottom: "└─────────────✦"
  },
  sections: [
    { key: "General", title: "🏠 General", categories: ["General"] },
    { key: "AI & Chat", title: "🧠 AI & Chat", categories: ["AI & Chat"] },
    { key: "AI Media", title: "🎨 AI Media", categories: ["AI Media"] },
    { key: "News Desk", title: "📰 News Desk", categories: ["News"] },
    { key: "Group Tools", title: "👥 Group Tools", categories: ["Group"] },
    { key: "Downloads", title: "📥 Downloads", categories: ["Downloads"] },
    {
      key: "Fun Games",
      title: "🎮 Fun Games",
      commandNames: ["calc", "poll", "coinflip", "dice", "8ball", "choose", "trivia", "riddle", "activity", "pokemon"]
    },
    {
      key: "Fun Mix",
      title: "🎉 Fun Mix",
      categories: ["Fun"],
      excludeNames: ["pokemon"]
    },
    {
      key: "Anime Info",
      title: "🌸 Anime Info",
      categories: ["Anime Info", "Anime Rankings"]
    },
    {
      key: "Anime Art",
      title: "🖼 Anime Art",
      categories: ["Anime Random", "Anime Tools", "Anime Images"]
    },
    {
      key: "Anime GIFs",
      title: "🎞 Anime GIFs",
      commandNames: ["angry","baka","bleh","blowkiss","blush","bored","carry","clap","confused","cry","cuddle","dance","facepalm","feed","handhold","handshake","happy","highfive"]
    },
    {
      key: "Anime Reactions",
      title: "💞 Anime Reactions",
      commandNames: ["hug","kabedon","kiss","lappillow","laugh","lurk","nod","nom","nope","nya","pat","peck","poke","pout","run","salute","shake"]
    },
    {
      key: "Anime Moves",
      title: "⚡ Anime Moves",
      commandNames: ["shocked","shrug","sip","sleep","smile","smug","spin","stare","teehee","think","thumbsup","tickle","wag","wave","wink","yawn","yeet"]
    },
    { key: "Canvas Tools", title: "🖼 Canvas Tools", categories: ["Canvas"] },
    { key: "Media Tools", title: "🛠️ Media Tools", categories: ["Media & Tools"] },
    { key: "Chat Privacy", title: "🔒 Chat Privacy", categories: ["Chat & Privacy"] },
    { key: "Status Tools", title: "📱 Status Tools", categories: ["Status"] },
    { key: "Owner Tools", title: "👑 Owner Tools", categories: ["Owner"] }
  ]
});
