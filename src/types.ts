export interface PRDSection {
  id: string;
  title: string;
  emoji: string;
  placeholder: string;
  content: string;
}

export interface AISuggestion {
  id: string;
  title: string;
  description: string;
  actionText: string;
  replacementText: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  icon: string;
}
