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

export interface Offers {
  id: number;
  user_id: number;
  image: string;
  promotion: string;
  offer_name: string;
  agency: string;
  prices: string;
  status: string;
  commission_offer: string;
  tag_link: string;
  publishers: string;
  asin_id: string;
  offer_status: string;
  date: string;
  created_at: string;
  updated_at: string;
}

export interface AgenciesReportingProducts {
  id: number;
  user_id: number;
  product_id: number;
  product_name: string;
  brands: string;
  publisher: string;
  last_recorded: string;
  price: number;
  impressions: number;
  profits: number;
  clicks: number;
  uni_clicks: number;
  invalid_click: number;
  conversion_percentage: number;
  orders: number;
  total_cvr: number;
  date: string;
  created_at: string;
  updated_at: string;
}

export interface AgenciesReportingSummaries {
  id: number;
  user_id: number;
  report_type: string;
  date_from: string;
  date_to: string;
  impressions: number;
  clicks: number;
  rda: number;
  gross_clicks: number;
  revenue: number;
  paycut: number;
  total_cv: number;
  profit: number;
  vtcv: number;
  margin: number;
  ctr: number;
  average_sale_value: number;
  gross_sales: number;
  cvr: number;
  cpc: number;
  cpm: number;
  created_at: string;
  updated_at: string;
}

export interface AgenciesReportingPublishers {
  id: number;
  user_id: number;
  product_name: string;
  publishers: string;
  starting_date: string;
  last_active: string;
  status: string;
  conversions: number;
  commission: number;
  total_orders: number;
  total_paid: number;
  quantity: number;
  prefer_url: string;
  created_at: string;
  updated_at: string;
  checked: boolean;
}

export interface AgenciesReportingPayments {
  "id": number,
"user_id": number,
"product_id": number,
"agency_id": number,
"product_name": string,
"brands": string,
"campaign_name": string,
"starting_date": string,
"ending_date": string,
"tags": string,
"due": number,
"commision_type": string,
"total_sales": number,
"total_clicks": number,
"status": string,
"created_at": string,
"updated_at": string
}
