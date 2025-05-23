import { Types } from "mongoose";

export interface ICustomer {
  _id?: Types.ObjectId;
  userId: Types.ObjectId;

  name: string;
  email?: string;
  contactNo?: string;
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;

  profileImage?: string;

  // Book shop
  purchasedBooks?: Types.ObjectId[];
  totalSpent?: number;
  loyaltyPoints?: number;

  // POS system
  paymentMethods?: string[];
  lastPurchaseAt?: Date;

  // Library system
  borrowedBooks?: Types.ObjectId[];
  borrowLimit?: number;
  overdueFine?: number;

  isActive?: boolean;
  joinedAt?: Date;

  createdAt?: Date;
  updatedAt?: Date;
}
