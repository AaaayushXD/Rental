export interface PricingCardProps {
  cardDetail: PricingCardDetail;
}
export interface PricingCardDetail {
  title: string;
  price: number;
  subTitle: string;
  features: Features;
}

export interface Features {
  title: string;
  points: FeaturesDetail[];
}

export interface FeaturesDetail {
  title: string;
  icon: React.ReactNode;
}
