import * as SQlite from "expo-sqlite";

const db = SQlite.openDatabase("notes.db");

export const init = () => {
    const promise = new Promise(( resolve, reject ) => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF DOSE NOT EXISTS places (id INTEGER PRIMARY KEY NO NULL, title TEXT NOT NULL, image TEXT NOT NULL, address TEXT NOT NULL, coords TEXT NOT NULL);",
                [],
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err);
                }
            )
        })
    });
    return promise;
};