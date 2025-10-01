import { pool } from "./database.js";
import dotenv from "./dotenv.js";
import charactersData from "../data/characters.js";

const createCharacterTable = async () => {

    const createTableQuery = `
    DROP TABLE IF EXISTS characters;
    
    CREATE TABLE IF NOT EXISTS characters (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        short_desc VARCHAR(255) NOT NULL,
        long_desc TEXT NOT NULL,
        team VARCHAR(255) NOT NULL,
        is_variant BOOLEAN NOT NULL DEFAULT FALSE,
        variant_of INT REFERENCES characters(id) ON DELETE SET NULL
    )`

    try {
        const res = await pool.query(createTableQuery)
        console.log("🎉 Characters table created succesfully")
    } catch (err) {
        console.log("⚠️ Error creating table", err)
    }
};

const seedCharacterTable = async () => {
    try {
        await createCharacterTable();

        for (const character of charactersData) {
            const insertQuery = {
                text: 'INSERT INTO characters (name, image, short_desc, long_desc, team, is_variant, variant_of) VALUES ($1, $2, $3, $4, $5, $6, $7)'
            };
            const values = [
                character.name,
                character.image,
                character.shortDesc,
                character.longDesc,
                character.team,
                character.isVariant,
                character.variantOf,
            ];

            try {
                await pool.query(insertQuery, values);
                console.log(`✅ ${character.name} added succesfully`);
            } catch (err) {
                console.log(`⚠️ Error inserting character ${character.name}: `, err.message);
            }
        }

        console.log('Database seeding completing');
        await pool.end();
    } catch (err) {
        console.error('⚠️ Error seeding database: ', err.message);
        await pool.end();
        process.exit(1);
    }
};

seedCharacterTable();