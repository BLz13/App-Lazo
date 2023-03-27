import * as SQlite from "expo-sqlite";

const db = SQlite.openDatabase("notes.db");

export const init = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY NOT NULL, category TEXT NOT NULL, value TEXT NOT NULL, image TEXT NOT NULL);",
          [],
          () => resolve(),
          (_, err) => reject(err)
        );
      });
    });
    return promise;
  };

export const insertNote = (category, value, image) => {
    const promise = new Promise(( resolve, reject ) => {
        db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO places (category, value, image) VALUES (?, ?, ?);",
                [category, value, image],
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