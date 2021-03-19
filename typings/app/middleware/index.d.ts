// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCheckIsLogin from '../../../app/middleware/checkIsLogin';
import ExportDeBounce from '../../../app/middleware/deBounce';

declare module 'egg' {
  interface IMiddleware {
    checkIsLogin: typeof ExportCheckIsLogin;
    deBounce: typeof ExportDeBounce;
  }
}
