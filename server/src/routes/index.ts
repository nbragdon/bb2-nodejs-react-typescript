import { Router } from 'express';
import AuthorizeRouter from './Authorize';
import SettingsRouter from './Settings';

const baseRouter = Router();

baseRouter.use('/', AuthorizeRouter);
baseRouter.use('/settings', SettingsRouter);

export default baseRouter;
