import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
const stripePromise = loadStripe('pk_test_51IeEqTJ0SUoa6Tz8QXpyYXN8m0T4A1wkGfswaMnRL06JhH2HA4ilsCQ5c7XDHpAEJB5mGHOKjKhXE8khkZcSdKOV00uBNaOEqK');

const GetPament = () => {
    return (
        <div>
                <Elements stripe={stripePromise}>
                  <CardElement
                      options={{
                        style: {
                          base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                              color: '#aab7c4',
                            },
                          },
                          invalid: {
                            color: '#9e2146',
                          },
                        },
                      }}
                    />
                </Elements>
        </div>
    );
};

export default GetPament;