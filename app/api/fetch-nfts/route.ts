import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function GET(request: NextRequest) {
  return NextResponse.json(
    {
      imageUrl: 'https://i.seadn.io/gae/WUk8oxK66zz9byLJhzWutxXGQbDeEXwsung8AbnmM9wbBD94AdJAiTvkwYht-QYc6Q19axztu2ufHOxuqftq65FO83wNufpsOjHQIg?auto=format&dpr=1&w=1000'
    },
    {
      status: 200,
    },
  );
}

