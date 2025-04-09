import { createObjectCsvWriter } from 'csv-writer';
import path from 'path';

export async function POST(req) {
  const { firstName, lastName, email, interests } = await req.json();

  // Check for missing required fields
  if (!firstName || !lastName || !email) {
    return new Response(
      JSON.stringify({ message: 'Please fill in all required fields.' }),
      { status: 400 }
    );
  }

  // Define the path for the CSV file
  const csvFilePath = path.join(process.cwd(), 'users.csv');

  // Set up the CSV writer
  const csvWriter = createObjectCsvWriter({
    path: csvFilePath,
    header: [
      { id: 'firstName', title: 'First Name' },
      { id: 'lastName', title: 'Last Name' },
      { id: 'email', title: 'Email' },
      { id: 'interests', title: 'Interests' },
    ],
    append: true, // Append data to the CSV file
  });

  // Prepare the data to be written
  const user = { firstName, lastName, email, interests };

  try {
    // Write the user data to the CSV
    await csvWriter.writeRecords([user]);
    return new Response(
      JSON.stringify({ message: 'User signed up successfully.' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error writing to CSV:', error);
    return new Response(
      JSON.stringify({ message: 'Failed to save user data.' }),
      { status: 500 }
    );
  }
}
