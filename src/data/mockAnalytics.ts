export interface AnalyticsData {
  revenue: {
    daily: number[];
    weekly: number[];
    monthly: number[];
    total: number;
  };
  sales: {
    daily: number[];
    weekly: number[];
    monthly: number[];
    total: number;
  };
  views: {
    daily: number[];
    weekly: number[];
    monthly: number[];
    total: number;
  };
  topPerformers: {
    id: string;
    name: string;
    sales: number;
    revenue: number;
  }[];
}

export const mockAnalytics: AnalyticsData = {
  revenue: {
    daily: [120, 145, 160, 180, 210, 190, 200],
    weekly: [850, 920, 880, 990],
    monthly: [3500, 4200, 3800, 4500, 4800, 5200],
    total: 26000
  },
  sales: {
    daily: [5, 7, 6, 8, 10, 9, 8],
    weekly: [42, 45, 40, 48],
    monthly: [180, 210, 190, 220, 240, 260],
    total: 1300
  },
  views: {
    daily: [50, 65, 55, 70, 80, 75, 72],
    weekly: [420, 450, 400, 480],
    monthly: [1800, 2100, 1900, 2200, 2400, 2600],
    total: 13000
  },
  topPerformers: [
    {
      id: "1",
      name: "Summer Vibes Beat",
      sales: 150,
      revenue: 4500
    },
    {
      id: "2",
      name: "Urban Flow Kit",
      sales: 120,
      revenue: 3600
    },
    {
      id: "3",
      name: "Trap Essentials",
      sales: 100,
      revenue: 3000
    }
  ]
};