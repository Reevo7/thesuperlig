import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://thesuperlig.vercel.app";

  const steamUrl =
    "https://steamcommunity.com/openid/login?" +
    "openid.ns=http://specs.openid.net/auth/2.0&" +
    "openid.mode=checkid_setup&" +
    `openid.return_to=${encodeURIComponent(baseUrl + "/api/steam/callback")}&` +
    `openid.realm=${encodeURIComponent(baseUrl)}&` +
    "openid.identity=http://specs.openid.net/auth/2.0/identifier_select&" +
    "openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select";

  return NextResponse.redirect(steamUrl);
}