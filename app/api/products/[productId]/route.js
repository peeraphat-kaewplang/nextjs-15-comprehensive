// app/api/products/[productId]/route.js
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { productId } = params;
  // Fetch product from DB or service based on productId
  const product = { id: productId, name: `Product ${productId}`, price: Math.random() * 100 };

  if (!product.name) { // Basic check
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
  return NextResponse.json(product);
}