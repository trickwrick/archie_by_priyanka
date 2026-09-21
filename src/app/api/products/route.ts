import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

const DB_NAME = 'archie_by_priyanka';
const COLLECTION_NAME = 'products';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    
    // Fetch all products, sorted by newest first (assuming _id is ObjectId)
    const products = await db
      .collection(COLLECTION_NAME)
      .find({})
      .sort({ _id: -1 })
      .toArray();

    // Map _id to id for frontend compatibility and filter out custom fit
    const formattedProducts = products.map((product) => ({
      ...product,
      id: product._id.toString(),
      sizes: (Array.isArray(product.sizes) ? product.sizes : ['XS', 'S', 'M', 'L'])
        .filter((s: string) => !s.toLowerCase().includes('custom')),
      _id: undefined, // Remove the raw MongoDB _id
    }));

    return NextResponse.json(formattedProducts);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.price || !body.category) {
      return NextResponse.json(
        { error: 'Name, price, and category are required fields' }, 
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(DB_NAME);

    // Provide default arrays for colors and sizes if not provided
    const newProduct = {
      name: body.name,
      category: body.category,
      price: Number(body.price),
      originalPrice: body.originalPrice ? Number(body.originalPrice) : undefined,
      description: body.description || '',
      image: body.image || '/images/hero_beach_luxury.jpg', // Placeholder default
      images: body.images || [],
      colors: body.colors || [{ name: 'Black', hex: '#000000' }],
      sizes: (Array.isArray(body.sizes) ? body.sizes : ['XS', 'S', 'M', 'L']).filter((s: string) => !s.toLowerCase().includes('custom')),
      badge: body.badge || undefined,
      createdAt: new Date(),
    };

    const result = await db.collection(COLLECTION_NAME).insertOne(newProduct);

    return NextResponse.json(
      { 
        message: 'Product created successfully', 
        product: { ...newProduct, id: result.insertedId.toString() } 
      }, 
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to create product:", error);
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
