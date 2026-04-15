import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

/** Public JPEG URL for Simula `/minigames/init` (`char_image`) — their servers must fetch this over HTTPS. */
export async function GET() {
  const filePath = path.join(process.cwd(), "public", "superman.jpeg");
  const buf = await readFile(filePath);
  return new NextResponse(buf, {
    status: 200,
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
