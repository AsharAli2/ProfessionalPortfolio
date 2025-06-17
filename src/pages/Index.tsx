import React, { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import Skills from "@/components/Skills";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const Index = () => {
  const [Blogstatus, setBlogstatus] = useState<string>("");
  const fetchBlog = async () => {
    try {
      const docRef = doc(db, "blog", "status");
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        console.error("No such document!");
        return;
      }
      const res = docSnap.data()?.value;
      setBlogstatus(res);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };
  useEffect(() => {
    fetchBlog();
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation Blogstatus={Blogstatus} />
      <Hero />
      <ProjectsSection limit={3} />
      {Blogstatus && <BlogSection limit={3} />}
      <Skills />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
