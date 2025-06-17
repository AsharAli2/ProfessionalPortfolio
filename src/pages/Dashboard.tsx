import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut, Plus } from "lucide-react";
import { toast } from "sonner";
import AddProjectForm from "@/components/AddProjectForm";
import AddBlogForm from "@/components/AddBlogForm";
import ProjectsList from "@/components/ProjectsList";
import BlogsList from "@/components/BlogsList";
import ShowMessages from "@/components/Showmessages";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Error logging out");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold gold-text-gradient">Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-gold-400">Welcome, {user?.email}</span>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-gold-500 text-gold-500"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="bg-black/50 border border-gold-500/30">
            <TabsTrigger value="overview" className="text-gold-400">
              Overview
            </TabsTrigger>
            <TabsTrigger value="projects" className="text-gold-400">
              Projects
            </TabsTrigger>
            <TabsTrigger value="blogs" className="text-gold-400">
              Blogs
            </TabsTrigger>
            <TabsTrigger value="add-project" className="text-gold-400">
              Add Project
            </TabsTrigger>
            <TabsTrigger value="add-blog" className="text-gold-400">
              Add Blog
            </TabsTrigger>
            <TabsTrigger value="messages" className="text-gold-400">
              Messages
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="gold-card">
                <CardHeader>
                  <CardTitle className="text-gold-400">
                    Total Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-white">0</p>
                </CardContent>
              </Card>
              <Card className="gold-card">
                <CardHeader>
                  <CardTitle className="text-gold-400">Total Blogs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-white">0</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="projects">
            <ProjectsList />
          </TabsContent>

          <TabsContent value="blogs">
            <BlogsList />
          </TabsContent>

          <TabsContent value="add-project">
            <AddProjectForm />
          </TabsContent>

          <TabsContent value="add-blog">
            <AddBlogForm />
          </TabsContent>
          <TabsContent value="messages">
            <ShowMessages />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
