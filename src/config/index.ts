import dotenv from "dotenv"
dotenv.config()

export const config = {
  port : process.env.APP_PORT,
  api_version : process.env.API_VERSION,
  server_url : process.env.SERVER_URL,
  verify_token : process.env.FB_WEBHOOK_VERIFY_TOKEN,
  app_secret : process.env.APP_SECRET,
  page_access_token : process.env.PAGE_ACCESS_TOKEN
}