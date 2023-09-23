import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { address } = await request.json();

  const BASE_URL = "https://api.1inch.dev/nft/v1/byaddress";

  return NextResponse.json(
    {
      nfts: [{
        imageUrl: 'https://i.seadn.io/gae/WUk8oxK66zz9byLJhzWutxXGQbDeEXwsung8AbnmM9wbBD94AdJAiTvkwYht-QYc6Q19axztu2ufHOxuqftq65FO83wNufpsOjHQIg?auto=format&dpr=1&w=1000'
      }]
    },
    {
      status: 200,
    },
  );
}
