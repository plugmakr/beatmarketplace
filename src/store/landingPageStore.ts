import { create } from 'zustand';

interface LandingPageContent {
  hero: {
    title: string;
    description: string;
  };
  features: {
    title: string;
    items: string[];
  };
  beats: {
    title: string;
    items: Array<{
      id: number;
      title: string;
      producer: string;
      price: number;
    }>;
  };
  kits: {
    title: string;
    items: Array<{
      id: number;
      title: string;
      producer: string;
      price: number;
    }>;
  };
  artists: {
    title: string;
    items: Array<{
      id: number;
      name: string;
      genre: string;
      sales: string;
    }>;
  };
  pricing: {
    title: string;
  };
  cta: {
    title: string;
    description: string;
  };
  sectionsOrder: string[];
}

interface LandingPageStore {
  content: LandingPageContent;
  updateContent: (section: keyof LandingPageContent, data: any) => void;
  updateSectionOrder: (newOrder: string[]) => void;
}

export const useLandingPageStore = create<LandingPageStore>((set) => ({
  content: {
    hero: {
      title: "Turn Your Beats Into Success",
      description: "Join thousands of producers selling their beats to artists worldwide. Start your journey today.",
    },
    features: {
      title: "Everything You Need to Succeed",
      items: ['Sell Your Beats', 'License Your Music', 'Easy Upload', 'Secure Payments'],
    },
    beats: {
      title: "Featured Beats",
      items: [],
    },
    kits: {
      title: "Featured Kits",
      items: [],
    },
    artists: {
      title: "Featured Artists",
      items: [],
    },
    pricing: {
      title: "Simple Pricing",
    },
    cta: {
      title: "Ready to Start Selling?",
      description: "Join our community of producers and start selling your beats today. No hidden fees, just pure music business.",
    },
    sectionsOrder: ['hero', 'features', 'beats', 'kits', 'artists', 'pricing', 'cta'],
  },
  updateContent: (section, data) =>
    set((state) => ({
      content: {
        ...state.content,
        [section]: data,
      },
    })),
  updateSectionOrder: (newOrder) =>
    set((state) => ({
      content: {
        ...state.content,
        sectionsOrder: newOrder,
      },
    })),
}));