import * as React from "react";
import HeroSection from "../components/HeroSection";
import Stakeholders from "../components/Stakeholders";
import Achievements from "../components/Achievements";
import Campaign from "../components/Campaign";
import CampaignHelp from "../components/CampaignHelp";
import Footer from "../components/Footer";
import HowWedoit from "../components/HowWedoit";
import Platform from "../components/Platform";
import ProgramRewards from "../components/ProgramRewards";
import RewardTypes from "../components/RewardTypes";
import WhatPeopleSay from "../components/WhatPeopleSay";
import WhoAreWe from "../components/WhoAreWe";
import WideCard from "../components/WideCard";
import Layout from "../components/Layout";
// relation
import EmotionalIcon from "../images/loyalty-icons/relation/Emotional.webp";
import MonetaryIcon from "../images/loyalty-icons/relation/Monetary.webp";
import RecognitionIcon from "../images/loyalty-icons/relation/Recognition.webp";
//campaigns
import connectWithChannelPartners from "../images/Channel-partner-Icons/campaign-help/Connect-with-channel-partners.webp";
import IncrementalSales from "../images/Channel-partner-Icons/campaign-help/Incremental-sales.webp";
import moveStock from "../images/Channel-partner-Icons/campaign-help/Move-stock.webp";
import pushInventory from "../images/Channel-partner-Icons/campaign-help/Push-inventory.webp";
import repeatPurchase from "../images/Channel-partner-Icons/campaign-help/Repeat-purchase.webp";
// campaignhelp
import channelTradeLoyalty from "../images/Channel-partner-Icons/campaign/Channel-trade-loyalty-program.webp";
import incentiveProgram from "../images/Channel-partner-Icons/campaign/Incentive-programs.webp";
import influencerLoyalty from "../images/Channel-partner-Icons/campaign/Influencer-loyalty-program.webp";
import recognitionProgram from "../images/Channel-partner-Icons/campaign/Recognition-programs.webp";
import referralProgram from "../images/Channel-partner-Icons/campaign/Referral-programs.webp";
import dealerProgram from "../images/Channel-partner-Icons/campaign/Retail-loyalty-program.webp";
import retailerProgram from "../images/Channel-partner-Icons/campaign/Retailer-program.webp";

