import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const getRandomColor = () => {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const initials = searchParams.get('initials');

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: getRandomColor(),
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {initials}
      </div>
    ),
    {
      width: 128,
      height: 128,
    }
  );
}
