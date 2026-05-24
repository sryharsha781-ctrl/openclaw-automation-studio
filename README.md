# Stripe Website Package

This directory is a static public website package for Stripe account activation.

Published copy:

- https://sryharsha781-ctrl.github.io/openclaw-automation-studio/

Stripe asks for a business website, social profile, or app URL so customers and
Stripe can understand what is being sold. This package includes:

- `index.html` - business and service description
- `terms.html` - terms of service
- `privacy.html` - privacy policy
- `refund.html` - refund and cancellation policy
- `contact.html` - support/contact page

Safety boundary:

- No Stripe API keys.
- No checkout or payment code.
- No private operator identity details.
- No live payment collection until the operator publishes the site and finishes
  Stripe activation manually.

Suggested publishing options:

- GitHub Pages
- Netlify
- Vercel
- A custom HTTPS domain

After publishing:

1. Add the public URL to `openclaw_revenue/revenue_config.json`:

   ```json
   {
     "stripe_website_url": "https://your-public-site.example"
   }
   ```

2. Paste the same public HTTPS URL into Stripe as the business website.
