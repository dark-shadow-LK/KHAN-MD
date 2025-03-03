const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUo0dFdEK3gvVGNtQU1xdlFNbnZueUloRllYdG1FZ2lrZGxPaFNGcVdGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVpkcFRaU3RGZ1UzMEdXZDdjdjhxVHlSMVQrNFFrVjJMWGtwaDJBQWJWST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSExST25aTWh3ZG1VeGlYblF6YitmditsU1FFbUFDbVNrd3lnNW9hVWxZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyM0UxQ3V4NDBXS2p6eVBZajA0SG9CTmNyYkQ5T0lnWkhEMSt0dHk0ZUFVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNLTm1yTkZqVGlVUXZCb05IK1RWSWhPVnVWMWxSQUluV0lsK0NPTDhia2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InR1WEZsQytLQzgyelFtMWs0dzdCV2JGeTNteVFRQWpVVTRYWkVGbTEzd1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEJMeGNRdy93bXNMaDJ0ZzVTZTJPTG9ZT3NYZjNqQmh3LytidXlLWWtVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3ZHMWpjL2dlUXhqVTRxc3pSZTJFZVFpZGVNbWk3R0RRZXJlNWgwWExtZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZRMXRodHdmVGF3SEwvZktTRmxULy9tRGpsOE5UWG5GNHFNWmFXZGNTSzR0TmI5WGE5R0VyVktyMDFsb1l5a015WU84elJ2Ym9KM3NKeHVRbXpqQkRBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE1LCJhZHZTZWNyZXRLZXkiOiJ3VmFhZDJWMzVCTCtnUTh4ZnVqRWVjQ011RDdLWWk0WHUrM1k4Rk1NV05vPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzczNDE2NDc4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNGRjBCNzY0MDMxRkZGQjhBQzNGNTBFQjczRDY2REJGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDA5Nzg5NjN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjZzRmRBZmVIVGZDZkpkZjZoUm0wRmciLCJwaG9uZUlkIjoiYTA4ZWIyYTgtZjNlNy00NzlkLWI4NDctYWRlOTJjZGY0ZmFlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNFZXNUZUZPeHlMSnliTVRZUlFTK01VYnNQOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLYlZ6YzIxMlYyMEwyTzE0RGUvVUpEZDVqdm89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNUgxQ0hQR0UiLCJtZSI6eyJpZCI6Ijk0NzczNDE2NDc4OjcxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlBhdGh1bSBNYWxzYXJhIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLek9zVW9ROS9XVXZnWVlGU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJnYjNURkpYSERWQVROYnUrRkdGUmM2Um9BZGk4aGZtR21LeE5UOXlQQVF3PSIsImFjY291bnRTaWduYXR1cmUiOiJsbEl4cC9LZTFqZFlmRndhT2xIeGlXYmlsZWZFMVd5K3FGOEJaR0hqcDY1RmFpNzlxcllkbmJvSmtBbSsxUGJ5ZVhydXhBVDFlczg1TG9NTFZrTVhDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoid3RFWkk2NkpCNkwxeG1VbU0zSFpiaUw5c2dSdkRtdWVxOW5WSkUzaW15WnhvUjA5WURJSCs0NnBWNy9id1ZjYUVHMHRLVnBvamxUUndJaTFNVlNLRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3MzQxNjQ3ODo3MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZRzkweFNWeHcxUUV6Vzd2aFJoVVhPa2FBSFl2SVg1aHBpc1RVL2Nqd0VNIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQwOTc4OTQ5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtmZiJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY DARK-SHADOW -MD 🤍*",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "DARK SHADOW-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "DARK-SHADOW-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94773416478",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "DARK SHADOW",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴍᴅ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/1ece2e0281513c05d20ee.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> HELLO I'AM *DARK-SHADOW-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "94773416478",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
