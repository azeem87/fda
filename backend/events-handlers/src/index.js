import { NotFoundError } from 'error-middleware/errors';
import errorMiddleware from 'error-middleware';
import morganBody from 'morgan-body';

// Application Route Handler Import //
// when an order is created it validates order and its eligibility.
import createOrderEventHandler from './create-order';

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const asyncHandler = require('express-async-handler');
const context = process.env.CONTEXT || '/api/v1';

//add middleware's
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
morganBody(app, { logAllReqHeader: true });

// ROUTE START //
app.get(`${context}/`, (req, res) => res.send('the organic fresh app API!'));
app.post(
  `${context}/create-order-event`,
  asyncHandler(createOrderEventHandler)
);
app.use(errorMiddleware);
// If no matches found, return 404
app.use((req, res) => {
  throw new NotFoundError();
});
// ROUTES END  //

//start app
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App is listening on port ${port}.`));
