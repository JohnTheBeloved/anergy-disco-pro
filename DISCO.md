### Solution Requirements for monitoring of End-user power consumption by DISCOS


## Introduction

A Discos helps serve end-users of electricity with power, They basically do two things. Purchase electricity from Transmission companies, and sell the electricity to the end-users (customers). These end-users can be industries, companies or homes. The problem to solve is not concerned about how the Disco get the electricity, rather how the DIsco serve it's end users and manage and measure power consumption. 

## Solutions

An application would be created to help the DISCO monitor power consumption and also charge the end users (Customers) based on the power consumed.
Two major solutions will be deployed to effectively help this DISCO to manage the monitoring of electricity.

1. Harware Solution 

This hardware solution will be an embeded prepaid meter device that would be deployed to each end-user and will have the feature of being loaded with a prepaid token that enables the customer to load specific amount of power when recharge tokens are entered into it

As developing this hardware inhouse requires expertise, will take a long time and coupled with the fact that thereare existing companies that sell similar devices, The DISCO wll have to meet with a prepard metre vendor which will serve as a partner considering the fact that there are a lot of potential users of these metres, Specific requirements will be given to the vendor so as to suite the local use and business of the DISCO. The vendor will then manufature and supply the DISCO with the devices and the devices can then loaded and prepared for deployment in the end-use site.

Some important features include
  - Ability to load meter with prepaid token to power consumption
  - Ability to remotely monitor pulse and health status of meter
  - Ability to remotely diagnose issues with the meter
  - ABility to remotely load tokens



2. Software Solution

This software solution will be an enterprise application that will help the coordination of every process of management of the company's deployed prepaid metres. The solution will consist of the following modules

 - Admin Module 
 - Engineering Module
 - Technician Module
 - Self service Module


### The Admin Module

#### Features

- Registration of new Customers
- Meter Requests
- Meter Assignment to Customers
- Meter Activation
- Payments verification and activation
- Transaction History
- Query Submission
- Issue Tracking

### The Enginering Module

- Registering new meters to the system
- New meter provisoining
- Token Algorithm upload
- Token generation
- Token activation

### Technician / Field Module

- Meter installation
- Meter location update
- Instant Toekn generation


### Self service module

 - Customer registration and onboarding
 - Meter requests
 - Recharge Token Payments
 - Transaction History
 - Meter information 
 - Query complaints

### Application deployment architecture

![image](https://user-images.githubusercontent.com/7778212/125266562-d7335180-e2fd-11eb-98c5-2355e9a3bb27.png)



