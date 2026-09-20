import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

const DB_NAME = 'archie_by_priyanka';
const COLLECTION_NAME = 'categories';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    
    // Fetch all categories
    const categories = await db
      .collection(COLLECTION_NAME)
      .find({})
      .sort({ _id: -1 })
      .toArray();

    const formattedCategories = categories.map((cat) => ({
      ...cat,
      id: cat._id.toString(),
      _id: undefined,
    }));

    return NextResponse.json(formattedCategories);
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (!body.name) {
      return NextResponse.json(
        { error: 'Category name is required' }, 
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(DB_NAME);

    const newCategory = {
      name: body.name,
      description: body.description || '',
      count: 0, // Initial count
      createdAt: new Date(),
    };

    const result = await db.collection(COLLECTION_NAME).insertOne(newCategory);

    return NextResponse.json(
      { 
        message: 'Category created successfully', 
        category: { ...newCategory, id: result.insertedId.toString() } 
      }, 
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to create category:", error);
    return NextResponse.json({ error: 'Failed to create category' }, { status: 500 });
  }
}
