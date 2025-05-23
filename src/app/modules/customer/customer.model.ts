import mongoose, { Schema, model } from 'mongoose';
import { ICustomer } from './customer.interface';


const customerSchema = new Schema<ICustomer>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required'],
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Invalid email format'],
    },
    contactNo: {
      type: String,
      minlength: [7, 'Contact number is too short'],
      maxlength: [15, 'Contact number is too long'],
    },
    address: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    state: {
      type: String,
      trim: true,
    },
    postalCode: {
      type: String,
      trim: true,
    },
    country: {
      type: String,
      trim: true,
    },
    profileImage: {
      type: String,
      match: [/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, 'Profile image must be a valid URL'],
    },

    // Book shop
    purchasedBooks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Book',
      },
    ],
    totalSpent: {
      type: Number,
      min: [0, 'Total spent must be zero or positive'],
      default: 0,
    },
    loyaltyPoints: {
      type: Number,
      min: [0, 'Loyalty points must be zero or positive'],
      default: 0,
    },

    // POS
    paymentMethods: [
      {
        type: String,
        trim: true,
      },
    ],
    lastPurchaseAt: Date,

    // Library
    borrowedBooks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'BorrowRequest',
      },
    ],
    borrowLimit: {
      type: Number,
      min: [0, 'Borrow limit must be zero or more'],
      default: 3,
    },
    overdueFine: {
      type: Number,
      min: [0, 'Overdue fine must be zero or more'],
      default: 0,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
    joinedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export const Customer = model<ICustomer>('Customer', customerSchema);
