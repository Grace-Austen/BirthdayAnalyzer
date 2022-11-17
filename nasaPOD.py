import requests
import json
# import webbrowser

def nasaPOD(self, date):
	#API KEY
	API_KEY = 'E24iDq9jhvLGggYsFugUinAXI2aAeropVkq8DNZz'

	#API URL
	url='https://api.nasa.gov/planetary/apod'

	#Parameters
	params={
		'api_key' : API_KEY,
		'hd' : 'True',
		#'date' : '1997-03-22',
		'date': date
	}

	response = requests.get(url,params=params)
	json_data = json.loads(response.text)
	print(json_data)

	image_url= json_data['hdurl']
	# webbrowser.open(image_url)

	return image_url
