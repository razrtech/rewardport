import * as React from "react";
import Achievements from "../components/Achievements";
import Campaign from "../components/Campaign";
import Footer from "../components/Footer";
import ProgramRewards from "../components/ProgramRewards";
import RewardTypes from "../components/RewardTypes";
import WhatPeopleSay from "../components/WhatPeopleSay";
import WhoAreWe from "../components/WhoAreWe";
import WideCard from "../components/WideCard";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Stakeholders from "../components/Stakeholders";

// campaign
import sweepStakes from "../images/Sales-promotion-Icons/campaign/Sweepstakes.webp";
import assuredGifts from "../images/Sales-promotion-Icons/campaign/Assuredgifts.webp";
import giftwithpurchase from "../images/Sales-promotion-Icons/campaign/Gift-with-purchase.webp";
import scratchandwin from "../images/Sales-promotion-Icons/campaign/Scratch-n-win.webp";

// campaign help
import billPentration from "../images/Sales-promotion-Icons/campaign-help/Bill-penetration.webp";
import customerEngagement from "../images/Sales-promotion-Icons/campaign-help/Customer-engagement.webp";
import customerReferral from "../images/Sales-promotion-Icons/campaign-help/Customer-referral.webp";
import customerRetention from "../images/Sales-promotion-Icons/campaign-help/Customer-retention.webp";
import dormantActivation from "../images/Sales-promotion-Icons/campaign-help/Dormant-activation.webp";
import increaseOffTakes from "../images/Sales-promotion-Icons/campaign-help/Increase-off-takes.webp";
import IncrementalSales from "../images/Sales-promotion-Icons/campaign-help/Incremental-sales.webp";
import inspireLoyalty from "../images/Sales-promotion-Icons/campaign-help/Inspire-loyalty.webp";
import newCustomerAcquisition from "../images/Sales-promotion-Icons/campaign-help/New-customer-acquisition.webp";
import propductLaunchSampling from "../images/Sales-promotion-Icons/campaign-help/Product-launch-and-sampling.webp";
import repeatPurchase from "../images/Sales-promotion-Icons/campaign-help/Repeat-purchase.webp";

const SalesPage = () => {
  const campaignData = [
    {
      icon: sweepStakes,
      title: "Sweepstakes",
      subTitle: "Customers can win mega prizes with small tasks! All they have to do is try their luck with the purchase of your product.",
    },
    {
      icon: scratchandwin,
      title: "Scratch n win",
      subTitle: "Surprise your customers with assured gifts with purchase via scratch n win",
    },
    {
      icon: assuredGifts,
      title: "Assured gifts",
      subTitle: "Ensure customers win something big or small with every purchase",
    },
    {
      icon: giftwithpurchase,
      title: "Gift with purchase",
      subTitle: "Ensure your customers get gifts with every purchase they make - whether big or small - all gifts can make you smile!",
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
      title: "Detailed data insights",
      subTitle: "Get key analysis, insights, trends that can help you make better marketing decisions",
    },
  ];

  const stakeHolderDatas = [
    {
      title: "New customer acquisition",
      info: "Sales promotions can help reach out to new customers out of the brand's network",
      icon: newCustomerAcquisition,
    },
    {
      title: "Customer referral",
      info: "Sales promotions can help customers engage in referrals which grows the consumer base",
      icon: customerReferral,
    },
    {
      title: "Customer engagement",
      info: "Sales promotions help the customers engage better with the brand",
      icon: customerEngagement,
    },
    {
      title: "Inspire loyalty",
      info: "Sales promotions enable fidelity of the customers towards your brand",
      icon: inspireLoyalty,
    },
    {
      title: "Repeat purchase",
      info: "Sales promotions encourage customers to keep purchasing from your brand",
      icon: repeatPurchase,
    },
    {
      title: "Customer retention",
      info: "Not surprisingly, sales promotions can make sure that you retain your customers for a long duration",
      icon: customerRetention,
    },
    {
      title: "Dormant activation",
      info: "Sales promotions can help revive customers who have been dormant for a long time",
      icon: dormantActivation,
    },
    {
      title: "Incremental sales",
      info: "Via sales promotions, sales can be incremented and the number and amount of purchases by the customers can go up",
      icon: IncrementalSales,
    },
    {
      title: "Bill penetration",
      info: "The number of bills of the category or set of products versus the total bills can be increased via sales promotion",
      icon: billPentration,
    },
    {
      title: "Increase off takes",
      info: "Sales volume during a particular period can be increased via sales promotions",
      icon: increaseOffTakes,
    },
    {
      title: "Product launch and sampling",
      info: "Sales promotions can help with the launch of new products and sampling",
      icon: propductLaunchSampling,
    },
  ];

  return (
    <Layout>
      <HeroSection
        className={"sales-hero"}
        heading={"Start Your Sales Promotion Campaigns"}
        subHeading={"Starting at ₹1"}
        iframeData={{
          id: "223411142305439",
          label: "Sales Promotion Form",
        }}
      />
      <ProgramRewards cards={programCards} heading={"What you get with sales promotions programs at RewardPort"} />
      <WideCard info={"Execute a specialized program for your customers, employees, dealers or channel partners"} />
      <Campaign datas={campaignData} />
      <Stakeholders datas={stakeHolderDatas} heading={"How sales promotions can help"} />
      <RewardTypes />
      <WhatPeopleSay />
      <WideCard info={"Execute a specialized sales promotions program for your customers"} />
      <WhoAreWe />
      <Achievements />
      <Footer />
    </Layout>
  );
};

export default SalesPage;
export const Head = () => {
  return (
    <>
      <title>Sales Promotion Campaigns - RewardPort</title>
      <link rel="canonical" href="https://www.rewardport.in/sales-promotion-campaigns/" />
      <meta name="google-site-verification" content="PIRfZWOjejRpxwsQelvoK6SUR5MWF-IojYgebJmePQI" />
      <meta name="facebook-domain-verification" content="8ytg3l1ltzf7v82cmpqhcvpccsqfrj" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" /> <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href="https://www.rewardport.in/sales-promotion-campaigns/" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Sales Promotion Campaigns - RewardPort" />
      <meta
        property="og:description"
        content="Did you know you can boost sales by 15% in 3 months with sales promotions Effective sales promotions to improve business Get In Touch Talk to us to execute effective sales promotions today -OR- +91 9930030693 What you get with sales promotions programs at RewardPort Low cost rewards starting at Rs 10 High perceived value [&hellip;]"
      />
      <meta property="og:url" content="https://www.rewardport.in/sales-promotion-campaigns/" />
      <meta property="og:site_name" content="RewardPort" />
      <meta property="article:publisher" content="http://facebook.com/rewardportindia/" />
      <meta property="article:modified_time" content="2022-11-28T11:57:10+00:00" />
      <meta property="og:image" content="https://www.rewardport.in/media/2022/07/Rwardport-Logo.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:label1" content="Est. reading time" />
      <meta name="twitter:data1" content="10 minutes" />
      <meta name="title" content="Sales Promotion Campaigns - RewardPort" />
      <meta
        name="description"
        content="Did you know you can boost sales by 15% in 3 months with sales promotions Effective sales promotions to improve business Get In Touch Talk to us to execute effective sales promotions today -OR- +91 9930030693 What you get with sales promotions programs at RewardPort Low cost rewards starting at Rs 10 High perceived value [&hellip;]"
      />
    </>
  );
};
