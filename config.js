const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ091ZmpMaU44WVQyK3V4NlFkQ2c3M1lPSU5FQUdGUUJRMVV5Sm80UW5uUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicHRGbzJPeUxISnlYaDRxTWp6QnFhR1FsTnFVVCthN29iSHdJdkNrREl4Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSVdERDRiVzNqUVg1dExTZG5Hb2dlVi9KQUtQTjJ1MWJibExhcXdvQVc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvdXhNREpCNllnZnllN2hBTHZLWHlQOGt1QWZuVERLbXpjUFNONWdFc0hFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVPWVZ3NkppMUdlYzkxSGJwSnZUUmc0OEl0MU5yeitSMWZmZ08wVDhjbDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im04Zmptc2RkSUVhYXU3SU8rc21Zc2dIenpibDJjUkd0aVZVVmpvS253MTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid04rWGljTXFIQThZNnlTaWl5VjVUT2VHSzJzVGRFZVFoQTFjQ0JnT2Eyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOXhENWdndG9pbFpIUmtCY2M5RDVZWHBvN1hqRmNtaVBHWDNielV6VS9HWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5NNDhQK2tTVGUxS2JQT0F2SjgvN1Fkc3FqdEl5anRSa3lEaHAzTEFiOEwxK2NOTUpmTkZ1OXZsR0s4MGpnWnRackFmcUtsM0ZNTVlwQ3hyMWxVNmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAyLCJhZHZTZWNyZXRLZXkiOiJoL0dvKzBnQk5KV1drNGpUUnBhS3RHa0dpdGNSaE8yTE95TmJ6UEkxTEFRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI3NjI1NDM3N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNzlBRDc2M0U3MkQ3N0QzQUQzMzdDMDY3QjEyQTVGNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MDIxMzc5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJQNkxTQllLMiIsIm1lIjp7ImlkIjoiOTIzMjc2MjU0Mzc3OjcxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjU1NzM5OTY4OTI1NzE0OjcxQGxpZCIsIm5hbWUiOiJTdWZ5YW4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lXQjk0Z0hFUHVFcThVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlFxMTkvYkxBZkcyNTFPckJ4ZlJkT2dOUkVCVE9OUXBSZkVGL09pTVEvU0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlV2RVBPVC92akZCNzRYd1hOek1WVUJ3bm5EWnJxdXR6dVdJUU5yMWtnbUVvcWEyWHplUDhheStXM043MVhtdjFLbzJTN3F4OVA5alNoYzI2ejlPbUFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJpZGFwQ3lMSndtMFJaY3Q2VDBCQ0dDai9oNnh0a0Z2OG1rc1BuMFVjN0tBOStmcE5MVmE5YVF3VnpKbW53d0VqUGJvYXBQNlhaQVRNYUxaOVpzc1pqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzI3NjI1NDM3Nzo3MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVS3RmZjJ5d0h4dHVkVHF3Y1gwWFRvRFVSQVV6alVLVVh4QmZ6b2pFUDBoIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYwMjEzNzQsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRXp6In0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝙀3_𝙃𝘼𝘾𝙆𝙀𝙍_𝙈𝘿 ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/p4yxcn.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E3_HACKER_MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝙀3_𝙃𝘼𝘾𝙆𝙀𝙍_𝙈𝘿",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923495178663",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*E3_HACKER_MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3_HACKER_MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/p4yxcn.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
