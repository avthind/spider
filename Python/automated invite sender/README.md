## Automated Invite Sender

### Overview
This Python script automates sending invitation messages with attachments to a large contact list via Email, SMS, and WhatsApp. It is ideal for event invitations, announcements, and bulk messaging.

### Features

- Send Email Invitations with attachments via SMTP
- Send SMS Invitations using Twilio API
- Send WhatsApp Invitations via Twilio WhatsApp API
- Bulk Messaging Support for multiple recipients
- Personalized Messages for each recipient
- Secure Authentication for email and Twilio API

### Requirements

1. **Email Sending (SMTP):**
- A valid email account (e.g., Gmail, Outlook, Yahoo)
- SMTP settings for your email provider
- App password or SMTP authentication enabled
2. **Twilio Account for SMS & WhatsApp:**
- Sign up for Twilio
- Get your Account SID, Auth Token, and Twilio Phone Number
- Enable Twilio WhatsApp API

### Usage
1. **Clone the repository**
2. **Install dependencies (smtplib, emial, twilio)**
3. **Set your SMTP details, Twilio credentials, and contact lists**
5. **Run the script to send messages**
