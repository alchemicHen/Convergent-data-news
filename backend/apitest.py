import requests

url = "https://google-news1.p.rapidapi.com/top-headlines"

querystring = {"country":"US","lang":"en","limit":"50"}

headers = {
    'x-rapidapi-host': "google-news1.p.rapidapi.com",
    'x-rapidapi-key': "SIGN-UP-FOR-KEY"
    }

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)