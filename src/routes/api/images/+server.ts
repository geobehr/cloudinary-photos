import { json } from '@sveltejs/kit';
import cloudinary from 'cloudinary';

export async function GET({ url }) {
  const next = url.searchParams.get('next');
  const { resources, next_cursor } = await cloudinary.v2.api.resources({
    max_results: 12,
    next_cursor: next,
  });

  return json({data: resources, next_cursor});

  return json({
    data: resources.map(({ asset_id }: any) => {
      return { asset_id };
    }),
    next_cursor,
  });
}
