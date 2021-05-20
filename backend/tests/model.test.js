import { testConnection } from "../src/model.mjs"

test("the connection to postgres should succeed", async () => {
	expect(await testConnection()).toBe(true)
})
