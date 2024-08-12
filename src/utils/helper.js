import { ABOUT_LINK_PATH, APP_STORE_LINK_PATH, DISCORD_LINK_PATH, GOOGLE_PAY_LINK_PATH, HOME_LINK_PATH, MARKETPLACE_LINK_PATH, MORE_LINK_PATH, UGC_LINK_PATH } from "./constants";
import discord from "../assets/images/webp/discord.webp";
import appStore from "../assets/images/webp/app-store.webp";
import googlePay from "../assets/images/webp/google-pay.webp"
export const NAV_LINK_LIST = [
    {
        title: "Home",
        url:HOME_LINK_PATH
    },
    {
        title: "About",
        url:ABOUT_LINK_PATH
    },
    {
        title: "AI-UGC",
        url:UGC_LINK_PATH
    },
     {
        title: "Marketplace",
        url:MARKETPLACE_LINK_PATH
    },
      {
        title: "More",
        url:MORE_LINK_PATH
    },
]

export const HERO_SOCIAL_ICONS_LIST = [
    {
        image: discord,
        url:DISCORD_LINK_PATH
    },
     {
        image: appStore,
        url:APP_STORE_LINK_PATH
    },
      {
        image: googlePay,
        url:GOOGLE_PAY_LINK_PATH
    },
]

export const EXPLORE_DATA_LIST = [
    "Play with your own cute & adorable girls whose in charge of saving NANOSPACE world.","Characters are fully customizable with various costumes, attractive gears and powerful weapons."
]
