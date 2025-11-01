import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://nodecrew.kr';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [], // 접근 금지 주소 : ["/amdin", "/test"]
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`, // 사이트맵 위치
  };
}
