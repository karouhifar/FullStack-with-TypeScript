import React, { useEffect, useState } from 'react';
import './App.css';
import NewReminder from './components/NewReminder';
import ReminderList from './components/ReminderList';
import { Reminder } from './models';
import ReminderService from './services/reminder';
function App() {
    const [reminder, setReminder] = useState<Reminder[]>([]);

    useEffect(() => {
        loadReminders();
    }, []);

    const loadReminders = async () => {
        const data = (await ReminderService.getReminders()) as Reminder[];
        setReminder(data);
    };

    const removeReminder = (id: number) => {
        setReminder(reminder.filter((reminder) => reminder.id !== id));
    };

    const addReminder = async (title: string) => {
        setReminder([
            (await ReminderService.addReminder(title)) as Reminder,
            ...reminder
        ]);
    };

    return (
        <div className="App">
            <NewReminder onAddReminder={addReminder} />
            <ReminderList
                listReminder={reminder}
                onRemoveReminder={removeReminder}
            />
        </div>
    );
}

export default App;
