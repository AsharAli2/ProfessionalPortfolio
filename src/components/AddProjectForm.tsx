
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { toast } from 'sonner';

const AddProjectForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    liveUrl: '',
    githubUrl: '',
    imageUrl: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await addDoc(collection(db, 'projects'), {
        ...formData,
        technologies: formData.technologies.split(',').map(tech => tech.trim()),
        createdAt: new Date(),
        updatedAt: new Date()
      });

      toast.success('Project added successfully!');
      setFormData({
        title: '',
        description: '',
        technologies: '',
        liveUrl: '',
        githubUrl: '',
        imageUrl: ''
      });
    } catch (error) {
      toast.error('Error adding project');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Card className="gold-card">
      <CardHeader>
        <CardTitle className="gold-text-gradient">Add New Project</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title" className="text-gold-400">Project Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="bg-black/50 border-gold-500/30 text-white"
            />
          </div>

          <div>
            <Label htmlFor="description" className="text-gold-400">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="bg-black/50 border-gold-500/30 text-white"
              rows={4}
            />
          </div>

          <div>
            <Label htmlFor="technologies" className="text-gold-400">Technologies (comma separated)</Label>
            <Input
              id="technologies"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              placeholder="React, Node.js, MongoDB"
              required
              className="bg-black/50 border-gold-500/30 text-white"
            />
          </div>

          <div>
            <Label htmlFor="imageUrl" className="text-gold-400">Image URL (Cloudinary path)</Label>
            <Input
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="sample-image-path"
              className="bg-black/50 border-gold-500/30 text-white"
            />
          </div>

          <div>
            <Label htmlFor="liveUrl" className="text-gold-400">Live URL</Label>
            <Input
              id="liveUrl"
              name="liveUrl"
              type="url"
              value={formData.liveUrl}
              onChange={handleChange}
              className="bg-black/50 border-gold-500/30 text-white"
            />
          </div>

          <div>
            <Label htmlFor="githubUrl" className="text-gold-400">GitHub URL</Label>
            <Input
              id="githubUrl"
              name="githubUrl"
              type="url"
              value={formData.githubUrl}
              onChange={handleChange}
              className="bg-black/50 border-gold-500/30 text-white"
            />
          </div>

          <Button type="submit" disabled={isLoading} className="gold-button w-full">
            {isLoading ? 'Adding Project...' : 'Add Project'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddProjectForm;
