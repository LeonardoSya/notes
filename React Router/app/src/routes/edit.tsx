import { Form, useLoaderData } from 'react-router-dom';

export default function EditContact() {
    const { contact } = useLoaderData();

    return (
        <Form method='post' id='contact-form'>
            <p>
                <span>Name</span>
                <input
                    placeholder='First'
                    aria-label='First name'  // 用于无障碍
                    type='text'
                    name='first'
                    defaultValue={contact.first}  // defaultValue用于设置初始值而不需要使用状态管理
                />
                <input
                    placeholder='Last'
                    aria-label='Last name'
                    type='text'
                    name='last'
                    defaultValue={contact.last}
                />
            </p>
            <label>
                <span>Twitter</span>
                <input
                    type="text"
                    name="twitter"
                    placeholder="@jack"
                    defaultValue={contact.twitter}
                />
            </label>
            <label>
                <span>Avatar URL</span>
                <input
                    placeholder='https://example.com/avatar.jpg'
                    aria-label="Avatar URL"
                    type="text"
                    name="avatar"
                    defaultValue={contact.avatar}
                />
            </label>
            <label>
                <span>Notes</span>
                <textarea
                    name="notes"
                    defaultValue={contact.notes}
                    rows={6}
                />
            </label>
            <p>
                <button type='submit'>Save</button>
                <button type='button'>Cancel</button>
            </p>
        </Form>
    );
}