import ClientPage from "./client-page";

export default function Page() {
    return (
        <div className="w-full flex flex-col items-center">
            <ClientPage />
        </div>
    )
}

export function generateStaticParams() {
    return [
        { locale: 'en' },
        { locale: 'nl' },
    ];
}