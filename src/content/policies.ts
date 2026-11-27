// The privacy policy and terms of use, in English only. Every locale links here.
// Adapted from the shared Shayes Apps policies (shayesapps.com/policies) with
// minimal changes for Recurrence: app name, dates, no ads SDK, shared tasks.

import type { PoliciesContent } from './types';

const policies: PoliciesContent = {
  meta: { title: 'Privacy Policy & Terms of Use | Recurrence', description: 'Recurrence doesn’t track or collect any personally identifiable information. Your tasks sync through iCloud. Plus the terms for Premium subscriptions.' },
  h1: 'Privacy policy & terms of use',
  docs: [
    {
      id: 'privacy',
      title: 'Privacy policy',
      updated: 'November 26, 2026',
      sections: [
        { title: 'Short and sweet', body: ['Our policy is short and sweet because we value your information and privacy. Recurrence doesn’t track or collect any personally identifiable information. We do our best to limit the number of third parties we rely on.'] },
        { title: 'Payments', body: ['Payments for in-app purchases and subscriptions are made through the App Store, so we never have access to any of your credit card information. Recurrence contains the RevenueCat SDK. Please refer to their policies.'] },
        { title: 'Sync and sharing', body: ['Data synchronization is done using iCloud (Apple’s CloudKit). CloudKit is fully encrypted and all data lives on Apple’s infrastructure. No one besides you has access to your data, except the people you choose to share tasks with.'] },
        { title: 'Refund requests', body: ['By using Recurrence and making in-app purchases, you consent to our sharing of data regarding your usage and consumption of purchased content with Apple, as part of our efforts to resolve refund requests. This information may include details about how you have accessed and interacted with the purchased content. The purpose of sharing this data is to help Apple make an informed decision regarding refund requests. We ensure that such data sharing is done in compliance with Apple’s policies and only as necessary to process your requests.'] },
        { title: 'Questions', body: ['If you have any questions or concerns about our privacy policy, please contact us at support@shayesapps.com.'] },
      ],
    },
    {
      id: 'terms',
      title: 'Terms of use',
      updated: 'November 26, 2026',
      sections: [
        { title: 'Premium subscription terms', body: ['Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period. You can cancel anytime in your Apple account settings. Any unused portion of a free trial will be forfeited if you purchase a subscription.'] },
        { title: 'Questions', body: ['If you have any questions or concerns about our terms of use, please contact us at support@shayesapps.com.'] },
      ],
    },
  ],
};

export default policies;
