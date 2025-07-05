import express from 'express'

const router = express.Router()

// Dummy content — in real cases, this can come from DB or Markdown
const legalPages = {
  privacyPolicy: 'This is the privacy policy content of KeProduct.',
  termsAndConditions: 'These are the terms and conditions of KeProduct.',
  cancellationRefund: 'This is the cancellation and refund policy of KeProduct.',
  shippingDelivery: 'This is the shipping and delivery policy of KeProduct.',
}

// GET /api/legal/privacy-policy
router.get('/privacy-policy', (req, res) => {
  res.json({ title: 'Privacy Policy', content: legalPages.privacyPolicy })
})

// GET /api/legal/terms-and-conditions
router.get('/terms-and-conditions', (req, res) => {
  res.json({ title: 'Terms and Conditions', content: legalPages.termsAndConditions })
})

// GET /api/legal/cancellation-refund
router.get('/cancellation-refund', (req, res) => {
  res.json({ title: 'Cancellation & Refund', content: legalPages.cancellationRefund })
})

// GET /api/legal/shipping-delivery
router.get('/shipping-delivery', (req, res) => {
  res.json({ title: 'Shipping & Delivery', content: legalPages.shippingDelivery })
})

export default router
