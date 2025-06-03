# Data Modeling Reference for landwatcher-api

This document defines the recommended data structures for managing parcel listings and logging information.

## 📄 Parcel Object

| Field            | Type    | Description                              |
|:----------------|:--------|:-----------------------------------------|
| id               | string  | Unique identifier                        |
| location         | string  | Parcel location/address                  |
| size_acres       | number  | Size of the parcel in acres              |
| wildlife_present | boolean | True if wildlife habitats observed       |
| trails_present   | boolean | True if existing trails are found        |
| listing_status   | string  | Available, Offer Pending, Sold           |
| contact_info     | string  | Seller’s or agent's contact information  |
| notified         | boolean | True if we've contacted about preservation |

## 📄 Status Log

Track changes for each parcel:
- Date
- New status
- Notes
