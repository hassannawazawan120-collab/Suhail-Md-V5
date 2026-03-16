const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_39_03_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDIzLFxuICAgICAgICA3MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDk3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzksXG4gICAgICAgIDI3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4LFxuICAgICAgICA4NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDY0LFxuICAgICAgICA1NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgODMsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjExLFxuICAgICAgICAzMSxcbiAgICAgICAgMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI2LFxuICAgICAgICA2MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MixcbiAgICAgICAgMjE2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDM1LFxuICAgICAgICA5NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjksXG4gICAgICAgIDUwLFxuICAgICAgICAxODgsXG4gICAgICAgIDg2LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNSxcbiAgICAgICAgODksXG4gICAgICAgIDM1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk5LFxuICAgICAgICAzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyLFxuICAgICAgICA0MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxLFxuICAgICAgICAxODQsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzLFxuICAgICAgICA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgODUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4LFxuICAgICAgICA3NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDM1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAzNixcbiAgICAgICAgMTMsXG4gICAgICAgIDg0LFxuICAgICAgICAyNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjgsXG4gICAgICAgIDQzLFxuICAgICAgICAzNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDczLFxuICAgICAgICAxODQsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDcyLFxuICAgICAgICAzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0LFxuICAgICAgICAxODYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDMyLFxuICAgICAgICA4NyxcbiAgICAgICAgOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQyLFxuICAgICAgICA2NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImdZY0podzNBb1RkV2pBSXVZcHA2aElVbWVyRVovMGQ5dWRpRzh4QmV0ek09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDE0MDQ3NDY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBQ0IyODQ2NDJGNDI0QkQyMEVFNEQzNjgxRTZDMTlENFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NzM2OTcxNjlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0MTQwNDc0NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkFDNDVDNjIzQUQ5QTg5RThEQjQzQTUyOTM3NThGNURBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc3MzY5NzE3MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOOWEwdENDZVRoLWNkTW1PTmRKOVFnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYzZDU1ZTgwLTM4MDUtNDRkNy1hNjk3LTZmZjQ2ZmM2OTlmYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMixcbiAgICAgIDk4LFxuICAgICAgMjQ5LFxuICAgICAgMjE2LFxuICAgICAgMjA0LFxuICAgICAgNzAsXG4gICAgICA0NCxcbiAgICAgIDEwMixcbiAgICAgIDc5LFxuICAgICAgMzIsXG4gICAgICAzNSxcbiAgICAgIDI1MixcbiAgICAgIDExMSxcbiAgICAgIDE2MixcbiAgICAgIDE5NixcbiAgICAgIDIwNSxcbiAgICAgIDEwNCxcbiAgICAgIDUzLFxuICAgICAgMTQsXG4gICAgICAxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAzLFxuICAgICAgMTczLFxuICAgICAgMjM0LFxuICAgICAgMTA4LFxuICAgICAgMTk5LFxuICAgICAgODcsXG4gICAgICAxMDIsXG4gICAgICAxNzEsXG4gICAgICAyNTUsXG4gICAgICA4OCxcbiAgICAgIDIxMSxcbiAgICAgIDIwNixcbiAgICAgIDE5NCxcbiAgICAgIDE5OCxcbiAgICAgIDUwLFxuICAgICAgMTIyLFxuICAgICAgMjEyLFxuICAgICAgNjgsXG4gICAgICA0OSxcbiAgICAgIDI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTm0wZ3BZRkVJcng0YzBHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvczFBWlBadlZkMU5MRmxBVEVkUlpMWCtHM0ptdkdIMC94RTVGcXRCY3hrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImFHdllIVmNFNjJOTlV1bEJaN1ViWlZ6NExQMzN1MU92Tlc0bUpOdWF6cVNSbEdrT3g1eE5CRFRiSkE1b1c1RXFZYlFGRjgySEp3WTZIWXFoT09SY0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIms3VGlKdHJqYU94eWcwaFBRR3dZSW9PdTZXejBYS290THBvViszRXpNUlQwbVMyZlhpT1gvZnArNXIwMFE4WC92QmZDMUxEbzBndXVJS05vWEdmYUR3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDE0MDQ3NDY3OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTAxNTY4MjE0MTgwMTM6MTBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiLlwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDE0MDQ3NDY3OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NzM2OTcxNjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLSktcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtKSy5qc29uIjogIntcImtleURhdGFcIjpcIlc4SEFMNkVXcU0yVWppV1Ara0gzc1ExbTVabE9zUm5uOFgwQWVJOHQyVWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM4ODM1NDEzNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzczNjk3MTY4NDQ3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
