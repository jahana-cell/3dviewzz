import Image from 'next/image';

export default function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/studio-7588806271-6db5e.firebasestorage.app/o/Logo%2F3DViewzz%20%20Logo%20with%20Slogan.png?alt=media&token=f42678b5-60cd-4590-bd13-0cea0dd3fd91"
        alt="3Dviewzz Logo"
        width={150}
        height={40}
        priority
      />
    </a>
  );
}
