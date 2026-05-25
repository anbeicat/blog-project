import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div className="mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-6 py-12 text-center">
            <p className="mb-3 text-sm font-medium text-blue-600">404 Error</p>

            <h1 className="mb-4 text-4xl font-bold text-gray-900">
                페이지를 찾을 수 없습니다.
            </h1>

            <p className="mb-8 max-w-xl leading-8 text-gray-600">
                요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
                아래 버튼을 통해 홈으로 돌아갈 수 있습니다.
            </p>

            <Link
                href="/"
                className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-700"
            >
                홈으로 돌아가기
            </Link>
        </div>
    );
}