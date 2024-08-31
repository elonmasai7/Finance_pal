// payments.js
const payments = {
    international: {
      paypal: {
        name: 'PayPal',
        logo: 'https://www.paypalobjects.com/webstatic/icon/pp258.png',
        currencies: ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD'],
        countries: ['US', 'CA', 'GB', 'AU', 'JP', 'DE', 'FR', 'IT', 'ES']
      },
      cashApp: {
        name: 'Cash App',
        logo: 'https://cash.app/images/cash-card-logo.png',
        currencies: ['USD', 'GBP', 'EUR'],
        countries: ['US', 'GB', 'FR', 'DE', 'IT', 'ES']
      },
      zelle: {
        name: 'Zelle',
        logo: 'https://www.zellepay.com/static/images/zelle-logo.png',
        currencies: ['USD'],
        countries: ['US']
      },
      stripe: {
        name: 'Stripe',
        logo: 'https://stripe.com/img/v3/logo-lockup-dark@2x.png',
        currencies: ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD'],
        countries: ['US', 'CA', 'GB', 'AU', 'JP', 'DE', 'FR', 'IT', 'ES']
      },
      square: {
        name: 'Square',
        logo: 'https://squareup.com/static/img/square-logo.png',
        currencies: ['USD', 'CAD'],
        countries: ['US', 'CA']
      },
      venmo: {
        name: 'Venmo',
        logo: 'https://venmo.com/favicon.ico',
        currencies: ['USD'],
        countries: ['US']
      },
      applePay: {
        name: 'Apple Pay',
        logo: 'https://www.apple.com/apple-pay/images/apple-pay-logo.png',
        currencies: ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD'],
        countries: ['US', 'CA', 'GB', 'AU', 'JP', 'DE', 'FR', 'IT', 'ES']
      },
      googlePay: {
        name: 'Google Pay',
        logo: 'https://pay.google.com/intl/en_us/about/static/images/brand-icon.png',
        currencies: ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD'],
        countries: ['US', 'CA', 'GB', 'AU', 'JP', 'DE', 'FR', 'IT', 'ES']
      },
      payoneer: {
        name: 'Payoneer',
        logo: 'https://www.payoneer.com/assets/images/logo.svg',
        currencies: ['USD', 'EUR', 'GBP', 'AUD', 'CAD', 'JPY'],
        countries: ['US', 'CA', 'GB', 'AU', 'JP', 'DE', 'FR', 'IT', 'ES', 'IN', 'CN']
      },
      transferWise: {
        name: 'Wise (formerly TransferWise)',
        logo: 'https://wise.com/assets/images/logo.svg',
        currencies: ['USD', 'EUR', 'GBP', 'AUD', 'CAD', 'NZD', 'SGD', 'CHF'],
        countries: ['US', 'CA', 'GB', 'AU', 'JP', 'DE', 'FR', 'IT', 'ES', 'IN', 'CN']
      },
      remittance: {
        name: 'Western Union',
        logo: 'https://www.westernunion.com/global/images/logo.png',
        currencies: ['USD', 'EUR', 'GBP', 'AUD', 'CAD', 'JPY'],
        countries: ['US', 'CA', 'GB', 'AU', 'JP', 'DE', 'FR', 'IT', 'ES', 'BR', 'MX']
      }
    }
  };
  
  export default payments;