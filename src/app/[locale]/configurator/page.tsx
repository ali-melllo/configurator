import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./page-client"), { ssr: false });

export default function Page() {
  return <PageClient />;
}

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'nl' },
  ];
}
