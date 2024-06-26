import { useState, useEffect } from "react";
import img from "./assets/HMwink壁纸.png";

export default function App() {
  // 断点前缀
  // sm: 最小宽度640px
  // md: 最小宽度768px
  // lg: 最小宽度1024px
  // xl: 最小宽度1280px
  // 2xl: 最小宽度1536px
  // 要从小往大设置前缀，较小的不设置

  // 一级布局容器 md:flex(实现窄屏col宽屏row) md:space-x-

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <div className="p-8 dark:bg-slate-950">
      <div className="flex justify-center">
        <div className="space-y-8 md:flex md:space-x-8 md:space-y-0">
          {/* Card with image */}
          <div className="max-w-md overflow-hidden rounded-lg bg-slate-50 shadow-lg shadow-gray-300 ring-1 ring-gray-100 md:max-w-2xl dark:bg-slate-950">
            <div className="md:flex">
              {/* shrink-0 确保图像不会缩小，对于md:来说非常重要 */}
              <div className="shrink-0">
                {/* object-cover 覆盖填充 */}
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src={img}
                  alt="img"
                />
              </div>
              <div className="p-8">
                {/* tracking-  字间距 */}
                <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
                  Company retreats
                </div>
                {/* leading-  行高 */}
                <a
                  href="#"
                  className="mt-1 block text-lg font-medium leading-tight text-black hover:translate-x-0.5 hover:text-black hover:shadow-md dark:text-slate-200"
                >
                  Incredible accommodation for your team
                </a>
                <p className="mt-2 text-slate-500">
                  Looking to take your team away on a retreat to enjoy awesome
                  food and take in some sunshine? We have a list of places to do
                  just that.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-md overflow-hidden rounded-lg bg-slate-50 shadow-lg shadow-gray-300 ring-1 ring-gray-100 md:max-w-2xl dark:bg-slate-950">
            <div className="md:flex">
              {/* shrink-0 确保图像不会缩小，对于md:来说非常重要 */}
              <div className="shrink-0">
                {/* object-cover 覆盖填充 */}
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src={img}
                  alt="img"
                />
              </div>
              <div className="p-8">
                {/* tracking-  字间距 */}
                <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
                  Company retreats
                </div>
                {/* leading-  行高 */}
                <a
                  href="#"
                  className="mt-1 block text-lg font-medium leading-tight text-black hover:translate-x-0.5 hover:text-black hover:shadow-md dark:text-slate-200"
                >
                  Incredible accommodation for your team
                </a>
                <p className="mt-2 text-slate-500">
                  Looking to take your team away on a retreat to enjoy awesome
                  food and take in some sunshine? We have a list of places to do
                  just that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={toggleTheme}
          className="mt-4 rounded-lg bg-black p-3 text-slate-200 dark:bg-white dark:text-slate-950"
        >
          Toggle {theme === "dark" ? "light" : "dark"} Mode
        </button>
      </div>
    </div>
  );
}
