import React from "react";
import ProjectsBanner from "../components/projectsComp/projectBanner";
import Layout from "../components/Layout/index";
import ProjectsSection from "../components/projectsComp/projectSection";
import ServiceSlider from "../components/projectsComp/serviceSlider";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

import { useEffect } from "react";
import { getAnalytics, logEvent } from "firebase/analytics";
export default function Projects({ data }) {
  console.log("data", data, data?.length);

  useEffect(() => {
    const analytics = getAnalytics();
    logEvent(analytics, "screen_Projects", {
      firebase_screen: "Projects",
    });
  }, []);

  return (
    <Layout>
      <ProjectsBanner />

      <ProjectsSection data={data} />

      <ServiceSlider />
    </Layout>
  );
}

Projects.getInitialProps = async (context) => {
  // console.log('Query', context?.query?.country)
  const data = [];

  try {
    const querySnapshot = await getDocs(collection(db, "project"));

    querySnapshot.forEach((doc) => {
      console.log("doc", doc);
      data.push({
        id: doc.id,

        ...doc.data(),
      });
    });
  } catch (error) {
    console.error(error);
  }

  return {
    data,
  };
};
