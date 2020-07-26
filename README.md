# Sample Seller Command bot
## Setting up POC
setup process environment variable with .env or export environment variable (.env will not commit to git)

### Environment variable needed
APP_PORT - port to run app
API_VERSION - Facebook Graph API Version (recommend to use latest version)
SERVER_URL - a url for static resource that will embeded to message e.g. Photo/GIF/VIDEO
FB_WEBHOOK_VERIFY_TOKEN - Facebook App Webhook verification token
APP_SECRET - Facebook App Secret
PAGE_ACCESS_TOKEN - Page Access Token for page to use in POC

### sample .env file
```
APP_PORT=5000
API_VERSION=v6.0
SERVER_URL=https://48a857759fcd.ngrok.io
FB_WEBHOOK_VERIFY_TOKEN=XXXXX
APP_SECRET=XXXXXX
PAGE_ACCESS_TOKEN=XXXXX
```