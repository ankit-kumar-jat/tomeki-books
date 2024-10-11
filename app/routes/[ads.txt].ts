export async function loader() {
  const adsText = `
    google.com, pub-****, DIRECT, ****
    `
  return new Response(adsText, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': `public, max-age=30`,
    },
  })
}
