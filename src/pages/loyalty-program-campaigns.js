import * as React from "react";
import Achievements from "../components/Achievements";
import Campaign from "../components/Campaign";
import CampaignHelp from "../components/CampaignHelp";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import HowWedoit from "../components/HowWedoit";
import Layout from "../components/Layout";
import Platform from "../components/Platform";
import ProgramRewards from "../components/ProgramRewards";
import RewardTypes from "../components/RewardTypes";
import Stakeholders from "../components/Stakeholders";
import WhatPeopleSay from "../components/WhatPeopleSay";
import WhoAreWe from "../components/WhoAreWe";
import WideCard from "../components/WideCard";
// stakeholder icons
import EmotionalIcon from "../images/loyalty-icons/relation/Emotional.webp";
import MonetaryIcon from "../images/loyalty-icons/relation/Monetary.webp";
import RecognitionIcon from "../images/loyalty-icons/relation/Recognition.webp";

// campaigns
import channelTradeLoyaltyProgram from "../images/loyalty-icons/campaigns/Channel-trade-loyalty program.webp";
import customersLoyaltyProgram from "../images/loyalty-icons/campaigns/Customers-loyalty-program.webp";
import incentiveProgram from "../images/loyalty-icons/campaigns/Incentive-programs.webp";
import influencerLoyaltyProgram from "../images/loyalty-icons/campaigns/Influencer-loyalty-program.webp";
import recognitionProgram from "../images/loyalty-icons/campaigns/Recognition-programs.webp";
import referalProgram from "../images/loyalty-icons/campaigns/Referral-programs.webp";
import retailProgram from "../images/loyalty-icons/campaigns/Retail-loyalty-program.webp";

// loyalty campaign
import connectChannelPartners from "../images/loyalty-icons/campaign-help/Connect-channel-partners.webp";
import customerEngagement from "../images/loyalty-icons/campaign-help/Customer-engagement.webp";
import customerReferral from "../images/loyalty-icons/campaign-help/Customer-referral.webp";
import customerRetention from "../images/loyalty-icons/campaign-help/Customer-retention.webp";
import dormantActivation from "../images/loyalty-icons/campaign-help/Dormant-activation.webp";
import IncrementalSales from "../images/loyalty-icons/campaign-help/Incremental-sales.webp";
import inspireLoyalty from "../images/loyalty-icons/campaign-help/Inspire-loyalty.webp";
import newCustomerAcquisition from "../images/loyalty-icons/campaign-help/New-customer-acquisition.webp";
import repeatPurchase from "../images/loyalty-icons/campaign-help/Repeat-purchase.webp";

