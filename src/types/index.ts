export type userType = "Publisher" | "Brand" | "Agency";

export interface agenciesBrand {
  brand_name: string;
  campaign_name: string;
  tag_keylink: string;
  country: string;
  category: string;
  store: string;
  status: string;
  growth: string;
  commission_offer: string;
  conversion_rate: string;
  total_product: string;
  permissions: string;
  checked: boolean;
  id: number;
}

export interface AgenciesPublishers {
  publisher_name: string;
  product_name: string;
  brands_name: string;
  commission: number;
  starting_date: string;
  status: string;
  products: string;
  growth_percentage: number;
  clicks: number;
  orders: number;
  revenue: number;
  sales: number;
  paid_amount: number;
  permission: string;
  checked: boolean;
  created_at: string;
  updated_at: string;
}

export interface AgenciesPublishersRequests {
  publisher_name: string;
  date_sent: string;
  country: string;
  platform: string;
}
