import React from 'react';
import { Reminder } from '../models';

interface ReminderListProps {
    listReminder: Array<Reminder>;
    // eslint-disable-next-line no-unused-vars
    onRemoveReminder: (id: number) => void;
}

export default function ReminderList({
    listReminder,
    onRemoveReminder,
}: ReminderListProps) {
    return (
        <ul>
            {listReminder?.map((item) => (
                <div key={item.id} className="w-100">
                    <li className="list-group-item  d-flex justify-content-between">
                        <span>{item.title}</span>
                        <button
                            onClick={() => onRemoveReminder(item.id)}
                            className="btn btn-danger rounded-pill"
                        >
                            Delete
                        </button>
                    </li>
                    <br />
                </div>
            ))}
        </ul>
    );
}
