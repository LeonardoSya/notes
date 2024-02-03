import exp from 'constants';
import { Outlet, Link, useLoaderData } from 'react-router-dom';

export function DashboardLayout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/dashboard">Dashboard Home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/message">Messages</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            <Outlet />
        </div>
    );
}

export function DashboardIndex() {
    return (
        <div>
            <h2>Dashboard Index</h2>
        </div>
    );
}

interface MessagesData {
    message: string[];
}

export async function dashboardMessagesLoader() {
    await new Promise((r) => setTimeout(r, 500));
}