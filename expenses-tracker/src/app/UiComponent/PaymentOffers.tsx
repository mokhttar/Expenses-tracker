import React from "react";
import { Offer } from "./PaymentPlan";
import CardUi from "./CardUi";
interface PaymentPlan {
  monthlyOffers: Offer[];
  yearlyOffers: Offer[];
  toggleValue: boolean;
}

export default function PaymentOffers(props: PaymentPlan) {
  const { toggleValue, monthlyOffers, yearlyOffers } = props;
  return (
    <>
      {toggleValue ? (
        <div>
          <CardUi offers={monthlyOffers} />
        </div>
      ) : (
        <div>
          <CardUi offers={yearlyOffers} />
        </div>
      )}
    </>
  );
}
