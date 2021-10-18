---
sidebar_label: "SDK Set up"
sidebar_position: 1
---

# Pay-Fi Sdk

Learn how to use **Pay-Fi SDK Quick**.

## Getting Started

BASE URL

```shell
https://api-payfi-staging.herokuapp.com
```
SDK URL

```shell
https://payfi-sdk-js.s3.amazonaws.com/payfi.js
```

## Parameters Table
The Table Below is states the parameters and how to use them


| Param     | Required   | Description           |
|-----------|------------| :---------------------:|
| apiKey      | YES           | Public Key attached to your account |  
| amount      | YES           | Amount in Kobo |  
| reference      | YES           | A unique transaction reference |  
| callback      | NO           | Function that runs when payment is successful |  
| onClose      | NO           | Function called if the customer closes the payment window |  


## Step 1

First initialize the sdk as shown below

```shell
      const payfi = new Payfi({
        apiKey: 'pk_ce082ddd-c15f-',
        callbackUrl: "http://test.com",
        callback: reference => {
        document.getElementById("btn").removeAttribute("disabled")
        console.log('callback called', reference);
          },
        onClose: () => {
          document.getElementById("btn").removeAttribute("disabled")
          console.log('modal close')
        } 
      });
```

## Step 2

Initiate payment process passing the amount and reference.

```shell
   payfi.pay({ amount, reference: `${Date.now()}` })
```

**RE-QUERY**
```shell
/merchant/purchase/verify-by-reference
```

**BODY**
```shell
  {
    "reference":"testing-now-igho"
  }
```

## Example Implementation
```shell
<script src="https://payfi-sdk-js.s3.amazonaws.com/payfi.js"></script>
  <script type="text/javascript">
     let amount;
     const buttonElement = document.getElementById("btn");
     const handleInputChange = e => {
       amount = document.getElementById("amount").value;
     }
     const handleFormSubmit = () => {
       payfi.pay({ amount, reference: `${Date.now()}` })
     }
     const payfi = new Payfi(
       {
         apiKey: 'pk_ce082ddd-c15f',
         callbackUrl: "http://test.com",
         callback: reference => {
          console.log('callback called', reference);
         },
         onClose: () => {
           console.log('modal close')
          }
        }); 
  </script>
```
