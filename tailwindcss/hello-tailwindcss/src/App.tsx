
export default function App() {
  return (
    <>
      {/* Card */}
      <div className="mx-auto flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-lg hover:bg-sky-400">
        {/* shrink-0: 该项目不会在flex容器中收缩 */}
        <div className="shrink-0">
          <img
            className="h-12 w-12"
            src="https://i.pravatar.cc/150?img=1"
            alt="Logo"
          />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>

      {/* list */}
      <ul role="list" className="divide-y divide-slate-100 p-6">
        {person.map((person, i) => (
          <li className="flex py-4 first:pt-0 last:pb-0" key={i}>
            <img className="round h-10 w-10" src={person.imageUrl} alt="" />
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-slate-50">{person.name}</p>
              <p className="truncate text-sm text-slate-300">{person.email}</p>
              {/* truncate 截断文本溢出，在末尾添加省略号 */}
            </div>
          </li>
        ))}
      </ul>

      {/* form */}
      <form>
        {/* display:block 将元素作为块级元素显示 占据父容器整行 */}
        <label className="m-6 block bg-slate-400 p-4">
          <span className="block text-sm font-medium text-slate-100">
            Username
          </span>
          {/* w-full 响应式设计 图像视频 导航菜单 表单元素(输入框、按钮)在布局中占用全部宽度 */}
          <input type="text" value="zyy" disabled className={formInputStyle} />
          <span className="block pt-3 text-sm font-medium text-slate-100">
            Email
          </span>
          <input type="email" placeholder="email" className={formInputStyle} />
          <span className="block pt-3 text-sm font-medium text-slate-100">
            Password
          </span>
          <input
            type="password"
            placeholder="password"
            className={formInputStyle}
          />
        </label>
      </form>

      {/* group */}
      {/* mx-auto水平居中对齐 */}
      {/* ring-2 环绕阴影宽度为2px */}
      <a
        href="#"
        className="translation duration-100 group mx-auto block max-w-xs rounded-lg bg-white p-6 ring-1 hover:bg-sky-500"
      >
        <div className="flex items-center space-x-4">
          <h2 className="text-sm font-semibold text-sky-500 group-hover:text-white">
            &gt;
          </h2>
          <h3 className="text-sm font-semibold text-slate-900 group-hover:text-white">
            New project
          </h3>
        </div>
        <p className="text-sm text-slate-500 group-hover:text-white">
          Create a new project from a variety of starting templates.
        </p>
      </a>

      {/* list a  group-hover/name: */}
      <ul role="list" className="my-4">
        {person.map((person, i) => (
          <li key={i} className="group/item bg-white px-2 first:pt-2 last:pb-2">
            <div className="flex space-x-4 rounded-2xl p-4 group-hover/item:bg-slate-100">
              <img className="h-10 w-10 rounded-full" src={person.imageUrl} />
              <div>
                <a
                  href="#"
                  className="text-sm text-slate-900 hover:text-slate-900"
                >
                  {person.name}
                </a>
                <p className="max-w-28 truncate text-xs text-slate-400">
                  {person.email}
                </p>
              </div>
              <a
                href="#"
                className="group/call invisible flex items-center whitespace-nowrap rounded-full px-4 text-sm text-slate-400 hover:bg-slate-200 hover:text-slate-600 group-hover/item:visible"
              >
                <span className="translation duration-100 group-hover/call:font-semibold group-hover/call:text-slate-500">
                  call
                </span>
                <span className="translation duration-100 group-hover/call:translate-x-1 group-hover/call:text-slate-500">
                  &gt;
                </span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

const formInputStyle =
  "mt-1 block w-full rounded-md border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm invalid:border-pink-600 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-500 disabled:shadow-none";

const person = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Bob Brown",
    email: "bob.brown@example.com",
    imageUrl: "https://via.placeholder.com/150",
  },
];
