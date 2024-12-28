const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254710261624";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_48_12_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA3OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzLFxuICAgICAgICAzNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDMzLFxuICAgICAgICAzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDY1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODcsXG4gICAgICAgIDczLFxuICAgICAgICAxOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgNjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjksXG4gICAgICAgIDc2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA2MixcbiAgICAgICAgOTUsXG4gICAgICAgIDIzLFxuICAgICAgICA1MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxNixcbiAgICAgICAgMzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDk2LFxuICAgICAgICA4MCxcbiAgICAgICAgNTksXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDYyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODQsXG4gICAgICAgIDM3LFxuICAgICAgICA2MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODksXG4gICAgICAgIDEsXG4gICAgICAgIDM5LFxuICAgICAgICA1NixcbiAgICAgICAgMjMyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDgxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDYwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDgzLFxuICAgICAgICA3NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzMsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjI1LFxuICAgICAgICA2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjExLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDMxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMCxcbiAgICAgICAgNzksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTksXG4gICAgICAgIDg1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS3lId1Q0VnhxNnNUVWwrR3dDMVI5dmw2OE5pdWF5Y21vYitLSHBsb0VIQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MTAyNjE2MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjkxNTc3OTM3Mzc4MkNENDNFMkU5MzkwQUZGRDIyREYzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTM5NzMyMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJyQTRKMElRU1NCaTJZM3VvZURuUTNnXCIsXG4gIFwicGhvbmVJZFwiOiBcImM3MzdjNTQwLTVlODItNDM2ZC04OGY2LTkwNmMwYTdhYTVlYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNCxcbiAgICAgIDUzLFxuICAgICAgMjQ3LFxuICAgICAgMjI5LFxuICAgICAgMjM4LFxuICAgICAgMTQ1LFxuICAgICAgNTUsXG4gICAgICAxNzUsXG4gICAgICAxMTQsXG4gICAgICAxMjgsXG4gICAgICAxNzAsXG4gICAgICAxOTksXG4gICAgICAxMixcbiAgICAgIDE0MixcbiAgICAgIDE4NyxcbiAgICAgIDIwOCxcbiAgICAgIDI0MixcbiAgICAgIDI0OSxcbiAgICAgIDIwNixcbiAgICAgIDI1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjIsXG4gICAgICAyNDUsXG4gICAgICA2NixcbiAgICAgIDIxNCxcbiAgICAgIDI1MixcbiAgICAgIDI1LFxuICAgICAgODgsXG4gICAgICA2MCxcbiAgICAgIDY2LFxuICAgICAgMzYsXG4gICAgICAyMTksXG4gICAgICAxMjksXG4gICAgICAxNDQsXG4gICAgICAyNTMsXG4gICAgICAyOCxcbiAgICAgIDE2OSxcbiAgICAgIDE2NyxcbiAgICAgIDEwOSxcbiAgICAgIDI0NCxcbiAgICAgIDEzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUTEdBRVoxMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzEwMjYxNjI0OjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUHV0aW5cIixcbiAgICBcImxpZFwiOiBcIjI0OTU1MDg4NzUxNDE3MTo0M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKamdzYWdIRUwrZndMc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFlbXVFV1hNcGc0dzI5ZEZRbmpPUjRGLzYxay9OdTVlUndDWmN2cmhBRkk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZllSeVhJUG80YXZRWXcvcnJrYUxHUytuNVJacDlWVWdWaExKQkpyY0xueFBBdmlDenY5c2VpLzR4aUNYZG1vbmk0ZUQxMGZaNEcvdTloeW5jbTZ5Q1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaUdLYmhPR2gzQWlicVFMKzUyU2daMzBhNzVJY0d3QUpnN0NMOWFlM29YeE1EZUpXV1RPOGtPTllYK3JBSm5LOXN4RmFIdmkxQ251UzdVRUg3WlVLamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzEwMjYxNjI0OjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1Mzk3MzE1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
