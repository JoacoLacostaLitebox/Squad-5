# Liteflix Challenge Back

## Prerequisites

Before you begin, make sure you have the following requirements installed on your system:

- Node.js 18.18.0.
- npm (Node Package Manager).
- Aws account with a S3 bucket for the images

You can download Node.js and easily manage its versions with [nvm](https://github.com/nvm-sh/nvm) or [nvm for Windows](https://github.com/coreybutler/nvm-windows).

## Step-by-Step Guide

Follow these steps to set up and run the application in your local environment:

1. **Clone the Repository**

   Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/JoaquinLacosta/liteflix-back.git
   ```

2. **Install Dependencies**

   Install the project dependencies by running the following command:


   ```bash
   npm install
   ```

3. **Set Environment Variables**

   Create a file named `.env` in the root of the project and configure the environment variables. The project already contains a file named `.env.example` with the required variables, which are as follows:

   ```plaintext
    PORT="port to listen the backend"
    DB_CONNECTION_URI="db connection url"
    S3_BUCKET_NAME="name of the bucket to upload the movies"
    LITEFLIX_AWS_ACCESS_KEY="your aws access key"
    LITEFLIX_AWS_SECRET_KEY="your aws secret key"
    AWS_REGION="the region of the bucket"
   ```

4. **Run the Application**

   Run the compiled code to see how it would look in a production environment:

   ```bash
   npm run start
   ```
   
   Or if you want to run it for development, use the following command:
   
    ```bash
   npm run start:dev
   ```