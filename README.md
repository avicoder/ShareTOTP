

# ShareTOTP
Enable seamless sharing of 2FA codes within teams.


![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

<img width="265" alt="image" src="https://github.com/avicoder/ShareTOTP/assets/2093260/384f4abc-c964-43a7-9a2f-6c98da7dfcc7">



This project is a compact solution designed to facilitate the sharing of TOTP codes typically found in apps like Google Authenticator and Authy, with tailored customizations in its development.

## Preparing the project

- Clone the repository:
  ```bash
  git clone https://github.com/avicoder/ShareTOTP.git
  cd ShareTOTP
  ```

- Create an environment file:
  ```bash
  cp .env.example .env
  ```

- Install NodeJS on your machine and run:
  ```bash
  npm i && npm run build
  ```

## Running the app in local machine

- Install Docker on your local machine and ensure the following ports are free:
  - 33061
  - 8000
  - 8081

- Run the following command in the project root:
  ```bash
  docker compose up -d
  ```

- Run Migrations through the webpage.

## Accessing Services

- Web Application: http://localhost:80/login
- phpMyAdmin: http://localhost:8081/

## Homepage

- The homepage will display all the service codes in a grid.
- Click on the code to copy it to the clipboard

![Homepage](https://github.com/avicoder/ShareTOTP/assets/2093260/0bd356c5-2fbb-4d98-be46-41bca33ce577)

## Admin Login

- Default credentials:
  - User: admin@admin.com
  - Password: password

![Admin Login](https://github.com/avicoder/ShareTOTP/assets/2093260/ad70dd40-0710-4855-a3d1-291f7bd8d39f)

## Dashboard

- List the TOTPs and other customizations using `/dashboard`
![Dashboard](https://github.com/avicoder/ShareTOTP/assets/2093260/958f2d85-60d9-4425-8258-945cdab4c1e7)

## OTPs

- Create, Edit, or Delete the OTPs using `/otps` page
![OTPs](https://github.com/avicoder/ShareTOTP/assets/2093260/b7a19caa-94c0-4030-bcc9-d45a4f6738fa)

- It also supports major protocols for generating the OTPs
![OTPs Protocol](https://github.com/avicoder/ShareTOTP/assets/2093260/cbfee94a-3df1-4a07-a12b-c1de9182c1a4))

## Services

- Create services and customize the logo and name using `/services` page
![Services](https://github.com/avicoder/ShareTOTP/assets/2093260/6a5bb159-5eff-4445-abc3-645f5ee4a6a0)
![Services Customization](https://github.com/avicoder/ShareTOTP/assets/2093260/f5433e35-546f-44dc-a54b-ee42a296e820)

## Manage Team Members

- Add, delete, or update the users using `/users` page
![Manage Team Members](https://github.com/avicoder/ShareTOTP/assets/2093260/c380809e-50d7-4fa3-8ad8-1a33d23d19dd)

## Settings

- Add the org name and Logo using `/settings` page
![Settings](https://github.com/avicoder/ShareTOTP/assets/2093260/b62397b2-1a69-4f25-8253-b5bde74be35e)


---

## Contributing

We welcome contributions from the community! If you'd like to contribute to ShareTOTP, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure they are properly tested.
4. Commit your changes with clear and descriptive messages.
5. Push your changes to your fork.
6. Submit a pull request, explaining the changes you've made and why they are valuable.

Thank you for considering contributing to ShareTOTP. Together, we can make it even better!

---

Feel free to adjust the language or steps as needed for this project!
