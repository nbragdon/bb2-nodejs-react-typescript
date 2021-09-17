import { DB } from "./db";

/* Developer notes:
*/
export function getLoggedInUser(db : DB) {
    return db.users[0];
}