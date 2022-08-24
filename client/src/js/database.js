import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => 
//puts content in db and checks for errors
{try {
  const DB = await openDB("jate", 1);
  const transaction = DB.transaction("jate", "readwrite");
  const objStore = transaction.objectStore("jate");
  const req = objStore.put({ jate: content });
  const res = await req;
  console.log("stored", res);
} catch (error) {console.error('putDb not stored')}
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => 
// same as above but this one gets all the content from the db
{try {
    const DB = await openDB("jate", 1);
    const transaction = DB.transaction("jate", "readwrite");
    const objStore = transaction.objectStore("jate");
    const req = objStore.getAll();
    const res = await req;
    console.log("stored", res);
  } catch (error) {console.error('getDb not gotten!')}
  };

initdb();
