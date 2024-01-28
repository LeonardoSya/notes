//* root router  -- since the rest of routes will render inside of it
import {
	Outlet,
	Link,
	useLoaderData,
	Form,
} from 'react-router-dom';
import { getContacts, createContact } from '../contacts';

export async function loader() {
	const contacts = await getContacts();
	return { contacts };
}

export async function action() {
	const contact = await createContact();
	return { contact };
}

export default function Root() {
	const { contacts } = useLoaderData();
	return (
		<>
			<div id="sidebar">
				<h1>React Router Contacts</h1>
				<div>
					<form id="search-form" role="search">
						<input
							id="q"
							aria-label="Search contacts"
							placeholder="Search"
							type="search"
							name="q"
						/>
						<div
							id="search-spinner"
							aria-hidden
							hidden={true}
						/>
						<div
							className="sr-only"
							aria-live="polite"
						></div>
					</form>
					{/* <Form> prevents the browser from sending the request to the server but send it to your route 'action'. */}
					<Form method="post">
						<button type="submit">New</button>
					</Form>
				</div>

				{/* nav部分根据contacts数组的内容渲染一个列表，每个联系人都被渲染为一个列表项 li */}
				<nav>
					{contacts.length ? (
						<ul>
							{contacts.map((contact) => (
								<li key={contact.id}>
									<Link to={`contact/${contact.id}`}>
										{contact.first || contact.last ? (
											<>
												{/* 显示联系人的名字 */}
												{contact.first} {contact.last}
											</>
										) : (
											<i>No Name</i>
										)}{" "}
										{/* 如果联系人被标记为 "收藏"(favorite) 就加一个星号 */}
										{contact.favorite && (
											<span aria-label="Favorite">
												♥
											</span>
										)}
									</Link>
								</li>
							))}
						</ul>
					) : (
						<p>
							<i>No contacts</i>
						</p>
					)}
					<ul>
						<li>
							{/* use <Link> to update the URL without requesting another document from the server. Instead, the app can immediately render new UI. */}
							<Link to={`/contacts/1`}>Your Name</Link>
						</li>
						<li>
							<Link to={`/contacts/2`}>Your Friend</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div id="detail">
				{/*  充当占位符，表示子路由组件应该在父路由组件的哪个位置被渲染 */}
				<Outlet />
			</div>
		</>
	);
}