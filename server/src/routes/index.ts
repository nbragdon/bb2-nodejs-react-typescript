import { Router } from 'express';
import AuthorizeRouter from './Authorize';

// Export the base-router
const baseRouter = Router();
baseRouter.use('/', AuthorizeRouter);
export default baseRouter;
