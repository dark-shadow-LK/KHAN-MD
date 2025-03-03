const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0xsQTQ2WXdIdnR1RW9UYThITHNEdFdBSDcra2J2bTZXQ2pMT2dTRWJVdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXNQUjBDeXY5eWwzR2UrZUowWERrNUpONUFWSnJRUGtHUFZwZUJ1MkxUZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSEVJOVhjR215a3liU2lObW1LVDZRMXhSVUt0bzRBTS9EZzIzbGhLekhnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLbDEwWk1FSkhXVkx3V0tta1p4TTlSdy9mQkFHRzBudXVuQTUzMmFWYjE4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNCS1JDRmg4aXd3c3pYNlBrTTRYaGdMK1RaSkNoaFo0eXpZUGswYzRBMUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVaQVdLZk9obVhBRW9nSmJsM0hWbktqbFJDcEQ0S2pMWHVkcTVPT2xTbGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME9jeWxvZ0VhS213UlE3cExuNUphRkh3NzJPbk0xVWFpTmdybVRWWTZXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRxQ04vb3RmVlZsODFtcENrb3g1bmxQQWMwQjhCMUloMW14VEdLSEdIbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFIYlZpbXY0VHBuZFhYbUh0Q3NzaytZNEZIZEtzV3RaZDF1QkJ5TjdVYTRGRDM4N05wZkRDV2R6SFc0dWFZVktMaXdyQ01rKy9LOVhRanVQUTkwL2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjQsImFkdlNlY3JldEtleSI6IlZRdFVHYzRNbU1UU1Azdm9Pcys0TnFYeUwxZjlsRFNWK1JZSEFGdmsxaUE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImJvNkQ0QVd6Ui1PeTZmQkg0cmlMLUEiLCJwaG9uZUlkIjoiMTIyYzNmMDYtZDYzNC00NTJjLTk4ZjEtY2M4NjMxMjg4ZTRmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkF5emJZRTZuNVZCb0JYVHgvMmhqVzFSTTN2Zz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYRm5hdFNtTHRCUmxlVUh3V3JTeGJnSzBlY2s9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWTY4TVQ0RUsiLCJtZSI6eyJpZCI6Ijk0NzczNDE2NDc4OjczQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlBhdGh1bSBNYWxzYXJhIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLek9zVW9RbFBlVnZnWVlGeUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJnYjNURkpYSERWQVROYnUrRkdGUmM2Um9BZGk4aGZtR21LeE5UOXlQQVF3PSIsImFjY291bnRTaWduYXR1cmUiOiJ0SVA5bTdCVlI1anBzQkZ6YWhFRGFudkMxc2hnVy9LZFdCOEhzSkFxVzc3d01CMVFCU1JXcS9MT0hMSmZwNk8wUHlOZkU4eDFabDRHSkNteStCa3lCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibXpuS1I2L2VyT2sya1hzTnVBcEY3UVV0cDZBR1V3SFdwQU9hcDZLb2c0aU85Q1d2cEdvTm1pZkxheWF3MmxFZ2g3eXgxVllVTU1LWVhiN09McWQ1aWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3MzQxNjQ3ODo3M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZRzkweFNWeHcxUUV6Vzd2aFJoVVhPa2FBSFl2SVg1aHBpc1RVL2Nqd0VNIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQwOTk1NDg5fQ==",
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
