# Contact Form Setup Guide

## Option 1: EmailJS (Recommended) ⭐

### Setup Steps:
1. **Create EmailJS Account**: Go to [emailjs.com](https://www.emailjs.com) and sign up
2. **Create Email Service**: 
   - Go to Email Services → Add New Service
   - Choose Gmail (or your preferred email provider)
   - Follow the setup instructions
3. **Create Email Template**:
   - Go to Email Templates → Create New Template
   - Use this template content:
   ```
   Subject: New Contact Form Submission from {{from_name}}
   
   Hello {{to_name}},
   
   You have received a new contact form submission:
   
   Name: {{from_name}}
   Email: {{from_email}}
   Company: {{company}}
   Project Type: {{project_type}}
   Budget Range: {{budget_range}}
   Timeline: {{timeline}}
   
   Message:
   {{message}}
   
   Best regards,
   Portfolio Contact Form
   ```
4. **Get Your Keys**:
   - Service ID: Found in Email Services section
   - Template ID: Found in Email Templates section  
   - Public Key: Found in Account → API Keys

### Update the Code:
Replace these values in `components/Contact.tsx`:
```javascript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your public key
```

---

## Option 2: Formspree (Alternative) 🔄

### Setup Steps:
1. **Create Formspree Account**: Go to [formspree.io](https://formspree.io) and sign up
2. **Create New Form**: Get your form endpoint URL
3. **Update Form Action**: Replace the form element in Contact.tsx:

```jsx
<form 
  action="https://formspree.io/f/YOUR_FORM_ID" 
  method="POST"
  onSubmit={handleSubmit} 
  className="space-y-6"
>
```

### Benefits:
- ✅ No API keys needed
- ✅ Built-in spam protection
- ✅ Free tier available
- ✅ Simple setup

---

## Option 3: Direct Email Links (Simplest) 📧

### Current Implementation:
Your contact form already has direct email links:
- **Primary Email**: `ayushmore8652@gmail.com`
- **WhatsApp**: `https://wa.me/9321401312`
- **Telegram**: `https://t.me/devsbuddy`

### Benefits:
- ✅ No setup required
- ✅ Always works
- ✅ Direct communication

---

## Recommendation

**Use EmailJS** for the best user experience:
- Professional form handling
- Email delivered to your inbox
- User gets confirmation message
- No backend required
- Free tier: 200 emails/month

**Fallback**: Keep the direct email links as backup options.
