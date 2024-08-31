# FinancePal FinanceDApps
FinanceDApps for quick testing & prototyping in FinancePay.

## How to use

1. Create FinanceDApps in the `/dApps` folder
2. Import the DApp in the `App.tsx` file
3. Run the following command to start the DApp

    ```bash
    npm start
    ```

    This will start the app at `http://localhost:3000`.

4. Since, this app is running on localhost and cannot be opened in MiniPay we need to create a tunnel we will use [ngrok](https://ngrok.com/) for the same.

5. Create an account on ngrok, setup ngrok on your machine.

    > [!NOTE]
    > ngrok is offering free static domain, use that so the url of the app does not change!

6. Use the following command, to start the tunnel.

    If you have the static domain

    ```bash
    ngrok http --domain=<STATIC_DOMAIN> 3000
    ```

    If not

    ```bash
    ngrok http 3000
    ```

### How to test your DApp in FinancePal

1. Open the FinancePal app on your phone and click on compass icon.

    ![fun1](https://github.com/user-attachments/assets/32853671-e7aa-4061-b5dc-63d2db9a3f1c)


2. Click on "Dashboard" to open the FinancePal Dashboard.

    ![fun2](https://github.com/user-attachments/assets/2d727537-04ce-4593-b372-189a3e37e361)


3. Notification page.

![fun3](https://github.com/user-attachments/assets/ab711ee8-54b8-4d47-8501-82a7d277d391)

4. Profile Modification.

   ![fun54](https://github.com/user-attachments/assets/d347b636-a32d-44b0-9525-73466216cc6c)


### Important Notes

-   Message signing is not currently supported.
-   A developer mode will be available soon, allowing the use of testnet.
