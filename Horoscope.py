import requests
import json
#----------------------------- Declaring Variables and getting months and day -------------------------------------

sign = ""

month = int(input("What's your birth MONTH: "))
day = int(input("What's your birth DAY: "))
valid = False

#----------------------------- Getting the zodiac sign from month and day -----------------------------------------
while(valid == False):
    #Aries
    if((month == 3 and (21 <= day <= 31)) or (month == 4 and (1 <= day <= 20))):
        sign = "Aries"
        valid = True
    #Taurus
    elif((month == 4 and (21 <= day <= 30)) or (month == 5 and (1 <= day <= 20))):
        sign = "Taurus"
        valid = True
    #Gemini
    elif((month == 5 and (21 <= day <= 31)) or (month == 6 and (1 <= day <= 21))):
        sign = "Gemini"
        valid = True
    #Cancer
    elif((month == 6 and (22 <= day <= 30)) or (month == 7 and (1 <= day <= 22))):
        sign = "Cancer"
        valid = True
    #Leo
    elif((month == 7 and (23 <= day <= 31)) or (month == 8 and (1 <= day <= 22))):
        sign = "Leo"
        valid = True
    #Virgo
    elif((month == 8 and (23 <= day <= 31)) or (month == 9 and (1 <= day <= 22))):
        sign = "Virgo"
        valid = True
    #Libra
    elif((month == 9 and (23 <= day <= 30)) or (month == 10 and (1 <= day <= 22))):
        sign = "Libra"
        valid = True
    #Scorpio
    elif((month == 10 and (23 <= day <= 31)) or (month == 11 and (1 <= day <= 22))):
        sign = "Scorpio"
        valid = True
    #Sagittarius
    elif((month == 11 and (23 <= day <= 30)) or (month == 12 and (1 <= day <= 21))):
        sign = "Sagittarius"
        valid = True
    #Capricorn
    elif((month == 12 and (12 <= day <= 31)) or (month == 1 and (1 <= day <= 19))):
        sign = "Capricorn"
        valid = True
    #Aquarius
    elif((month == 1 and (1 <= day <= 31)) or (month == 2 and (1 <= day <= 18))):
        sign = "Aquarius"
        valid = True
    #Pisces
    elif((month == 2 and (2 <= day <= 28)) or (month == 3 and (1 <= day <= 20))):
        sign = "Pisces"
        valid = True

    #Invalid
    else:
        print("Date invalid, input again")
        month = int(input("What's your birth month"))
        day = int(input("What's your birth DAY"))


#----------------------------- Getting Horoscope -----------------------------------------------------------------

url = "https://sameer-kumar-aztro-v1.p.rapidapi.com/"

querystring = {"sign":sign,"day":"today"}

headers = {
	"X-RapidAPI-Key": "90a36667c8msh154befc3ee1aec3p155e52jsnce58845b7f9a",
	"X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com"
}

response = requests.request("POST", url, headers=headers, params=querystring)

responseJson = response.json()
print(sign + ": " + responseJson["description"])