const IndexPage = () => {
  const loyaltyData1 = [
    {
      icon: newCustomerAcquisition,
      title: "New Customer Acquisition",
      class: "",
    },
    {
      icon: customerReferral,
      title: "Customer Referral",
      class: "",
    },
    {
      icon: customerEngagement,
      title: "Customer Engagement",
      class: "",
    },
    {
      icon: inspireLoyalty,
      title: "Inspire Loyalty",
      class: "",
    },
    {
      icon: repeatPurchase,
      title: "Repeat Purchase",
      class: "",
    },
  ];

  const loyaltyData2 = [
    {
      icon: IncrementalSales,
      title: "Incremental Sales",
      class: "",
    },
    {
      icon: connectChannelPartners,
      title: "Connect With Channel Partners",
      class: "",
    },
    {
      icon: dormantActivation,
      title: "Dormant Activation",
      class: "",
    },
    {
      icon: customerRetention,
      title: "Customer Retention",
      class: "",
    },
  ];

  let campaignData = [
    {
      icon: customersLoyaltyProgram,
      title: "Customers loyalty program",
      subTitle: "Loyalty programs guarantee repeat business which is the need of the hour. They create win-win situations for both the business and the customer.",
    },
    {
      icon: retailProgram,
      title: "Retail loyalty program",
      subTitle: "Retail loyalty programs specially designed for your retail brand will ensure your business grows exponentially with repeat sales.",
    },
    {
      icon: channelTradeLoyaltyProgram,
      title: "Channel or trade loyalty program",
      subTitle: "We create dynamic programs that help in motivating channel partners, dealers and helps in increasing the order size",
    },
    {
      icon: influencerLoyaltyProgram,
      title: "Influencer loyalty program",
      subTitle: "We can design loyalty programs for carpenters, painters, mechanics and other business influencers",
    },
    {
      icon: incentiveProgram,
      title: "Incentive programs",
      subTitle: "Employee motivation and engagement programs for employees can help incentivise them to perform better and improve their efficiency",
    },
    {
      icon: referalProgram,
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
    {
      title: "End-to-end solution",
      subTitle: "Create loyalty programs from scratch, structure earn & burn mechanism, rewards catalog & fulfilment – all under one roof",
    },
    {
      title: "Detailed data insights",
      subTitle: "Get key analysis, insights, trends that can help you make better marketing decisions",
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
        className={"loyalty-hero"}
        heading={"Did You Know That You Can Repeat Sales By 15% In 3 Months With Loyalty Programs?"}
        subHeading={"Our loyalty programs give guaranteed results"}
        iframeData={{
          id: "223383549921462",
          label: "Loyalty Program Form",
        }}
      />
      <ProgramRewards cards={programCards} heading={"What you get with loyalty programs at RewardPort"} />
      <WideCard info={"Execute a specialized program for your customers, employees, dealers or channel partners"} />
      <Stakeholders datas={stakeHolderDatas} heading={"An all-encompassing relationship for stakeholders"} />
      <WideCard info={"Are you ready to ensure your stakeholders are rewarded at every step?"} />
      <Campaign datas={campaignData} />
      <Platform />
      <HowWedoit />
      <CampaignHelp heading={"How our loyalty campaigns can help"} loyaltyData1={loyaltyData1} loyaltyData2={loyaltyData2} />
      <RewardTypes />
      <WhatPeopleSay />
      <WideCard info={"Execute a specialized program for your customers, employees, dealers or channel partners"} />
      <WhoAreWe />
      <Achievements />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
export const Head = () => {
  return (
    <>
      <title>Loyalty Program Campaigns - RewardPort</title>
      <link rel="canonical" href="https://www.rewardport.in/loyalty-program-campaigns/" />
      <meta name="google-site-verification" content="PIRfZWOjejRpxwsQelvoK6SUR5MWF-IojYgebJmePQI" />
      <meta name="facebook-domain-verification" content="8ytg3l1ltzf7v82cmpqhcvpccsqfrj" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" /> <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Loyalty Program Campaigns - RewardPort" />
      <meta
        property="og:description"
        content="Did you know that you can repeat sales by 15% in 3 months with loyalty programs? Our loyalty programs give guaranteed results Get In Touch Talk to us today to execute a specialized loyalty program -OR- +91 9930030693 What you get with loyalty programs at RewardPort Low cost rewards starting at Rs 10 High perceived [&hellip;]"
      />
      <meta property="og:url" content="https://www.rewardport.in/loyalty-program-campaigns/" />
      <meta property="og:site_name" content="RewardPort" />
      <meta property="article:publisher" content="http://facebook.com/rewardportindia/" />
      <meta property="article:modified_time" content="2022-09-22T16:42:06+00:00" />
      <meta property="og:image" content="https://www.rewardport.in/media/2022/07/Rwardport-Logo.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:label1" content="Est. reading time" />
      <meta name="twitter:data1" content="11 minutes" />
      <meta name="title" content="Loyalty Program Campaigns - RewardPort" />
      <meta
        name="description"
        content="Did you know that you can repeat sales by 15% in 3 months with loyalty programs? Our loyalty programs give guaranteed results Get In Touch Talk to us today to execute a specialized loyalty program -OR- +91 9930030693 What you get with loyalty programs at RewardPort Low cost rewards starting at Rs 10 High perceived [&hellip;]"
      />
    </>
  );
};
