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
    },
    localAfrica: {
      mPesa: {
        name: 'M-Pesa',
        logo: 'https://mpesa.foundation/images/logo.png',
        currencies: ['KES', 'TZS', 'UGX', 'RWF', 'BIF'],
        countries: ['KE', 'TZ', 'UG', 'RW', 'BI']
      },
      mobileMoney: {
        name: 'Mobile Money',
        logo: 'https://www.mobilemoneyafrica.com/wp-content/uploads/2019/02/Mobile-Money-Africa-Logo.png',
        currencies: ['GHS', 'NGN', 'ZAR', 'XOF', 'CDF'],
        countries: ['GH', 'NG', 'ZA', 'CI', 'CD']
      },
      ecobank```javascript
      ecobank: {
        name: 'Ecobank',
        logo: 'https://www.ecobank.com/Images/ecobank-logo.png',
        currencies: ['XOF', 'USD', 'EUR'],
        countries: ['GH', 'NG', 'CI', 'TZ', 'UG']
      },
      paystack: {
        name: 'Paystack',
        logo: 'https://paystack.com/images/logo.png',
        currencies: ['NGN', 'USD'],
        countries: ['NG', 'GH']
      },
      flutterwave: {
        name: 'Flutterwave',
        logo: 'https://www.flutterwave.com/images/logo.png',
        currencies: ['NGN', 'USD', 'GHS', 'KES'],
        countries: ['NG', 'GH', 'KE', 'TZ', 'UG']
      },
      snapscan: {
        name: 'SnapScan',
        logo: 'https://www.snapscan.co.za/assets/snapscan-logo.png',
        currencies: ['ZAR'],
        countries: ['ZA']
      },
      airtelMoney: {
        name: 'Airtel Money',
        logo: 'https://www.airtel.com/images/logo.png',
        currencies: ['KES', 'UGX', 'TZS', 'RWF'],
        countries: ['KE', 'UG', 'TZ', 'RW']
      },
      orangeMoney: {
        name: 'Orange Money',
        logo: 'https://www.orange.com/sites/all/themes/orange/logo.png',
        currencies: ['XOF', 'XAF', 'USD'],
        countries: ['CI', 'SN', 'MA', 'CM']
      }
    }
  };
  
  export default payments;