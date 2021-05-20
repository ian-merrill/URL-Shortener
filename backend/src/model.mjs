import pkg from "sequelize"
const { Sequelize, DataTypes } = pkg

export const sequelize = new Sequelize(
	"postgres://user:password@localhost:5432/database",
	{ logging: false }
)

export async function testConnection() {
	try {
		await sequelize.authenticate()
		console.log("Connection to postgres has been established successfully.")
		return true
	} catch (error) {
		console.error("Unable to connect to the database:", error)
		return false
	}
}

export const Url = sequelize.define("Url", {
	shortUrl: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	longUrl: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})
;(async () => {
	await Url.sync()
})()
