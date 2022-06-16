import React, { useState } from 'react';

interface OnAddReminderProps {
    // eslint-disable-next-line no-unused-vars
    onAddReminder: (title: string) => void;
}
export default function NewReminder({ onAddReminder }: OnAddReminderProps) {
    const [title, setTitle] = useState('');
    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        if(!title) return;
        onAddReminder(title);
        setTitle('');
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="title"></label>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                type="text"
                className="form-control"
            />
            <button type="submit" className="btn btn-primary my-3">
                Add Reminder
            </button>
        </form>
    );
}
