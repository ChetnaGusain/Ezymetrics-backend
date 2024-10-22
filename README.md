# EzyMetrics Backend

## Setup Instructions

1. Clone the repository.
2. Run `npm install` to install the required dependencies.
3. Create a `.env` file and add your MongoDB connection string:
Replace `<db_password>` with your actual MongoDB password.
4. Run the application: `npm start`.

## API Endpoints

### CRM
- **GET /api/crm/leads**: Fetch all leads.

### Marketing
- **GET /api/marketing/campaigns**: Fetch all campaigns.

### Reports
- **GET /api/reports/csv**: Generate a CSV report for leads.

### Notifications
- **POST /api/notifications/alert**: Send an email alert.


# Initialize the project (only if it's not already done)
npm init -y

# Install dependencies
npm install express mongoose nodemailer json2csv dotenv

npm start


# Postman to test the APIs

Campaign Routes

Create Campaign
Method: POST
URL: /api/marketing
BODY(JSON):
{
  "name": "Summer Campaign",
  "title": "Summer Sales",
  "description": "Promotional campaign for summer",
  "startDate": "2024-06-01",
  "endDate": "2024-07-01",
  "clicks": 1000,
  "leadsGenerated": 50
}

Fetch All Campaigns
Method: GET
URL: /api/marketing/campaigns

Lead Routes

Fetch All Leads
Method: GET
URL: /api/crm/leads

Create Lead

Method: POST
URL: /api/crm/leads
Body (JSON):
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "status": "Interested"
}

Email Notification

Send Email Notification
Method: POST
URL: /api/notifications/send
Body (JSON):
{
  "to": "",
  "subject": "",
  "text": ""
}
