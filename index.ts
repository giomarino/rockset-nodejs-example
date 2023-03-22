import rockset from '@rockset/client';
const client = rockset('', "https://api.euc1a1.rockset.com");

async function handler() {    
    try {
        const response = await client.queries.query({
            sql: {
            query: 'SELECT * FROM "splittypay-v2-mcattaneo"."buyers" as o ORDER BY created_at DESC',
            default_row_limit: 100,
            }
        });
        console.info(response);
    } catch (error) {
        console.error(error);
    }
}
handler()