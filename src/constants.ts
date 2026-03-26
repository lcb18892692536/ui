import { CallInsight, Interaction, QueueData } from './types';

export const INSIGHTS: CallInsight[] = [
  {
    id: '1',
    sender: 'Elena Vance',
    initials: 'EV',
    text: "We're seeing significant drop-offs during the checkout phase on our new mobile platform. I'm wondering if the API latency we discussed earlier might be the root cause?",
    timestamp: '09:00 UTC',
  },
  {
    id: '2',
    sender: 'Agent Alpha',
    initials: 'AA',
    text: "I see. Let me pull up the latency logs for your instance. It looks like there was a spike around 09:00 UTC.",
    timestamp: '09:01 UTC',
    isAI: true,
  },
];

export const INTERACTIONS: Interaction[] = [
  { id: '1', type: 'Missed Call', time: 'Yesterday • 14:20', status: 'error' },
  { id: '2', type: 'Case Resolved', time: '3 days ago • 09:15', status: 'success' },
  { id: '3', type: 'Email Inquiry', time: 'Last Week • Monday', status: 'neutral' },
];

export const QUEUE_DATA: QueueData[] = [
  { time: '08:00', load: 40, waitTime: 2 },
  { time: '09:00', load: 60, waitTime: 5 },
  { time: '10:00', load: 55, waitTime: 4 },
  { time: '11:00', load: 85, waitTime: 8 },
  { time: '12:00', load: 70, waitTime: 6 },
  { time: '13:00', load: 45, waitTime: 3 },
  { time: '14:00', load: 30, waitTime: 2 },
  { time: '15:00', load: 50, waitTime: 4 },
];

export const IMAGES = {
  agent: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEFfeqh3lbW0sutpiMY9SIUZf7waeKJvMSDBR6pcrfUQW_G1xBiPCEnqIxQVYhafBewVL2UG1LFMw4Dj6zgy7ZzZBIfWnK_Zs24QcVOdB96OuWOFxT1RhawZoDw-FBccZHjQXTer3J_MvC0Td8N2ThD3lzWYruRMiPbyq-ubR4s2vTdojVDEpTYyL5yWNaeT61AmCVCYsrF4nuUzAQB3niI-Yn9pOORrW0rkkObXAg8HwVH3dJKmJU8vv4xAxlptF0iKh8K95DQyo',
  caller: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBY7Zd3ViKJULdPp3nw7llrnN4rEemWFaejQJ1MzXz9mzLkLafH1kuskMNQpbKYqfxfrDxBmZ0lZz0iuTFCXbaQ4l5MQb5XRh-PjDjbBRoySWVq3ZIMjIbF7xi075vu3MByO9d5LeAEY2S5yPjlaJWj6JafzqiCCYSwaKoXdNWt-Ksbgth-T-sHmjwSEor1B92M2CqHoiCHYpm1crt8QHt1eaf5aYfJUEQcR2jIoLlMJjs3JP1XzJ8O0cGhKhxzk4Ol-LoIcoqZFCc',
};
