const url = 'https://rodjaolast002.amocrm.ru/api/v2/contacts'
const access_token =
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImJmODAwNjhhZTk5MWEwZDExOTFiZThjYzk1NmRmMmZmMWZkNWZjOTY3MGRkNjljM2MyYTU3NTczOWNlMTAxMTg2ZGJhNDRkNjI3MTQyMTQxIn0.eyJhdWQiOiI3ODc5MzJkNi0xNjhkLTQ1NDgtODhjNy1mOTE1MDliNjAxM2MiLCJqdGkiOiJiZjgwMDY4YWU5OTFhMGQxMTkxYmU4Y2M5NTZkZjJmZjFmZDVmYzk2NzBkZDY5YzNjMmE1NzU3MzljZTEwMTE4NmRiYTQ0ZDYyNzE0MjE0MSIsImlhdCI6MTYzOTcxNjg1NiwibmJmIjoxNjM5NzE2ODU2LCJleHAiOjE2Mzk4MDMyNTYsInN1YiI6Ijc3Mzg1ODIiLCJhY2NvdW50X2lkIjoyOTg4NDA1Nywic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImNybSIsIm5vdGlmaWNhdGlvbnMiXX0.D-scVxlGCueQWe7DJRZ46Mku5tDHaRj-wCQRIH54fIywSWeJ9dyqCd70Y_WH0QIg-cOMmGqDteiq0ItK-NUmqXvFDlRZuHOCo0RpSHitTXjtAHknL6ss_nGqB5MsZcUOPFlIbT3VyQ4PLyKzW31dQkr5lsrVfC2gwzgHaPbIVQ2qf0Y0W_hPXMhWHvA4lbUn6hh3Zl0j1pMZWc3-qMo8RzvEI0JVDlCP83LNHCCqEIbXwscJCgtI8BNjxAC03eR7t8_YSeW9R1arHjSWAyNjhupQFDGc0R4NmMiQSKyTEog7221J72Xl9jqLhJDwPMfbda6rdkp6GvVQ4Uw3ZQrrrg'
const headers = [`Authorization: Bearer ${access_token}`]
console.log('adfa')
const dataBody = {
	limit: 25,
	with: 'leads',
	page: 1,
}

async function getAPI() {
	await fetch(url, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	})
		.then(response => response.json())
		.then(data => console.log(`data = ${data}`))
}

getAPI()

console.log('adfsdfa')
