import pkg from 'pg';
var Pool = pkg.Pool;
var connection = new Pool({
    connectionString: "postgres://paulo:iJrPeJI7ZIA898lJkAjhsUEX2Zqx5GHH@dpg-cf6skupa6gdjkk5bnd50-a.oregon-postgres.render.com/pocts",
    ssl: true
});
export default connection;
