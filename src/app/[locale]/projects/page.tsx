import ClientPage from "./client-page";

export default function Page() {


    return (
        <div>
           <ClientPage/>
        </div>
    )
}

export function generateStaticParams() {
    return [
      { locale: 'en' },
      { locale: 'nl' },
    ];
  }