const ChannelPartnerPage = () => {
  const loyaltyData1 = [
    {
      icon: IncrementalSales,
      title: "Incremental Sales",
      info: "Increase sales dramatically and ensure channel partners purchase more",
      class: "",
    },
    {
      icon: repeatPurchase,
      title: "Repeat Purchase",
      info: "Ensure your channel partners purchase from you regularly",
      class: "",
    },
    {
      icon: connectWithChannelPartners,
      title: "Connect With Channel Partners",
      info: "Bond with channel partners and connect with them deeply",
      class: "",
    },
    {
      icon: moveStock,
      title: "Move stock",
      info: "Move non moving stock and push inventory with ease",
      class: "",
    },
    {
      icon: pushInventory,
      title: "Push inventory",
      info: "Push out inventory that may have been lying around for a while",
      class: "",
    },
  ];

  const campaignData = [
    {
      icon: retailerProgram,
      title: "Retailer program",
      subTitle: "Create programs for your retailers and ensure they perform better",
    },
    {
      icon: dealerProgram,
      title: "Dealer programs",
      subTitle: "Craft programs specially designed for dealers",
    },
    {
      icon: incentiveProgram,
      title: "Incentive travel program",
      subTitle: "Incentivise channel partners with travel programs",
    },
    {
      icon: channelTradeLoyalty,
      title: "Channel or trade loyalty program",
      subTitle: "We create dynamic programs that help in motivating channel partners and helps in increasing the order size",
    },
    {
      icon: influencerLoyalty,
      title: "Influencer loyalty program",
      subTitle: "We can design loyalty programs for carpenters, painters, mechanics and other business influencers",
    },
    {
      icon: referralProgram,
      title: "Referral programs",
      subTitle: "Referral programs can design an eco-system of customers by a chain of referrals improving word-of-mouth reputation of your brand",
    },
    {
      icon: recognitionProgram,
      title: "Recognition programs",
      subTitle: "Channel partner programs that ensure channel partners are recognised for their efforts",
    },
  ];

  const programCards = [
    {
      title: "Low cost rewards starting at ₹10",
      subTitle: "High perceived value rewards starting at low costs ensure you get value for money",
    },
    {
      title: "Wide array of rewards",
      subTitle: "We have an attractive plethora of products and services across the categories such as experiences, health & wellness, entertainment, travel, physical goods and 15+ more categories",
    },
    {
      title: "Last mile delivery",
      subTitle: "Pin-codes across India are served",
    },
    {
      title: "Omni channels served",
      subTitle: "Channel partner programs via multiple channels can be served - including online, offline, app based, SMS based and web based.",
    },
    {
      title: "Instant rewards options",
      subTitle: "Everyone loves instant gratification and we multiple options to choose from",
    },
    {
      title: "Digital rewards options",
      subTitle: "Choose from digital rewards such as vouchers for OTT platforms, e-learn, home fitness & yoga apps and more",
    },
    {
      title: "Curated rewards as per lifestyle",
      subTitle: "Rewards are curated as per the lifestyle of your target audience that truly add value to their day to day life",
    },
    {
      title: "Gamification technology",
      subTitle: "Gamify your programs with exciting tools such as spin the wheel, digital scratch card, virtual lucky draw and more",
    },
    {
      title: "Tier based programs",
      subTitle: "You can run a well structured tier based program for dealers and channel partners that motivates to collect more points and unlock more rewards",
    },
  ];

  const stakeHolderDatas = [
    {
      title: "Emotional",
      info: "We take into consideration the emotions of dealers and channel partners and reach out to their feelings",
      icon: EmotionalIcon,
    },
    {
      title: "Monetary",
      info: "We ensure that the channel partners get some monetary benefit eventually",
      icon: MonetaryIcon,
    },
    {
      title: "Recognition",
      info: "Programs are designed to ensure channel partners and dealers are recognised for their loyalty",
      icon: RecognitionIcon,
    },
  ];

  return (
    <Layout>
      <HeroSection
        className={"channel-hero"}
        heading={"Guaranteed Results With Customised Dealer And Channel Partner Programs"}
        subHeading={"Effective Incentive programs for dealers, retailers and channel partners"}
        iframeData={{
          id: "223411547384455",
          label: "Channel Partner Form",
        }}
      />
      <ProgramRewards cards={programCards} heading={"What you get with channel partner programs at RewardPort"} />
      <WideCard info={"Execute a specialized program for your channel partners"} />
      <Stakeholders datas={stakeHolderDatas} heading={"An all-encompassing relationship for stakeholders"} />
      <Campaign datas={campaignData} />
      <Platform />
      <HowWedoit />
      <CampaignHelp
        heading={"How can our campaigns helps"}
        subHeading={"We give you a dedicated team of experienced marketers to ensure your campaigns are executed with seamless ease and perfection."}
        loyaltyData1={loyaltyData1}
        loyaltyData2={[]}
      />
      <WideCard info={"Are you ready to ensure your channel partners are rewarded at every step?"} />
      <RewardTypes />
      <WhatPeopleSay />
      <WideCard info={"Execute a specialized program for your channel partners"} />
      <WhoAreWe />
      <Achievements />
      <Footer />
    </Layout>
  );
};

export default ChannelPartnerPage;
export const Head = () => {
  return (
    <>
      <title>Channel Partner Programs - RewardPort</title>
      <link rel="canonical" href="https://www.rewardport.in/channel-partner-programs/" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Channel Partner Programs - RewardPort" />
      <meta
        property="og:description"
        content="Guaranteed results with customised dealer and channel partner programs Effective Incentive programs for dealers, retailers and channel partners Get In Touch with us today to execute an effective channel partner program -OR- +91 9930030693 What you get with channel partner programs at RewardPort Low cost rewards starting at Rs 10 High perceived value rewards starting [&hellip;]"
      />
      <meta property="og:url" content="https://www.rewardport.in/channel-partner-programs/" />
      <meta property="og:site_name" content="RewardPort" />
      <meta property="article:publisher" content="http://facebook.com/rewardportindia/" />
      <meta property="article:modified_time" content="2022-08-10T13:48:42+00:00" />
      <meta property="og:image" content="https://www.rewardport.in/media/2022/07/Rwardport-Logo.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:label1" content="Est. reading time" />
      <meta name="twitter:data1" content="20 minutes" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="google-site-verification" content="PIRfZWOjejRpxwsQelvoK6SUR5MWF-IojYgebJmePQI" />
      <meta name="facebook-domain-verification" content="8ytg3l1ltzf7v82cmpqhcvpccsqfrj" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
      <meta name="title" content="Channel Partner Programs - RewardPort" />
      <meta
        name="description"
        content="Guaranteed results with customised dealer and channel partner programs Effective Incentive programs for dealers, retailers and channel partners Get In Touch with us today to execute an effective channel partner program -OR- +91 9930030693 What you get with channel partner programs at RewardPort Low cost rewards starting at Rs 10 High perceived value rewards starting [&hellip;]"
      />
    </>
  );
};
