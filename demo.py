import requests

url = "http://localhost:4321/api/personas"

payload = {}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
