import axios from 'axios';
import { Reminder } from '../models';
class ReminderService {
    private http = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
        timeout: 2000,
    });

    async getReminders() {
        try {
            const res = await this.http.get<Reminder[]>('/todos');

            if (res.status === (400 || 500))
                throw new Error('Http Error : ' + res.statusText);

            return res.data;
        } catch (err) {
            return err;
        }
    }
    async addReminder(title: string) {
        try {
            const res = await this.http.post<Reminder>('/todos', { title });
            if (res.status === (400 || 500))
                throw new Error('Http Error : ' + res.statusText);
            return res.data;
        } catch (err) {
            return err;
        }
    }
    async removeReminder(id: number) {
        const res = await this.http.delete<Reminder>('/todos/' + id);
        return res.data;
    }
}

export default new ReminderService();
