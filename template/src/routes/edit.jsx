import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { updateContact } from "../contacts";

export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);

    await updateContact(params.contactId, updates);

    return redirect(`/contacts/${params.contactId}`);
}

function EditContact() {
    const { contact } = useLoaderData();
    const navigate = useNavigate();

    return (
        <Form method="post" id="contact-form">
            <p>
                <span>Название</span>
                <input
                    placeholder="Название вашего таска"
                    type="text"
                    name="name"
                    defaultValue={contact.first}
                />
            </p>
            <label>
                <span>Описание</span>
                <textarea
                    type="text"
                    name="Opisanie"
                    rows={3}
                    defaultValue={contact.twitter}
                />
            </label>
            <p>
                <button type="submit">Save</button>
                <button
                    type="button"
                    onClick={() => {
                        navigate(-1);
                    }}
                >Cancel</button>
            </p>
        </Form>
    );
}

export default EditContact;