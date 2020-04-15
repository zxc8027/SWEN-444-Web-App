# ArtBounty

## Installation and Setup Instructions

#### Set Up:  

You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`

## Features

#### Claim a bounty
By clicking the `claim` button on the home page a user can claim a bounty.

#### Create a bounty
On the home page by clicking the `Create` button a bounty will be generated on the page.

#### Gallery
The `/gallery` page allows users to view different pieces posted by different users.
A filter option exists on the page, but does not implement true filtering of the results.

#### View Art Piece
Clicking on an art piece in the gallery will bring the user to the `/art` endpoint.
This endpoint allows the user to view a specific art piece, view a synopsis of an artists profile, and post comments on the piece. Posting comments is not implemented.

#### Buying Art
On the `/art` endpoint the user may click `Buy` in doing so they will successfully be able to purchase art.

#### Create Account
A user may create an account for the site by clicking `Create Account` under the person icon on the header bar. This will prompt the user to fill out a form and create an account. Following the account creation, a user will be signed in.

#### Sign In
A user may sign in to the site by clicking `Sign In` located under the person icon.

#### Sign Out
A user may sign out of the site by clicking `Sign Out` located under the person icon.

#### View Profile
A user may view a profile by clicking any name tag indicated by an `@` symbol. Or by clicking on the person icon and clicking on `My Profile`.

#### Chat
To chat with another user, click on the `Chat` menu on the bottom right, fromn here a user may select different users to chat with. Actually chatting is not implemented.

#### Pay Invoice
Given that you are signed in, by clicking the bell icon a notification pane will drop down where you can click `Pay Invoice`. This will redirect you to the `/payment` screen where you may select a payment option or remove them. Removing is not implemented. Clicking `Use` will complete your payment and redirecting you to the `/payment/complete` screen where you can see your complete payment information.

#### Add New Payment Method
On the `/payment` screen if you press `Add New Payment Method`, you will be redirected to `/payment/add`. Here you can enter your card information and confirm or cancel adding your information.

#### View Bounty Status
Given that you are signed in, by clicking the bell icon a notification pane will drop down where you can click `Bounty Status`. This will redirect you to `/commission/status` where you can view the status of your bounty.

#### View Shipment
Given that you are signed in, by clicking the bell icon a notification pane will drop down where you can click `View Shipment`. This will redirect you `/shipping/status` where you can see view the status of your shipment.

## Notes

#### Clearing Data
Login information is stored in localstorage, so clearing that will log you out. The bounties you create are also stored in localstorage, so clearing localstorage will delete any additional bounties you create during your session.

#### Disclaimer 1
Several of the pages are implemented as view only, in other words even if the data is entered correctly into the form, it will not be displayed on page. We do this because this website has no backend, and the UX is truly what we want to represent.

#### Disclaimer 2
This project invokes 1st Amendement right to create a "transformative" work out of an existing work to comment on it and/or to mock it in some way, any art or pictures used on the site are used with fair use, and we expressely do not claim the rights to any works displayed on the site. Including the pictures of Longley :)
