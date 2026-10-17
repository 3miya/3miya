export type TreatmentCategory = 'skincare' | 'waxing' | 'massage';

export type TreatmentTag = '深層調理' | '水光保濕' | '舒緩抗敏' | '緊緻拉提';

export interface Treatment {
  id: string;
  category: TreatmentCategory; // 'skincare' (皮膚管理) | 'waxing' (乾淨除毛) | 'massage' (舒壓按摩)
  subCategory: string; // '深層調理' | '水光保濕' | '舒緩抗敏' | '緊緻拉提'
  title: string;
  tagline: string;
  features: string[];
  durationMinutes: number;
  price: number;
  originalPrice: number;
  badge?: string;
  tagColor: string; // Tailwind color token
  description: string;
  steps: string[];
  suitableFor: string[];
  homecareTips: string[];
  image?: string;
}

export interface AddonItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  durationMinutes: number;
  price: number;
}

export interface StudioBranch {
  id: string;
  name: string;
  badge: string;
  address: string;
  metro: string;
  phone: string;
  hours: string;
  googleMapUrl: string;
  instagramUrl: string;
}

export interface HomecareProduct {
  id: string;
  name: string;
  capacity: string;
  originalPrice: number;
  price: number;
  description: string;
}

export interface BookingForm {
  date: string;
  timeSlot: string;
  customerName: string;
  phone: string;
  lineId?: string;
  skinConcerns?: string;
}

export interface BookingConfirmation extends BookingForm {
  bookingId: string;
  branchName: string;
  branchAddress: string;
  branchPhone: string;
  createdAt: string;
}

