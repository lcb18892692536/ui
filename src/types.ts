export interface CallInsight {
  id: string;
  sender: 'Elena Vance' | 'Agent Alpha';
  initials: string;
  text: string;
  timestamp: string;
  isAI?: boolean;
}

export interface Interaction {
  id: string;
  type: 'Missed Call' | 'Case Resolved' | 'Email Inquiry';
  time: string;
  status: 'error' | 'success' | 'neutral';
}

export interface QueueData {
  time: string;
  load: number;
  waitTime: number;
}
