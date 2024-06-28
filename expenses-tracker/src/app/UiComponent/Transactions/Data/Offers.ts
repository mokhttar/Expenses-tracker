export enum OfferType {
  Premium = "premium",
  Normal = "Normal",
}
export interface Offer {
  id: number;
  type: OfferType;
  OriginalPrice: number;
  DiscountAmount: number;
}

const Offers: Offer[] = [
  {
    id: 1,
    type: OfferType.Premium,
    OriginalPrice: 100,
    DiscountAmount: 20,
  },
  {
    id: 2,
    type: OfferType.Normal,
    OriginalPrice: 50,
    DiscountAmount: 5,
  },
  {
    id: 3,
    type: OfferType.Premium,
    OriginalPrice: 200,
    DiscountAmount: 50,
  },
  {
    id: 4,
    type: OfferType.Normal,
    OriginalPrice: 75,
    DiscountAmount: 10,
  },
  {
    id: 5,
    type: OfferType.Premium,
    OriginalPrice: 150,
    DiscountAmount: 30,
  },
];

export default Offers;
