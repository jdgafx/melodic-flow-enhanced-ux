import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const secret = req.nextUrl.searchParams.get('secret')
    
    if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
      return new NextResponse('Invalid secret', { status: 401 })
    }

    // Revalidate all pages
    revalidatePath('/', 'layout')

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
    })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error(err)
    return new NextResponse(message, { status: 500 })
  }
}
