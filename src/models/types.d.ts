interface BaseAttributes {
  id: string;
  created_at: Date;
  updated_at: Date;
}

interface TravelAttributes {
  id: string;
  name: string;
  description: string;
  slug: string;
  is_public: boolean;
  number_of_days: number;
  created_at: Date;
  updated_at: Date;
}
