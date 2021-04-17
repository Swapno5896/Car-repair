import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CartForm from './CartForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IeEqTJ0SUoa6Tz8QXpyYXN8m0T4A1wkGfswaMnRL06JhH2HA4ilsCQ5c7XDHpAEJB5mGHOKjKhXE8khkZcSdKOV00uBNaOEqK');

const ProcessPament = () => {
    return (
        <Elements stripe={stripePromise}>
       <CartForm></CartForm>
      </Elements>
    );
};

export default ProcessPament;