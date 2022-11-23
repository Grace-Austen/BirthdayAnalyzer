import requests
import json

class horoscope:
    #Constructor for the class, which creates all the necessary variables as well as assigns month and day
    #day = day of the month that we are finding a horoscope for 
    #month = month for which we are trying to find the horoscope of 
    def __init__(self, day, month):
        self.month = int(month)
        self.day = int(day)
        self.sign = ""
        self.description = ""
        self.compatibility = ""
        self.mood = ""
        self.color = ""
        self.luckyNumber = ""
        self.luckyTime = ""

    #Uses day and month in order to determine which sign does said date corresponds with
    def findSign(self):
        if((self.month == 3 and (21 <= self.day <= 31)) or (self.month == 4 and (1 <= self.day <= 20))):
            self.sign = "Aries"
        #Taurus
        elif((self.month == 4 and (21 <= self.day <= 30)) or (self.month == 5 and (1 <= self.day <= 20))):
            self.sign = "Taurus"
        #Gemini
        elif((self.month == 5 and (21 <= self.day <= 31)) or (self.month == 6 and (1 <= self.day <= 21))):
            self.sign = "Gemini"
        #Cancer
        elif((self.month == 6 and (22 <= self.day <= 30)) or (self.month == 7 and (1 <= self.day <= 22))):
            self.sign = "Cancer"
        #Leo
        elif((self.month == 7 and (23 <= self.day <= 31)) or (self.month == 8 and (1 <= self.day <= 22))):
            self.sign = "Leo"
        #Virgo
        elif((self.month == 8 and (23 <= self.day <= 31)) or (self.month == 9 and (1 <= self.day <= 22))):
            self.sign = "Virgo"
        #Libra
        elif((self.month == 9 and (23 <= self.day <= 30)) or (self.month == 10 and (1 <= self.day <= 22))):
            self.sign = "Libra"
        #Scorpio
        elif((self.month == 10 and (23 <= self.day <= 31)) or (self.month == 11 and (1 <= self.day <= 22))):
            self.sign = "Scorpio"
        #Sagittarius
        elif((self.month == 11 and (23 <= self.day <= 30)) or (self.month == 12 and (1 <= self.day <= 21))):
            self.sign = "Sagittarius"
        #Capricorn
        elif((self.month == 12 and (12 <= self.day <= 31)) or (self.month == 1 and (1 <= self.day <= 19))):
            self.sign = "Capricorn"
        #Aquarius
        elif((self.month == 1 and (1 <= self.day <= 31)) or (self.month == 2 and (1 <= self.day <= 18))):
            self.sign = "Aquarius"
        #Pisces
        elif((self.month == 2 and (2 <= self.day <= 29)) or (self.month == 3 and (1 <= self.day <= 20))):
            self.sign = "Pisces"

    #Get horoscope uses Aztro API in order to find the horoscope and other related info using the date
    # It also assigns the collected info the the corresponding variables
    # returns: The json file of the horoscope downloaded info 
    def getHoroscope(self):
        url = "https://sameer-kumar-aztro-v1.p.rapidapi.com/"

        querystring = {"sign":self.sign,"day":"today"}

        headers = {
            "X-RapidAPI-Key": "90a36667c8msh154befc3ee1aec3p155e52jsnce58845b7f9a",
            "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com"
        }

        response = requests.request("POST", url, headers=headers, params=querystring)

        responseJson = response.json()
        self.description = responseJson["description"]
        self.compatibility = responseJson["compatibility"]
        self.mood = responseJson["mood"]
        self.color = responseJson["color"]
        self.luckyNumber = responseJson["lucky_number"]
        self.luckyTime = responseJson["lucky_time"]
        #print(self.sign + ": " + responseJson["description"])
        return responseJson

    #returns the day that we are finding horoscope for
    def getDay(self):
        return self.day

    #setter of the variable day, which assigns variable and updates the class
    def setDat(self, day):
        self.day = day
        self.main()


    #returns the month for which we are finding horoscope for
    def getMonth(self):
        return self.month

    
    #setter of the variable month, which assigns variable and updates the class
    def setMonth(self, month):
        self.month = month
        self.main()

    #return the sign that corresponds to the given day and date
    def getSign(self):
        return self.sign

    #returns the horoscope of given sign (ACTUAL HOROSCOPE)
    def getDescription(self):
        return self.description

    #returns a compatibility to other sing of the given sign
    def getCompatibility(self):
        return self.compatibility

    #returns today's mood of a given sign
    def getMood(self):
        return self.mood

    #returns today's color of a given sign
    def getColor(self):
        return self.color

    #returns today's lucky number of a given sign
    def getLuckyNum(self):
        return self.luckyNumber

    #return today's lucky time of a given sign
    def getLuckyTime(self):
        return self.luckyTime

    #Runs the functions responsible for getting all the variables
    def main(self):
        self.findSign()
        self.getHoroscope()


#Example run 
test = horoscope(23,5)
test.main()
print(test.getDescription())
test.setMonth(9)
print(test.getDescription())
