// /src/app/api/signup/route.js

import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://dbUser:dbUserPass@cluster0.vdxzfys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri);

export async function POST(req) {
  // Destructure data from the request body
  const { firstName, lastName, email, interests } = await req.json(); // Use req.json() for parsing the request body in Next.js 13

  // Validate that required fields are provided
  if (!firstName || !lastName || !email) {
    return new Response(
      JSON.stringify({ message: 'Please fill in all required fields.' }),
      { status: 400 }
    );
  }

  try {
    // Connect to the MongoDB client
    await client.connect();

    // Get the "decibl" database
    const database = client.db('decibl');  // Your database name
    const usersCollection = database.collection('users');  // Your collection name

    // Insert the new user into the collection
    await usersCollection.insertOne({
      firstName,
      lastName,
      email,
      interests,
    });

    // Send success response
    return new Response(
      JSON.stringify({ message: 'User signed up successfully.' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving user data:', error);
    return new Response(
      JSON.stringify({ message: 'Failed to save user data.' }),
      { status: 500 }
    );
  } finally {
    // Close the MongoDB client connection
    await client.close();
  }
}
