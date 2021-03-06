import { Request, Response } from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";
import { config } from "../../../../config"

const PAGE_INFO = `https://graph.facebook.com/${config.api_version}/me`;
const MESSAGE_API = `https://graph.facebook.com/${config.api_version}/me/messages`;
const PROFILE_API = `https://graph.facebook.com/${config.api_version}/me/messenger_profile`;

export const sendMessage = async (psid: any, response: any) => {
  // TODO : Add logging here
  let request_body = {
    "recipient": {
      "id": psid
    },
    "message": response,
    "access_token": config.page_access_token
  }

  await invokeApi(MESSAGE_API, request_body);
}

export const setupPersistentMenu = async (menu: any, getStarted: any) => {
  // TODO : Add logging here
  let request_body = {
    "get_started": getStarted,
    "persistent_menu": menu,
    "access_token": config.page_access_token
  }

  await invokeApi(PROFILE_API, request_body);
}

const invokeApi = async (api: string, payload: any) => {
  // TODO : Add logging here
  await fetch(api, {
    method: 'post',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
}

export const getPageInfo = async () => {
  const url = new URL(PAGE_INFO);
  const params: any = {
    access_token: config.page_access_token,
    fields: 'id'
  }
  
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  // TODO : Add logging here
  const response = await fetch(url, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  });
  return await response.json();
}