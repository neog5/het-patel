import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Font data - read from filesystem (server-side)
const fontPath = path.join(process.cwd(), "app", "fonts", "holland.ttf");
let fontData: ArrayBuffer | Buffer;
try {
  fontData = fs.readFileSync(fontPath);
} catch (err) {
  throw new Error(
    `Font not found at ${fontPath}. Place holland.ttf in the project's fonts/ folder.`
  );
}

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: "transparent",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          //   backgroundColour: "#00a6f4",
          fontFamily: "holland, sans-serif",
          fontWeight: "700",
          color: "white",
          borderRadius: "8px",
        }}
      >
        H
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "holland",
          data: fontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
