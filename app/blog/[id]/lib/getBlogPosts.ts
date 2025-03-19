// lib/getBlogPosts.ts
import { MongoClient } from 'mongodb';

// Define the type for a blog post
interface BlogPost {
  id: string;
  title: string;
  content: string;
  lastModified: string;
}

// Function to fetch blog posts from the database
export async function getBlogPosts(): Promise<BlogPost[]> {
  const uri = process.env.MONGODB_URI; // MongoDB connection string
  if (!uri) {
    throw new Error('MONGODB_URI environment variable is not defined');
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('mygreed'); // Replace with your database name
    const collection = database.collection('blogPosts'); // Replace with your collection name

    // Fetch blog posts from the collection
    const posts = await collection
      .find({})
      .sort({ lastModified: -1 }) // Sort by lastModified in descending order
      .toArray();

    // Map the data to the BlogPost type
    return posts.map((post) => ({
      id: post._id.toString(), // Convert ObjectId to string
      title: post.title,
      content: post.content,
      lastModified: post.lastModified,
    }));
  } finally {
    await client.close();
  }
}