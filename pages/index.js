import dynamic from "next/dynamic";
import axios from "axios";
import { useState, useEffect } from "react";
const EntryPage = dynamic(() => import("../components/EntryPage"));
import Nav from "../components/Nav/Nav";

export default function Home({ loading }) {
  const [websiteLoading, setWebsiteLoading] = useState(true);
  useEffect(() => {
    setWebsiteLoading(loading);
  }, [loading]);

  return (
    <div>
      <Nav />
    </div>
  );
}

export async function getServerSideProps() {
  try {
    return {
      props: { loading: true },
    };
  } catch (error) {
    return {
      props: {
        questions: [],
        loading: false,
      },
    };
  }
}
