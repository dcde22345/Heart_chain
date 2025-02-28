# Heart Chain

## Overview

Heart Chain is a **decentralized, blockchain-based privacy-focused mental health support platform** that provides users with an anonymous way to express their feelings, consult with counselors, and complete tasks to improve their well-being. By leveraging blockchain technology, Heart Chain ensures user anonymity, data security, and immutable records, allowing individuals to safely engage in mental health support without compromising their privacy. The platform includes various features such as diary logging, anonymous counseling, meeting rooms, and a psychological token system.

## Features

- **Anonymous Counseling**: Users can schedule anonymous consultation sessions and join secure virtual meetings with blockchain-based identity protection.
- **Diary Chatbot**: A chatbot-based diary where users can write and receive supportive feedback while ensuring their data remains decentralized and encrypted.
- **Tasks & Rewards**: Users can complete wellness-related tasks and earn **blockchain-backed psychological tokens** that incentivize mental health improvements.
- **Questionnaire**: A section to assess mental health status through simple questionnaires, stored securely on a blockchain ledger.
- **Meeting Room**: Secure video conferencing for counseling sessions, utilizing decentralized encryption for enhanced privacy.

## Installation

To set up the project locally, follow these steps:

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- npm or yarn

### Steps

1. Clone the repository:

   ```sh
   git clone https://github.com/your-repo/heart-chain.git
   cd heart-chain
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm start
   ```

   This will launch the application on http://localhost:3000/.

## Folder Structure

```
/heart-chain
├── src
│   ├── components       # UI components
│   ├── pages            # Main pages
│   ├── App.jsx          # Root component
│   ├── PageRouter.jsx   # Routing configuration
│   ├── index.jsx        # Entry point
│   ├── styles           # CSS files
│   └── assets           # Static assets
├── public               # Public assets
├── package.json         # Project dependencies
├── README.md            # Project documentation
```

## Pages & Routes

- `/` - **Home**
  - Introduction to the platform
  - Call-to-action button to start counseling

- `/diary` - **Diary Chatbot**
  - Allows users to chat with a bot and log emotions
  - Suggests professional help if needed

- `/counsel` - **Anonymous Counseling**
  - Users can book a time slot for counseling
  - Secure anonymous environment backed by blockchain encryption

- `/meeting-room` - **Meeting Room**
  - Secure video meeting for users and counselors
  - Camera selection and session controls with blockchain verification

- `/tasks` - **Tasks & Rewards**
  - Users complete wellness tasks
  - Progress tracking with a **decentralized reward system**

- `/questionnaire` - **Mental Health Assessment**
  - Users answer mental health-related questions
  - Helps assess emotional well-being, with responses stored securely on blockchain

## Technologies Used

- **Blockchain Technology**: Ensures secure, anonymous, and immutable data storage
- **deep-live-cam**: Privacy protection for video streaming https://github.com/hacksider/Deep-Live-Cam
- **React**: Frontend framework
- **Bootstrap**: UI styling

## Contribution

Contributions are welcome! Feel free to submit a pull request or open an issue.
