import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
import os
from twilio.rest import Client

# Email configuration
sender_email = "your_email@example.com"
sender_password = "your_password"
smtp_server = "smtp.example.com"
smtp_port = 587  # Use 465 for SSL, or 587 for TLS

# Twilio SMS and WhatsApp configuration
twilio_sid = "your_twilio_sid"
twilio_auth_token = "your_twilio_auth_token"
twilio_phone_number = "your_twilio_phone_number"  

# List of recipients
email_list = ["contact1@example.com", "contact2@example.com", "contact3@example.com"]
phone_list = ["+12345678901", "+10987654321"]  
whatsapp_list = ["+12345678901", "+10987654321"]  

# Email subject and body
subject = "Invitation to Event"
body = """
Dear [Name],

We are excited to invite you to our upcoming event! Please find the invitation attached.

Best regards,
[Your Name]
"""

# Attachment
attachment_path = "invitation.pdf"  # Path to your attachment file

def send_email(to_email, subject, body, attachment_path):
    # Create message container
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = to_email
    msg['Subject'] = subject

    # Add body to email
    msg.attach(MIMEText(body, 'plain'))

    # Attach file
    if os.path.exists(attachment_path):
        part = MIMEBase('application', 'octet-stream')
        with open(attachment_path, 'rb') as file:
            part.set_payload(file.read())
        encoders.encode_base64(part)
        part.add_header('Content-Disposition', f'attachment; filename={os.path.basename(attachment_path)}')
        msg.attach(part)
    else:
        print(f"Attachment file {attachment_path} not found!")

    # Send email using SMTP server
    try:
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()  # Secure connection
        server.login(sender_email, sender_password)
        text = msg.as_string()
        server.sendmail(sender_email, to_email, text)
        print(f"Email sent to {to_email}")
    except Exception as e:
        print(f"Failed to send email to {to_email}: {e}")
    finally:
        server.quit()

def send_sms(to_phone, body):
    # Initialize Twilio client
    client = Client(twilio_sid, twilio_auth_token)

    # Send SMS
    try:
        message = client.messages.create(
            body=body,
            from_=twilio_phone_number,
            to=to_phone
        )
        print(f"SMS sent to {to_phone}: {message.sid}")
    except Exception as e:
        print(f"Failed to send SMS to {to_phone}: {e}")

def send_whatsapp(to_whatsapp, body):
    # Initialize Twilio client
    client = Client(twilio_sid, twilio_auth_token)

    # Send WhatsApp message
    try:
        message = client.messages.create(
            body=body,
            from_='whatsapp:' + twilio_phone_number,  # Twilio WhatsApp number
            to='whatsapp:' + to_whatsapp
        )
        print(f"WhatsApp sent to {to_whatsapp}: {message.sid}")
    except Exception as e:
        print(f"Failed to send WhatsApp to {to_whatsapp}: {e}")

# Send emails to all contacts in the email list
for contact in email_list:
    personalized_body = body.replace("[Name]", contact.split('@')[0])  # Personalize email body with name
    send_email(contact, subject, personalized_body, attachment_path)

# Send SMS to all contacts in the phone list
sms_body = "You're invited to our upcoming event! Please check your email for details and an invitation."
for phone in phone_list:
    send_sms(phone, sms_body)

# Send WhatsApp messages to all contacts in the WhatsApp list
whatsapp_body = "You're invited to our upcoming event! Please check your email for details and an invitation."
for whatsapp in whatsapp_list:
    send_whatsapp(whatsapp, whatsapp_body)
