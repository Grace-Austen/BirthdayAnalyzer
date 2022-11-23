# Import Module
from bs4 import BeautifulSoup
import requests
  
class famousBday:

    #Constructor which assigns the variables and creates arrays for later use
    #Day - The day of birth that we are finding celebrities for 
    #Month - The month of birth that we are finding celebrities for 
    #year - The year of birth that we are finding celebrities for 

    def __init__(self, day, month, year):
        self.day = str(day)
        self.year = str(year)
        self.monthI = month
        self.month = ""
        self.names = []
        self.titles = []
    
    #Method which translates int of month into corresponding name of month and assigns variable month to it
    def getMonthStr(self):
        match self.monthI:
            case 1:
                self.month = "january"
            case 2:
                self.month = "february"
            case 3:
                self.month = "march"
            case 4:
                self.month = "april"
            case 5:
                self.month = "may"
            case 6:
                self.month = "june"
            case 7:
                self.month = "july"
            case 8:
                self.month = "august"
            case 9:
                self.month = "september"
            case 10:
                self.month = "october"
            case 11:
                self.month = "november"
            case 12:
                self.month = "december"

    #Method which accesses website and downloads all the celebrities born on the provided date 
    def getData(self):

        #Translates month from str to int 
        self.getMonthStr()

        #Accesses website and collects all the data and organizez it 
        URL = 'https://www.famousbirthdays.com/dateborn/' + self.month + self.day + "-" + self.year + '.html'
        page = requests.get(URL)
        soup = BeautifulSoup(page.content, 'html.parser')

        #Finds all the celebrities and their titles that we are looking for and adds them to corresponding arrays 
        for a in soup.findAll(class_='info'):
            name=a.find(class_='name')
            title=a.find(class_='title')
            self.names.append(name.string)
            self.titles.append(title.string)
    
    #Returns the array of names of people born on specific date
    def getNames(self):
        return self.names

    #Returns the array of titles of people born on specific date
    def getTitles(self):
        return self.titles

    #Sets a new day of birth and updates the data 
    def setDay(self, day):
        self.day = str(day)
        self.getData()

    #Sets a new month of birth and updates the data 
    def setmonth(self, month):
        self.monthI = month
        self.getData()

    #Sets a new year of birth and updates the data 
    def setyear(self, year):
        self.year = str(year)
        self.getData()


#Example of use
test = famousBday(23,5,2002)
test.getData()
print(test.getNames())
print(test.getTitles())
print(test.getNames()[1] + test.getTitles()[1])

#Output
#['\nDarren Liang, 20\n', '\nCurlyHeadJJ, 20\n', '\npastabianxo, 20\n', '\nYunq Dooda, 20\n', '\nJames Payton, 20\n', '\nKatie Taylor, 20\n', '\nSunny May Allison, 20\n', '\nEthan Vine, 20\n', '\nAlexa Louise Williams, 20\n', '\nAlex Wagahoff, 20\n\n', '\nFYEGUY Q, 20\n', '\nIlya Isakovich, 20\n', '\nMakeupbymarahh, 20\n', '\nRose Shen, 20\n', '\nHeather Gerleve, 20\n', '\ngeeraysury, 20\n', '\nNichapalak Thongkham, 20\n']
#['TikTok Star', 'TikTok Star', 'TikTok Star', 'YouTube Star', 'TikTok Star', 'TikTok Star', 'Movie Actress', 'TikTok Star', 'TikTok Star', 'TikTok Star', 'Twitch Star', 'TikTok Star', 'YouTube Star', 'TikTok Star', 'TikTok Star', 'TikTok Star', 'TV Actress']

#CurlyHeadJJ, 20
#TikTok Star


