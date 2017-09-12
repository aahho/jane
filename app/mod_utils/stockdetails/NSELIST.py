import urllib
import os.path
f= urllib.urlopen("https://gist.githubusercontent.com/chiragchamoli/58019cdc78b4fa2497cb/raw/6743d0b86c79e195606c5e447267d5f50992976f/nse.csv")
content= f.read()
count=2
allcodes=[]
for i in content.split('\n'):
    #print i +"<--------------------->"
    for j in i.split(','):
        count+=1
        if count%2==0:
            allcodes.append(j)
#print allcodes.index("NAVINFLUOR") #1224
#print allcodes
#savearea= 'C:/Python27/NSE/'
for i in range(1224,len(allcodes)):
    company= urllib.urlopen("https://www.quandl.com/api/v3/datasets/NSE/"+allcodes[i]+".json?api_key=xMH7BiBu6s24LHCizug3")
    data= company.read()
    filename= open(allcodes[i]+".json","w")
    filename.write(data)
    print allcodes[i]+"success"
