import * as SQlite from "expo-sqlite";

const db = SQlite.openDatabase("notes.db");

export const init = () => {
    const promise = new Promise(( resolve, reject ) => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF DOSE NOT EXISTS places (id INTEGER PRIMARY KEY NO NULL, note TEXT NOT NULL);",
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

export const insertNote = (note) => {
    const promise = new Promise(( resolve, reject ) => {
        db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO places (note) VALUES (?);",
                [note],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            )
        })
    });
    return promise;
}