## Project Walkthrough

First of all, please demo the working version of the app

Here is a list of missing features, recommended to do in order:

1. Dynamic price showing when different package is selected  
   Pricelist:
   - 3 Credits for $3
   - 10 Credits for $10
   - 60 Credits for $50
   - 100 Credits for $80 ✅
2. Dynamic discount price in the store card ✅
3. Buy button should increase player's balance
4. Player should be able to play with enough balance
5. Implement logic to determine winning probability.
   Here is the formula:

- initial win probability is 5%
- after each round without winner, the winning probability is updated as follows:
  newWinProbability = currentWinProbability + 3^ceiling(noOfRoundSoFarWithoutWinner/3)%

6. Show modals with proper messages depending on the result of game
7. Dynamically show the prizes that the user has won

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
