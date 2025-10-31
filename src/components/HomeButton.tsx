import { Link } from "react-router-dom";

function HomeButton(): JSX.Element {
  return (
    <Link
      to="/"
      aria-label="返回首頁"
      className="absolute top-4 left-4 z-50 inline-flex items-center gap-2 rounded-2xl border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 hover:shadow transition active:scale-[0.98]"
    >
      ← 返回首頁
    </Link>
  );
}

export default HomeButton;