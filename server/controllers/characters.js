import { pool } from "../config/database.js";

const getCharacters = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM characters ORDER BY id ASC')
        res.status(200).json(result.rows)
    } catch (err) {
        console.log('Error fetching characters: ', err)
        res.status(500).json({error: 'Internal server error'})
    }
}

export default {getCharacters}