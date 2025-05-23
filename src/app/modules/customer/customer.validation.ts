import { z } from "zod";

export const customerSchema = z.object({
  userId: z.string({
    required_error: "User ID is required",
    invalid_type_error: "User ID must be a valid string",
  }),

  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(1, "Name cannot be empty"),

  email: z
    .string({
      invalid_type_error: "Email must be a string",
    })
    .email("Invalid email format")
    .optional(),

  contactNo: z
    .string({
      invalid_type_error: "Contact number must be a string",
    })
    .min(7, "Contact number is too short")
    .max(15, "Contact number is too long")
    .optional(),

  address: z
    .string({ invalid_type_error: "Address must be a string" })
    .optional(),
  city: z.string({ invalid_type_error: "City must be a string" }).optional(),
  state: z.string({ invalid_type_error: "State must be a string" }).optional(),
  postalCode: z
    .string({ invalid_type_error: "Postal code must be a string" })
    .optional(),
  country: z
    .string({ invalid_type_error: "Country must be a string" })
    .optional(),

  profileImage: z
    .string({
      invalid_type_error: "Profile image must be a URL string",
    })
    .url("Profile image must be a valid URL")
    .optional(),

  // Book shop
  purchasedBooks: z
    .array(
      z.string({
        invalid_type_error: "Each purchased book ID must be a string",
      })
    )
    .optional(),

  totalSpent: z
    .number({
      invalid_type_error: "Total spent must be a number",
    })
    .min(0, "Total spent must be zero or positive")
    .optional(),

  loyaltyPoints: z
    .number({
      invalid_type_error: "Loyalty points must be a number",
    })
    .min(0, "Loyalty points must be zero or positive")
    .optional(),

  // POS system
  paymentMethods: z
    .array(
      z.string({
        invalid_type_error: "Payment methods must be strings",
      })
    )
    .optional(),

  lastPurchaseAt: z.preprocess(
    (val) => (val ? new Date(val as string) : undefined),
    z
      .date({ invalid_type_error: "Last purchase date must be a valid date" })
      .optional()
  ),

  // Library system
  borrowedBooks: z
    .array(
      z.string({
        invalid_type_error: "Each borrowed book ID must be a string",
      })
    )
    .optional(),

  borrowLimit: z
    .number({
      invalid_type_error: "Borrow limit must be a number",
    })
    .min(0, "Borrow limit must be zero or more")
    .optional(),

  overdueFine: z
    .number({
      invalid_type_error: "Overdue fine must be a number",
    })
    .min(0, "Overdue fine must be zero or more")
    .optional(),

  isActive: z
    .boolean({
      invalid_type_error: "isActive must be true or false",
    })
    .optional(),

  joinedAt: z.preprocess(
    (val) => (val ? new Date(val as string) : undefined),
    z.date({ invalid_type_error: "JoinedAt must be a valid date" }).optional()
  ),
});
