import { PropsWithChildren } from "react";
import ThemeToggle from "./ThemeToggle";
import ChatBox from "../ChatBox";

function Layout({ children }: PropsWithChildren): JSX.Element {
  return (
    <div className="relative min-h-screen w-full bg-black text-gray-100">
      {/* 右上：主題切換 */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* 右下：AI Chat（全站可見） */}
      <div className="fixed right-4 bottom-4 z-50">
        <ChatBox />
      </div>

      {/* 主內容 */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default Layout;