
(function(window, Vue, moment, _){


window.getTweetList = function(){
    return [
        {"timestamp": "Tue Aug 17 10:12:54 +0000 2010", "tweet": "@ArvindKejriwal #Naidu ko teri jarurat bhi nahi hai, Gandhi Baba aapke jeb ko bhar de", "handle": "@prashantgarg628"},
        {"timestamp": "Wed Jul 26 16:39:06 +0000 2017", "tweet": "\u0c35\u0c02\u0c26\u0c28\u0c3e\u0c32\u0c41 \u0c35\u0c02\u0c26\u0c28\u0c3e\u0c32\u0c41 \u0c35\u0c47\u0c32 \u0c35\u0c02\u0c26\u0c28\u0c3e\u0c32\u0c41\n\u0c2e\u0c47\u0c32\u0c41 \u0c1a\u0c47\u0c38\u0c3f\u0c28 \u0c2e\u0c02\u0c1a\u0c3f\u0c2e\u0c28\u0c3f\u0c37\u0c3f\u0c15\u0c3f  \u0c1a\u0c3e\u0c32\u0c35\u0c47 \u0c35\u0c47\u0c32 \u0c35\u0c02\u0c26\u0c28\u0c3e\u0c32\u0c41\n@ncbn @naralokesh @JaiTDP #JaiNTR \n #Jayahoo\u2026 https://t.co/I1R7pHUHfB", "handle": "@iam_indian_girl"},
        {"timestamp": "Wed Jul 26 16:39:06 +0000 2017", "tweet": "RT @iam_indian_girl: @ncbn AP CM #Nara #Chandrababu #Naidu https://t.co/uMKyaP6nyw via @YouTube", "handle": "@iam_indian_girl"},
        {"timestamp": "Wed Jul 26 16:39:06 +0000 2017", "tweet": "@ncbn AP CM #Nara #Chandrababu #Naidu https://t.co/uMKyaP6nyw via @YouTube", "handle": "@iam_indian_girl"},
        {"timestamp": "Sun Jul 14 09:44:15 +0000 2013", "tweet": "@ncbn @APIIC_AP @GoI_MeitY Namaskaram #Naidu ji. Why #Andhra #Chhatisgarh #Jharkhand r #Industry &amp; #Agriculture pro\u2026 https://t.co/viDv1kMXgm", "handle": "@MUKTESWARJI"},
        {"timestamp": "Tue Sep 13 05:45:30 +0000 2011", "tweet": "#APCM #Chandrababu #Naidu #secret #meeting with #PawanKalyan | #StudioN :https://t.co/v4aOaD1EFe https://t.co/5Ftmb24umB", "handle": "@StudioNonline"},
        {"timestamp": "Tue Sep 13 05:45:30 +0000 2011", "tweet": "#Janasena #Chief #PawanKalyan #Meeting With #CM #Chandrababu #Naidu in #Velagapudi | #StudioN... https://t.co/TdhgAm2r7t", "handle": "@StudioNonline"},
        {"timestamp": "Thu Dec 24 08:18:19 +0000 2015", "tweet": "\u0c28\u0c02\u0c26\u0c4d\u0c2f\u0c3e\u0c32\u200c\u0c32\u0c4b \u0c1f\u0c40\u0c21\u0c40\u0c2a\u0c40 \u0c2c\u0c46\u0c26\u0c3f\u0c30\u0c3f\u0c02\u0c2a\u0c41 \u0c30\u0c3e\u0c1c\u200c\u0c15\u0c40\u0c2f\u0c3e\u0c32\u0c41 #NCBN #TDP #Nandyal", "handle": "@tummaluru89"},
        {"timestamp": "Sun Dec 26 17:54:11 +0000 2010", "tweet": "RT @YSRCParty: \u0c28\u0c02\u0c26\u0c4d\u0c2f\u0c3e\u0c32\u200c\u0c32\u0c4b \u0c1f\u0c40\u0c21\u0c40\u0c2a\u0c40 \u0c28\u0c40\u0c1a\u200c\u0c30\u0c3e\u0c1c\u200c\u0c15\u0c40\u0c2f\u0c3e\u0c32\u0c41\n#NCBN #TDP #Nandyal https://t.co/AvueNDO8aD", "handle": "@varun2c"},
        {"timestamp": "Mon Mar 02 15:48:10 +0000 2015", "tweet": "RT @varun2c: It will be a challenge to #NCBN's integrity on poll promises to people of Nandyal if @YSRCParty's #SilpaMohanReddy wins #Nandy\u2026", "handle": "@avatar_vr"},
        {"timestamp": "Mon Mar 02 15:48:10 +0000 2015", "tweet": "RT @varun2c: #NandyalByElections: Ppl of Nandyal sud realise that #NCBN has not jst stolen @YSRCParty #BhumaNagiReddy. But he has stolen hi\u2026", "handle": "@avatar_vr"},
        {"timestamp": "Fri Oct 14 16:33:35 +0000 2011", "tweet": "RT @YSRCParty: \u0c28\u0c02\u0c26\u0c4d\u0c2f\u0c3e\u0c32\u200c\u0c32\u0c4b \u0c1f\u0c40\u0c21\u0c40\u0c2a\u0c40 \u0c28\u0c40\u0c1a\u200c\u0c30\u0c3e\u0c1c\u200c\u0c15\u0c40\u0c2f\u0c3e\u0c32\u0c41\n#NCBN #TDP #Nandyal https://t.co/AvueNDO8aD", "handle": "@reddyprem"},
        {"timestamp": "Tue Feb 22 18:32:04 +0000 2011", "tweet": "\u0c28\u0c02\u0c26\u0c4d\u0c2f\u0c3e\u0c32\u200c\u0c32\u0c4b \u0c1f\u0c40\u0c21\u0c40\u0c2a\u0c40 \u0c28\u0c40\u0c1a\u200c\u0c30\u0c3e\u0c1c\u200c\u0c15\u0c40\u0c2f\u0c3e\u0c32\u0c41\n#NCBN #TDP #Nandyal https://t.co/AvueNDO8aD", "handle": "@YSRCParty"},
        {"timestamp": "Tue May 13 18:22:57 +0000 2014", "tweet": "Travel Tips: Carry-On Essentials - https://t.co/46cbhXUBJu #NCBloggers #NCBN", "handle": "@NCBlogNet"},
        {"timestamp": "Mon May 15 18:48:14 +0000 2017", "tweet": "Help for Victims of Revenge Porn https://t.co/hjJZ6TquGE\n#ncbn #ncbloggersnetwork #law #Lawyers #WomensMonth https://t.co/fKNCP8gWwB", "handle": "@proroloteam"},
        {"timestamp": "Fri Jul 31 02:33:16 +0000 2009", "tweet": "RT @politicalcount1: Where Ever Hero Goes .. Babu Dog Follows \n\n#PavanKalyan #JenaSena #PK #PowerStar #PackageStar #NCBN #TDP #BabuDog #YSJ\u2026", "handle": "@sivareddykundur"},
        {"timestamp": "Tue May 13 18:22:57 +0000 2014", "tweet": "What to pack for a trip to Universal Florida - https://t.co/WUWTeXNDjG #NCBloggers #NCBN", "handle": "@NCBlogNet"},
        {"timestamp": "Fri Jul 31 02:33:16 +0000 2009", "tweet": "RT @politicalcount1: Chitti Vs Package Chitti\n#PavanKalyan #JenaSena #PK #PowerStar #PackageStar #NCBN #TDP #BabuDog #Chitti #PackageKalyan\u2026", "handle": "@sivareddykundur"},
        {"timestamp": "Fri Dec 11 13:26:07 +0000 2009", "tweet": "RT @varun2c: It will be a challenge to #NCBN's integrity on poll promises to people of Nandyal if @YSRCParty's #SilpaMohanReddy wins #Nandy\u2026", "handle": "@yadunandana"},
        {"timestamp": "Fri Jun 23 14:00:11 +0000 2017", "tweet": "Chitti Vs Package Chitti\n#PavanKalyan #JenaSena #PK #PowerStar #PackageStar #NCBN #TDP #BabuDog #Chitti\u2026 https://t.co/CK7WWBLoY2", "handle": "@politicalcount1"},
        {"timestamp": "Thu Jun 01 23:12:48 +0000 2017", "tweet": "RT @varun2c: #NandyalByElections: #NCBN has stolen @YSRCParty MLA's for his benefit and #SilpaMohanReddy garu joined @YSRCParty for people'\u2026", "handle": "@WeforJagan_MSR"},
        {"timestamp": "Thu Jun 01 23:12:48 +0000 2017", "tweet": "RT @varun2c: #NandyalByElections: Ppl of Nandyal sud realise that #NCBN has not jst stolen @YSRCParty #BhumaNagiReddy. But he has stolen hi\u2026", "handle": "@WeforJagan_MSR"},
		{"timestamp": "Sun Sep 29 07:57:13 +0000 2013", "tweet": "So after 3 years is there any clarity on model of Amaravathi? Will it be a mixture of all? Or will it be a new mode\u2026 https://t.co/uZmzox4g2B", "handle": "@bommu_lr"},
        {"timestamp": "Wed Dec 17 10:17:45 +0000 2008", "tweet": "\u0c2a\u0c35\u0c28\u0c4d \u0c15\u0c33\u0c4d\u0c2f\u0c3e\u0c23\u0c4d! \u0c05\u0c26\u0c3f \u0c17\u0c41\u0c30\u0c4d\u0c24\u0c41\u0c02\u0c1a\u0c41\u0c15\u0c4b, \u0c28\u0c47\u0c28\u0c41 \u0c05\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c47 \u0c1a\u0c46\u0c2a\u0c4d\u0c2a\u0c3e: \u0c06\u0c30\u0c4d \u0c15\u0c43\u0c37\u0c4d\u0c23\u0c2f\u0c4d\u0c2f \u0c15\u0c4c\u0c02\u0c1f\u0c30\u0c4d https://t.co/Suy5jBCt1S #pawankalyan #rkrishnaiah #chandrababu", "handle": "@oneindiatelugu"},
        {"timestamp": "Fri Jun 10 13:50:37 +0000 2011", "tweet": "This Is Pawan Kalyan\u2019s Biggest Help for #Chandrababu \n\nhttps://t.co/7WMpkRXjxV #PawanKalyan #TDP https://t.co/GofBEuRpvB", "handle": "@Mirchi9"},
        {"timestamp": "Wed Jun 07 09:26:22 +0000 2017", "tweet": "\u0c39\u0c3e\u0c30\u0c4d\u0c35\u0c30\u0c4d\u0c21\u0c4d \u0c2a\u0c4d\u0c30\u0c4a\u0c2b\u0c46\u0c38\u0c30\u0c4d\u0c32\u0c24\u0c4b \u0c1a\u0c02\u0c26\u0c4d\u0c30\u0c2c\u0c3e\u0c2c\u0c41 \u0c2a\u0c35\u0c28\u0c4d \u0c15\u0c32\u0c4d\u0c2f\u0c3e\u0c23\u0c4d \u0c2d\u0c47\u0c1f\u0c40 #AP #CM #ChandraBabu an... https://t.co/PrYFRzcpS6 via @YouTube", "handle": "@99reelsmedia"},
        {"timestamp": "Fri Aug 27 03:32:41 +0000 2010", "tweet": "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 \u0c30\u0c3e\u0c37\u0c4d\u0c1f\u0c4d\u0c30\u0c3e\u0c32 \u0c2e\u0c41\u0c16\u0c4d\u0c2f\u0c2e\u0c02\u0c24\u0c4d\u0c30\u0c41\u0c32\u0c15\u0c41 \u0c15\u0c47\u0c02\u0c26\u0c4d\u0c30\u0c02 \u0c37\u0c3e\u0c15\u0c4d \u0c07\u0c15 2024 \u0c24\u0c30\u0c41\u0c35\u0c3e\u0c24\u0c47...!\n#kcr #chandrababu #tsr #tdp \n https://t.co/zGjIR1yjSS", "handle": "@hmtvlive"},
        {"timestamp": "Wed Jul 26 16:39:06 +0000 2017", "tweet": "\u0c35\u0c02\u0c26\u0c28\u0c3e\u0c32\u0c41 \u0c35\u0c02\u0c26\u0c28\u0c3e\u0c32\u0c41 \u0c35\u0c47\u0c32 \u0c35\u0c02\u0c26\u0c28\u0c3e\u0c32\u0c41\n\u0c2e\u0c47\u0c32\u0c41 \u0c1a\u0c47\u0c38\u0c3f\u0c28 \u0c2e\u0c02\u0c1a\u0c3f\u0c2e\u0c28\u0c3f\u0c37\u0c3f\u0c15\u0c3f  \u0c1a\u0c3e\u0c32\u0c35\u0c47 \u0c35\u0c47\u0c32 \u0c35\u0c02\u0c26\u0c28\u0c3e\u0c32\u0c41\n@ncbn @naralokesh @JaiTDP #JaiNTR \n #Jayahoo\u2026 https://t.co/I1R7pHUHfB", "handle": "@iam_indian_girl"},
        {"timestamp": "Wed May 19 06:12:18 +0000 2010", "tweet": "#Watch LIVE\n\n#Chandrababu @ e-Pragati event in #Vijayawada\n\n#TV9LIVE\n\nLink: https://t.co/2zTcjnnMjv https://t.co/jGjSLwpShD", "handle": "@TV9Telugu"},
        {"timestamp": "Wed Jul 26 16:39:06 +0000 2017", "tweet": "RT @iam_indian_girl: @ncbn AP CM #Nara #Chandrababu #Naidu https://t.co/uMKyaP6nyw via @YouTube", "handle": "@iam_indian_girl"},
        {"timestamp": "Wed Jul 26 16:39:06 +0000 2017", "tweet": "@ncbn AP CM #Nara #Chandrababu #Naidu https://t.co/uMKyaP6nyw via @YouTube", "handle": "@iam_indian_girl"},
        {"timestamp": "Mon Aug 22 07:53:15 +0000 2016", "tweet": "Match Fixing Between #Pawan Kalyan and #Chandrababu\n\n#APPolitics #APNews\n#yoyotvchannel https://t.co/q6WVBiPadq", "handle": "@YOYOTVChannel"},
        {"timestamp": "Tue Sep 13 05:45:30 +0000 2011", "tweet": "#PawanKalyan and #APCM #Chandrababu #Support for #Uddanam #Kidney #Chronic #Disease | #StudioN... https://t.co/CixFirQi0r", "handle": "@StudioNonline"},
        {"timestamp": "Sun Jul 10 08:47:54 +0000 2016", "tweet": "RT @TV9Telugu: #Chandrababu @ #ePragati event in Vijayawada #LIVE\n\nLink : https://t.co/2zTcjnnMjv\n\n#TV9Live https://t.co/OiUdCBmDnY", "handle": "@Yaseengouse18"},
        {"timestamp": "Wed May 19 06:12:18 +0000 2010", "tweet": "#Chandrababu @ #ePragati event in Vijayawada #LIVE\n\nLink : https://t.co/2zTcjnnMjv\n\n#TV9Live https://t.co/OiUdCBmDnY", "handle": "@TV9Telugu"},
        {"timestamp": "Wed Dec 14 06:05:35 +0000 2016", "tweet": "\u0c2a\u0c35\u0c28\u0c4d \u0c15\u0c32\u0c4d\u0c2f\u0c3e\u0c23\u0c4d \u0c35\u0c26\u0c4d\u0c26 \u0c24\u0c28 \u0c2c\u0c3e\u0c27\u0c32\u0c41 \u0c1a\u0c46\u0c2a\u0c4d\u0c2a\u0c41\u0c15\u0c41\u0c28\u0c4d\u0c28\u0c1a\u0c02\u0c26\u0c4d\u0c30\u0c2c\u0c3e\u0c2c\u0c41\n#CHANDRABABU  #AMARAVATHI #POLAVARAM #YSRCONGRESS @PawanKalyan\u2026 https://t.co/pDKchlZbed", "handle": "@tfcmediasn"},
        {"timestamp": "Thu Oct 22 10:38:19 +0000 2009", "tweet": "\u0c30\u0c3e\u0c1c\u0c27\u0c3e\u0c28\u0c3f \u0c28\u0c3f\u0c30\u0c4d\u0c2e\u0c3e\u0c23\u0c02 \u0c28\u0c47\u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c21\u0c3f\u0c28\u0c47 \u0c09\u0c02\u0c21\u0c47\u0c02\u0c26\u0c41\u0c15\u0c3e? \nhttps://t.co/U1dBEzVCZx\n#PawanKalyan #Chandrababu #meets #Amaravati https://t.co/wrMylYwzj4", "handle": "@WebduniaTelugu"},
        {"timestamp": "Wed Jan 13 08:45:02 +0000 2010", "tweet": "\u0c1c\u0c17\u0c28\u0c4d \u0c24\u0c40\u0c30\u0c41 \u0c2c\u0c3e\u0c27\u0c15\u0c32\u0c3f\u0c17\u0c3f\u0c38\u0c4d\u0c24\u0c4b\u0c02\u0c26\u0c3f \u0c2a\u0c35\u0c28\u0c4d... \u0c1a\u0c02\u0c26\u0c4d\u0c30\u0c2c\u0c3e\u0c2c\u0c41 \u0c35\u0c47\u0c26\u0c28 \n#PawanKalyan #Chandrababu #meets #Amaravati https://t.co/UvEJfrKcxp", "handle": "@ChennaiMP"},
        {"timestamp": "Sat May 20 09:02:27 +0000 2017", "tweet": "Don't judge the people on the basis of their past or their mistakes they have committed judge them when you know them completely #lokesh", "handle": "@sanskaari_munda"},
        {"timestamp": "Thu Dec 22 10:30:30 +0000 2016", "tweet": "\ud83d\ude33\u0915\u093e\u0936! \u0924\u0941\u092e\ud83d\udc78 \u0938\u092e\u091d \ud83d\ude2e\u0938\u0915\u094b \u0915\u092d\u0940 \u0939\u093e\u0932\u093e\u0924 \u092e\u0947\u0930\u0947,\ud83d\udc95\n\n\u090f\u0915 \u0916\u093e\u0932\u0940\u092a\u0928 \ud83d\udc97\u0939\u0948 \u091c\u094b \u0924\u0947\u0930\u0947 \u092c\u093f\u0928\u093e \ud83d\ude2e\u092d\u0930\u0924\u093e \u0939\u0940 \ud83d\udc91\u0928\u0939\u0940\u0902 !!\n#lokesh\n@AnamicaSmitRaj", "handle": "@LokeshG09559920"},
        {"timestamp": "Wed Jan 28 09:23:43 +0000 2015", "tweet": "RT @chitraloka: Actor #Lokesh and #Vishnuvardhan during #BhootayyanaMaga Ayyu Function\n#Chitraloka @srujanlokesh @DrVishnuDadaFc https://t.\u2026", "handle": "@Stuthitweeting"},
        {"timestamp": "Thu Jul 10 10:44:57 +0000 2014", "tweet": "\u0b85\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4 \u0bae\u0ba3\u0bbf\u0bb0\u0ba4\u0bcd\u0ba9\u0bae\u0bbe \u0b87\u0bb0\u0bc1\u0b95\u0bcd\u0b95 \u0ba8\u0bbf\u0ba9\u0bc8\u0b95\u0bcd\u0b95\u0bb1\u0bc7\u0ba9\u0bcd | \u0bae\u0bbe\u0ba8\u0b95\u0bb0\u0bae\u0bcd 20\u0ba8\u0bbf\u0bae\u0bbf\u0b9f \u0b95\u0ba4\u0bc8 \u0ba4\u0bbe\u0ba9\u0bcd -Lokesh Kanagaraj Open Talk |Part1\nhttps://t.co/bVn6sfCrJM\n#Lokesh #Interview", "handle": "@Nettv4uTamil"},
        {"timestamp": "Sat May 20 09:02:27 +0000 2017", "tweet": "@Its_Aish17 But keep one thing in mind don't loose the person who cares about u who is always wid u in every condit\u2026 https://t.co/H0sOyVg6oO", "handle": "@sanskaari_munda"},
        {"timestamp": "Sat May 20 09:02:27 +0000 2017", "tweet": "@Its_Aish17 I had some mixed memories and from them i wanna keep good memories and good people  and delete bad memo\u2026 https://t.co/TsxrhrUqIZ", "handle": "@sanskaari_munda"},
        {"timestamp": "Fri Jun 23 14:00:11 +0000 2017", "tweet": "\u0c2a\u0c48\u0c38\u0c3e \u0c35\u0c38\u0c42\u0c32\u0c4d Vs \u0c15\u0c3e\u0c32\u0c4d \u0c2e\u0c28\u0c40 \u0c35\u0c38\u0c42\u0c32\u0c4d....\n\n#PoliticalCounter #Ncbn #BalaKrishna #paaisa #TDP #lokesh #BalaKrishna101 https://t.co/VySS1dgDCX", "handle": "@politicalcount1"},
        {"timestamp": "Fri Jun 25 10:14:34 +0000 2010", "tweet": "Another pic of #peacock #feather #tattoo #design... \n#tattoos #by #Lokesh #Bhatia \n#Tattoo\u2026 https://t.co/EVFAh9XH7w", "handle": "@luckyguitarist"},
        {"timestamp": "Fri Jul 14 15:43:13 +0000 2017", "tweet": "#Lokesh attends #RamojiRao grand daughter wedding \n\nhttps://t.co/PPQSV32Qvq", "handle": "@LokeshFan"},
        {"timestamp": "Fri Jul 14 15:43:13 +0000 2017", "tweet": "Nara Lokesh Reacts on Drugs Issue \n\nhttps://t.co/m29Gh6NtKy \n\n#lokesh #naralokesh", "handle": "@LokeshFan"},
        {"timestamp": "Fri Jul 14 15:43:13 +0000 2017", "tweet": ".@naralokesh quietly proving every one wrong with is \"talk less work more\" attitude - way to go #lokesh \ud83d\ude4f\u2026 https://t.co/bBnDJmo9LK", "handle": "@LokeshFan"},
        {"timestamp": "Thu Dec 08 19:05:09 +0000 2016", "tweet": "RT @BiggBossCritic1: CASH Winners : #Manveer / #Manu\nHEART Winners : #Manveer / #BaniJ / #Gaurav / #Lokesh / #Rahul\nCeleb. Winner : #BaniJ\u2026", "handle": "@Aznin5"},
        {"timestamp": "Sat Mar 20 08:39:15 +0000 2010", "tweet": "Today in Ficci program met with AP MINISTER #LOKESH https://t.co/vacrUwgzrq", "handle": "@reporterNaveen"},
        {"timestamp": "Fri Jul 14 15:43:13 +0000 2017", "tweet": "Those who commented on #lokesh will byte their tongues \ud83d\udc4d https://t.co/Qp9hYGtPTu", "handle": "@LokeshFan"},
        {"timestamp": "Sat Sep 15 17:27:39 +0000 2012", "tweet": "RT @politicalcount1: \u0c13\u0c1f\u0c41\u0c15\u0c41 \u0c28\u0c4b\u0c1f\u0c41 \u0c15\u0c47\u0c38\u0c41 \u0c07\u0c02\u0c15\u0c3e \u0c2e\u0c41\u0c17\u0c3f\u0c38\u0c3f\u0c2a\u0c4b\u0c32\u0c47\u0c26\u0c41 - #KCR \n#VoteForNote #NoteforVote #NCBN #TDP #TRS #420CM #Lokesh #PoliticalCounter #\u2026", "handle": "@KodaliYuvaSena"},
        {"timestamp": "Tue Jan 31 20:47:17 +0000 2017", "tweet": "RT @naralokesh: Here's why Pi #Amaravati is the first Software Defined Strategic Data Center (SDDC) in the world: https://t.co/qxI6Mopn3s", "handle": "@TDPSoldier"},
        {"timestamp": "Tue Jan 31 20:47:17 +0000 2017", "tweet": "RT @aknarne: #Proudmoment\ud83d\udc4c\ud83d\udc4c\ud83d\udc4d\ud83d\udc4d\ud83d\udc4d\n\nClasses beginning today...\n\n#VITAP Campus #Amaravati\n\nOne more gem in #SunriseAP's Crown\n\n\u0c38\u0c3e\u0c39\u0c4b \u0c1a\u0c02\u0c26\u0c4d\u0c30\u0c28\u0c4d\u0c28\ud83d\ude4f\ud83d\ude4f \u0c1c\u2026", "handle": "@TDPSoldier"},
        {"timestamp": "Mon Jan 11 04:00:05 +0000 2010", "tweet": "RT @aknarne: #Proudmoment\ud83d\udc4c\ud83d\udc4c\ud83d\udc4d\ud83d\udc4d\ud83d\udc4d\n\nClasses beginning today...\n\n#VITAP Campus #Amaravati\n\nOne more gem in #SunriseAP's Crown\n\n\u0c38\u0c3e\u0c39\u0c4b \u0c1a\u0c02\u0c26\u0c4d\u0c30\u0c28\u0c4d\u0c28\ud83d\ude4f\ud83d\ude4f \u0c1c\u2026", "handle": "@sanjayteja"},
        {"timestamp": "Fri Apr 22 03:19:48 +0000 2016", "tweet": "RT @naralokesh: Here's why Pi #Amaravati is the first Software Defined Strategic Data Center (SDDC) in the world: https://t.co/qxI6Mopn3s", "handle": "@Madalagopi"},
        {"timestamp": "Thu Nov 17 18:06:13 +0000 2011", "tweet": "RT @naralokesh: Here's why Pi #Amaravati is the first Software Defined Strategic Data Center (SDDC) in the world: https://t.co/qxI6Mopn3s", "handle": "@rajapss"},
        {"timestamp": "Fri Mar 01 01:28:37 +0000 2013", "tweet": "RT @naralokesh: Here's why Pi #Amaravati is the first Software Defined Strategic Data Center (SDDC) in the world: https://t.co/qxI6Mopn3s", "handle": "@mytwit2808"},
        {"timestamp": "Sun Oct 19 12:10:24 +0000 2014", "tweet": "Silver Jubilee for the phenoix bird.25 years of Ajithism \ud83d\ude0d\ud83d\ude0d from #amaravati to #Vivegam an incredible journey \ud83d\ude4f\ud83d\ude4f\u2026 https://t.co/tcoXjtu6un", "handle": "@karthi4070"},
        {"timestamp": "Tue Apr 06 00:00:47 +0000 2010", "tweet": "@ncbn @naralokesh #tdp Wake up...https://t.co/6I2mIt2SBa #Prakasam #Jamoil #SaveFarmer #amaravati #andhrapradesh #ysrcp #janasena", "handle": "@imSPara"},
        {"timestamp": "Fri Jun 05 22:04:34 +0000 2015", "tweet": "RT @aknarne: #Proudmoment\ud83d\udc4c\ud83d\udc4c\ud83d\udc4d\ud83d\udc4d\ud83d\udc4d\n\nClasses beginning today...\n\n#VITAP Campus #Amaravati\n\nOne more gem in #SunriseAP's Crown\n\n\u0c38\u0c3e\u0c39\u0c4b \u0c1a\u0c02\u0c26\u0c4d\u0c30\u0c28\u0c4d\u0c28\ud83d\ude4f\ud83d\ude4f \u0c1c\u2026", "handle": "@amaravati6"},
        {"timestamp": "Thu Dec 22 12:48:28 +0000 2011", "tweet": "RT @naralokesh: Here's why Pi #Amaravati is the first Software Defined Strategic Data Center (SDDC) in the world: https://t.co/qxI6Mopn3s", "handle": "@raghuram313"},
        {"timestamp": "Sun Sep 13 06:11:56 +0000 2015", "tweet": "RT @naralokesh: Here's why Pi #Amaravati is the first Software Defined Strategic Data Center (SDDC) in the world: https://t.co/qxI6Mopn3s", "handle": "@JastySravan4757"},
        {"timestamp": "Mon Feb 09 11:10:38 +0000 2009", "tweet": "RT @aknarne: #Proudmoment\ud83d\udc4c\ud83d\udc4c\ud83d\udc4d\ud83d\udc4d\ud83d\udc4d\n\nClasses beginning today...\n\n#VITAP Campus #Amaravati\n\nOne more gem in #SunriseAP's Crown\n\n\u0c38\u0c3e\u0c39\u0c4b \u0c1a\u0c02\u0c26\u0c4d\u0c30\u0c28\u0c4d\u0c28\ud83d\ude4f\ud83d\ude4f \u0c1c\u2026", "handle": "@tipirneni"},
        {"timestamp": "Tue May 20 15:20:22 +0000 2014", "tweet": "RT @naralokesh: Here's why Pi #Amaravati is the first Software Defined Strategic Data Center (SDDC) in the world: https://t.co/qxI6Mopn3s", "handle": "@nandyalamanoj80"},
        {"timestamp": "Sun Jul 28 17:12:40 +0000 2013", "tweet": "RT @naralokesh: Here's why Pi #Amaravati is the first Software Defined Strategic Data Center (SDDC) in the world: https://t.co/qxI6Mopn3s", "handle": "@VMuraliKRaju"},
        {"timestamp": "Tue Oct 14 08:15:08 +0000 2014", "tweet": "RT @naralokesh: Here's why Pi #Amaravati is the first Software Defined Strategic Data Center (SDDC) in the world: https://t.co/qxI6Mopn3s", "handle": "@edmoffo"},
        {
            "tweet": "RT @myvotetoday: Did you know that the new #AndhraPradesh Capital Region being built at #Amravati by @ncbn Govt will be one of the best cit\u2026",
            handle: "@SouzaPathrose",
            "timestamp": "Thu Aug 18 16:42:19 +0000 2016"
        },
        {
            "tweet": "Retweeted NTV Breaking News (@NTVJustIn):\n\n\u0c15\u0c3f\u0c30\u0c4d\u0c32\u0c02\u0c2a\u0c42\u0c21\u0c3f\u0c32\u0c4b \u0c35\u0c47\u0c26\u0c3f\u0c15\u0c17\u0c3e \u0c2e\u0c30\u0c4b\u0c38\u0c3e\u0c30\u0c3f \u0c35\u0c47\u0c21\u0c46\u0c15\u0c4d\u0c15\u0c3f\u0c28 \u0c15\u0c3e\u0c2a\u0c41 \u0c09\u0c26\u0c4d\u0c2f\u0c2e\u0c02\n#andhrapradesh #mudragadapadmanabham",
            handle: "@Butchikotaiah",
            "timestamp": "Wed Aug 07 07:34:08 +0000 2013"
        },
        {
            "tweet": "RT @NTVJustIn: \u0c15\u0c3f\u0c30\u0c4d\u0c32\u0c02\u0c2a\u0c42\u0c21\u0c3f\u0c32\u0c4b \u0c35\u0c47\u0c26\u0c3f\u0c15\u0c17\u0c3e \u0c2e\u0c30\u0c4b\u0c38\u0c3e\u0c30\u0c3f \u0c35\u0c47\u0c21\u0c46\u0c15\u0c4d\u0c15\u0c3f\u0c28 \u0c15\u0c3e\u0c2a\u0c41 \u0c09\u0c26\u0c4d\u0c2f\u0c2e\u0c02\n#andhrapradesh #mudragadapadmanabham",
            handle: "@Butchikotaiah",
            "timestamp": "Wed Aug 07 07:34:08 +0000 2013"
        },
        {
            "tweet": "RT @NTVJustIn: \u0c2e\u0c41\u0c26\u0c4d\u0c30\u0c17\u0c21 \u0c2f\u0c3e\u0c24\u0c4d\u0c30\u0c15\u0c41 \u0c2a\u0c4b\u0c32\u0c40\u0c38\u0c41\u0c32 \u0c05\u0c28\u0c41\u0c2e\u0c24\u0c3f \u0c28\u0c3f\u0c30\u0c3e\u0c15\u0c30\u0c23, \u0c15\u0c3f\u0c30\u0c4d\u0c32\u0c02\u0c2a\u0c42\u0c21\u0c3f\u0c32\u0c4b 2\u0c35\u0c47\u0c32 \u0c2e\u0c02\u0c26\u0c3f \u0c2a\u0c4b\u0c32\u0c40\u0c38\u0c41\u0c32\u0c24\u0c4b \u0c28\u0c3f\u0c18\u0c3e\n#andhrapradesh #mudragadapadmanabham",
            handle: "@Butchikotaiah",
            "timestamp": "Wed Aug 07 07:34:08 +0000 2013"
        },
        {
            "tweet": "RT @myvotetoday: Did you know that the new #AndhraPradesh Capital Region being built at #Amravati by @ncbn Govt will be one of the best cit\u2026",
            handle: "@myvotetoday",
            "timestamp": "Fri Sep 25 15:58:55 +0000 2015"
        },
        {
            "tweet": "RT @UrsVishnu: Last rights to a tree which served this earth for years... #andhrapradesh #godavari https://t.co/qakRPI7NKs",
            handle: "@lazy_aalsi",
            "timestamp": "Sun Jul 16 12:53:03 +0000 2017"
        },
        {
            "tweet": "RT @UrsVishnu: Last rights to a tree which served this earth for years... #andhrapradesh #godavari https://t.co/qakRPI7NKs",
            handle: "@tishtriya",
            "timestamp": "Tue Jan 13 13:04:04 +0000 2015"
        },
        {
            "tweet": "RT @NTVJustIn: \u0c2e\u0c41\u0c26\u0c4d\u0c30\u0c17\u0c21 \u0c2f\u0c3e\u0c24\u0c4d\u0c30\u0c15\u0c41 \u0c2a\u0c4b\u0c32\u0c40\u0c38\u0c41\u0c32 \u0c05\u0c28\u0c41\u0c2e\u0c24\u0c3f \u0c28\u0c3f\u0c30\u0c3e\u0c15\u0c30\u0c23, \u0c15\u0c3f\u0c30\u0c4d\u0c32\u0c02\u0c2a\u0c42\u0c21\u0c3f\u0c32\u0c4b 2\u0c35\u0c47\u0c32 \u0c2e\u0c02\u0c26\u0c3f \u0c2a\u0c4b\u0c32\u0c40\u0c38\u0c41\u0c32\u0c24\u0c4b \u0c28\u0c3f\u0c18\u0c3e\n#andhrapradesh #mudragadapadmanabham",
            handle: "@NtvteluguHD",
            "timestamp": "Mon Aug 25 09:15:55 +0000 2014"
        },
        {
            "tweet": "RT @NTVJustIn: \u0c15\u0c3f\u0c30\u0c4d\u0c32\u0c02\u0c2a\u0c42\u0c21\u0c3f\u0c32\u0c4b \u0c35\u0c47\u0c26\u0c3f\u0c15\u0c17\u0c3e \u0c2e\u0c30\u0c4b\u0c38\u0c3e\u0c30\u0c3f \u0c35\u0c47\u0c21\u0c46\u0c15\u0c4d\u0c15\u0c3f\u0c28 \u0c15\u0c3e\u0c2a\u0c41 \u0c09\u0c26\u0c4d\u0c2f\u0c2e\u0c02\n#andhrapradesh #mudragadapadmanabham",
            handle: "@NtvteluguHD",
            "timestamp": "Mon Aug 25 09:15:55 +0000 2014"
        },
        {
            "tweet": "RT @NTVJustIn: \u0c2e\u0c41\u0c26\u0c4d\u0c30\u0c17\u0c21 \u0c2f\u0c3e\u0c24\u0c4d\u0c30\u0c15\u0c41 \u0c2a\u0c4b\u0c32\u0c40\u0c38\u0c41\u0c32 \u0c05\u0c28\u0c41\u0c2e\u0c24\u0c3f \u0c28\u0c3f\u0c30\u0c3e\u0c15\u0c30\u0c23, \u0c15\u0c3f\u0c30\u0c4d\u0c32\u0c02\u0c2a\u0c42\u0c21\u0c3f\u0c32\u0c4b 2\u0c35\u0c47\u0c32 \u0c2e\u0c02\u0c26\u0c3f \u0c2a\u0c4b\u0c32\u0c40\u0c38\u0c41\u0c32\u0c24\u0c4b \u0c28\u0c3f\u0c18\u0c3e\n#andhrapradesh #mudragadapadmanabham",
            handle: "@aravind_nakka",
            "timestamp": "Sat Aug 25 14:54:00 +0000 2012"
        },
        {
            "tweet": "RT @UrsVishnu: Last rights to a tree which served this earth for years... #andhrapradesh #godavari https://t.co/qakRPI7NKs",
            handle: "@fluffpuffs",
            "timestamp": "Mon Apr 03 06:10:24 +0000 2017"
        },
        {
            "tweet": "\u0c2e\u0c41\u0c26\u0c4d\u0c30\u0c17\u0c21 \u0c2f\u0c3e\u0c24\u0c4d\u0c30\u0c15\u0c41 \u0c2a\u0c4b\u0c32\u0c40\u0c38\u0c41\u0c32 \u0c05\u0c28\u0c41\u0c2e\u0c24\u0c3f \u0c28\u0c3f\u0c30\u0c3e\u0c15\u0c30\u0c23, \u0c15\u0c3f\u0c30\u0c4d\u0c32\u0c02\u0c2a\u0c42\u0c21\u0c3f\u0c32\u0c4b 2\u0c35\u0c47\u0c32 \u0c2e\u0c02\u0c26\u0c3f \u0c2a\u0c4b\u0c32\u0c40\u0c38\u0c41\u0c32\u0c24\u0c4b \u0c28\u0c3f\u0c18\u0c3e\n#andhrapradesh #mudragadapadmanabham",
            handle: "@NTVJustIn",
            "timestamp": "Fri Jan 15 02:06:13 +0000 2016"
        },
        {
            "tweet": "\u0c15\u0c3f\u0c30\u0c4d\u0c32\u0c02\u0c2a\u0c42\u0c21\u0c3f\u0c32\u0c4b \u0c35\u0c47\u0c26\u0c3f\u0c15\u0c17\u0c3e \u0c2e\u0c30\u0c4b\u0c38\u0c3e\u0c30\u0c3f \u0c35\u0c47\u0c21\u0c46\u0c15\u0c4d\u0c15\u0c3f\u0c28 \u0c15\u0c3e\u0c2a\u0c41 \u0c09\u0c26\u0c4d\u0c2f\u0c2e\u0c02\n#andhrapradesh #mudragadapadmanabham",
            handle: "@NTVJustIn",
            "timestamp": "Fri Jan 15 02:06:13 +0000 2016"
        },
        {
            "tweet": "RT @UrsVishnu: Last rights to a tree which served this earth for years... #andhrapradesh #godavari https://t.co/qakRPI7NKs",
            handle: "@imdharmic",
            "timestamp": "Mon Dec 12 07:59:42 +0000 2011"
        },
        {
            "tweet": "RT @NTVJustIn: 26\u0c28 \u0c35\u0c3f\u0c36\u0c3e\u0c16\u0c32\u0c4b \u0c07\u0c02\u0c1c\u0c3f\u0c28\u0c40\u0c30\u0c3f\u0c02\u0c17\u0c4d \u0c15\u0c3e\u0c32\u0c47\u0c1c\u0c40\u0c32\u0c41, \u0c35\u0c3f\u0c26\u0c4d\u0c2f\u0c3e\u0c38\u0c02\u0c38\u0c4d\u0c25\u0c32 \u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c15\u0c41\u0c32\u0c41, \u0c35\u0c3f\u0c26\u0c4d\u0c2f\u0c3e\u0c30\u0c4d\u0c25\u0c41\u0c32\u0c24\u0c4b \u0c38\u0c2e\u0c3e\u0c35\u0c47\u0c36\u0c02-\u0c2e\u0c02\u0c24\u0c4d\u0c30\u0c3f \u0c17\u0c02\u0c1f\u0c3e\n#andhrapradesh #Vizag #DRUGS",
            handle: "@NtvteluguHD",
            "timestamp": "Mon Aug 25 09:15:55 +0000 2014"
        },
        {
            "tweet": "RT @mohnotgaurav18: #RepublicExposesBofors Corruption is in DNA of #Congress",
            handle: "@NationJai",
            "timestamp": "Tue May 23 18:52:50 +0000 2017"
        },
        {
            "tweet": "RT @deval_g: Deval's Theorem\n\"Con\" is opposite of \"Pro\"\nThus.....\n\"Con\"gress is opposite of \"Pro\"gress \n#Congress #congressmuktbharat",
            handle: "@YSOSERIOUS11",
            "timestamp": "Fri Feb 17 07:45:31 +0000 2017"
        },
        {
            "tweet": "RT @apnnewsindia: #Delhi: #Bihar \u0915\u0947 \u092e\u0941\u0916\u094d\u092f\u092e\u0902\u0924\u094d\u0930\u0940 @NitishKumar #Congress \u0915\u0947 \u0909\u092a\u093e\u0927\u094d\u092f\u0915\u094d\u0937 #RahulGandhi \u0938\u0947 \u092e\u093f\u0932\u0928\u0947 \u092a\u0939\u0941\u0902\u091a\u0947\n#JDU @OfficeOfRG @INCIndia\u2026",
            handle: "@DVashist15",
            "timestamp": "Mon May 08 11:49:51 +0000 2017"
        },
        {
            "tweet": "RT @apnnewsindia: #Kerela #Congress \u0915\u0947 \u0935\u093f\u0927\u093e\u092f\u0915 \u090f\u092e \u0935\u093f\u0902\u0938\u0947\u0902\u091f \u0915\u094b \u090f\u0915 51 \u0935\u0930\u094d\u0937\u0940\u092f \u092e\u0939\u093f\u0932\u093e \u0915\u0947 \u0906\u0924\u094d\u092e\u0939\u0924\u094d\u092f\u093e,\u092c\u0932\u093e\u0924\u094d\u0915\u093e\u0930 \u0914\u0930 \u0909\u0924\u094d\u092a\u0940\u0921\u093c\u0928 \u0915\u0947 \u0906\u0930\u094b\u092a\u094b\u0902 \u092a\u0930 \u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930 \u0915\u094b\u2026",
            handle: "@DVashist15",
            "timestamp": "Mon May 08 11:49:51 +0000 2017"
        },
        {
            "tweet": "RT @bonniemurphy: @tia6sc @GOP @POTUS He can't fire Mueller. \nLook what happened w/Comey\n#Congress find your balls - do right thing",
            handle: "@marty_garratt",
            "timestamp": "Sun Jan 15 23:22:06 +0000 2017"
        },
        {
            "tweet": "RT @GartrellLinda: #Congress listen up:\nWe voted for the TRUMP AGENDA\nWe demand The Wall\nWe demand Healthcare\nWe demand Tax Reform\nGet busy\u2026",
            handle: "@Tommie24hrs",
            "timestamp": "Sat Jul 22 10:44:19 +0000 2017"
        },
        {
            "tweet": "RT @punjabkesari: \u0915\u093e\u0902\u0917\u094d\u0930\u0947\u0938 \u0915\u093e \u0938\u0935\u093e\u0932- PM \u092e\u094b\u0926\u0940 \u092c\u0924\u093e\u090f\u0902 \u0926\u0947\u0936 \u0915\u0940 \u0938\u0940\u092e\u093e\u090f\u0902 \u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924 \u0939\u0948\u0902 \u092f\u093e \u0928\u0939\u0940\u0902 https://t.co/iDMVPQQRz8 #Congress #PMModi .@narendramo\u2026",
            handle: "@amar129438",
            "timestamp": "Fri May 08 11:31:47 +0000 2015"
        },
        {
            "tweet": "#Congress ideology #derived from #British #2 keep dividing to stay in Command.",
            handle: "@ram26chouhan",
            "timestamp": "Sat Apr 20 16:53:10 +0000 2013"
        },
        {
            "tweet": "\u0915\u093e\u0902\u0917\u094d\u0930\u0947\u0938 \u0915\u093e \u0938\u0935\u093e\u0932- PM \u092e\u094b\u0926\u0940 \u092c\u0924\u093e\u090f\u0902 \u0926\u0947\u0936 \u0915\u0940 \u0938\u0940\u092e\u093e\u090f\u0902 \u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924 \u0939\u0948\u0902 \u092f\u093e \u0928\u0939\u0940\u0902 https://t.co/iDMVPQQRz8 #Congress #PMModi .\u2026 https://t.co/1UpmLljQQ1",
            handle: "@punjabkesari",
            "timestamp": "Tue Oct 06 13:43:13 +0000 2009"
        },
        {
            "tweet": "#US #Congress defies #Trump and reaches #Russia #sanctions #deal @CNNPolitics https://t.co/V3JErzSL1H",
            handle: "@peterjtbarker",
            "timestamp": "Fri Nov 11 21:49:24 +0000 2016"
        },
        {
            "tweet": "RT @deval_g: Deval's Theorem\n\"Con\" is opposite of \"Pro\"\nThus.....\n\"Con\"gress is opposite of \"Pro\"gress \n#Congress #congressmuktbharat",
            handle: "@pickooo",
            "timestamp": "Sun Dec 06 11:04:31 +0000 2009"
        },
        {
            "tweet": "RT @NarendraModi1FC: People of India were smart &amp; knew this even before NEWSBREAK and kicked Corrupt #Gandhi #Congress out of Government. #\u2026",
            handle: "@emperorsm40",
            "timestamp": "Tue Jun 04 13:34:18 +0000 2013"
        },
        {
            "tweet": "\"If I am paid to make movie on #IndiraGandhi By BJP, Then Journalist Have Been Paid By #Congress 2Cover\u2026 https://t.co/DpgJBj8xHK",
            handle: "@Gitanjali_DS",
            "timestamp": "Thu Aug 04 07:13:47 +0000 2016"
        },
        {
            "tweet": "RT @deval_g: Deval's Theorem\n\"Con\" is opposite of \"Pro\"\nThus.....\n\"Con\"gress is opposite of \"Pro\"gress \n#Congress #congressmuktbharat",
            handle: "@Anmol_77",
            "timestamp": "Fri Sep 23 06:29:44 +0000 2011"
        },
        {
            "tweet": "RT @GartrellLinda: #Congress listen up:\nWe voted for the TRUMP AGENDA\nWe demand The Wall\nWe demand Healthcare\nWe demand Tax Reform\nGet busy\u2026",
            handle: "@hgreene81",
            "timestamp": "Mon May 05 11:09:55 +0000 2014"
        },
        {
            "tweet": "RT @Shyam17: #ShashiTharoor speeches.#IndianPolitics, #IndianNationalCongress,#IncredibleIndia,#Indian.https://t.co/dwTvPIERup https://t.co\u2026",
            handle: "@indianable",
            "timestamp": "Sun Apr 16 20:59:43 +0000 2017"
        },
        {
            "tweet": "#ShashiTharoor speeches.#IndianPolitics, #IndianNationalCongress,#IncredibleIndia,#Indian.https://t.co/dwTvPIERup https://t.co/tt8bvABVT4",
            handle: "@Shyam17",
            "timestamp": "Fri Mar 06 10:37:38 +0000 2009"
        },
        {
            "tweet": "RT @anandchhajed01: Vote for Progress,Vote for Congress\nFor any help call:9823387870\n#IndianNationalCongress #Election #like4like #Vote4Pro\u2026",
            handle: "@LaurynSilva13",
            "timestamp": "Tue Jul 18 20:40:55 +0000 2017"
        },
        {
            "tweet": "i will not #steal #lie #betray bcz all these actions r undertaken by #indian Govt &amp; #TamilNadu govt #ADMK #DMK #BJP #IndianNationalcongress",
            handle: "@vinoth__vinu",
            "timestamp": "Tue Feb 14 06:58:52 +0000 2017"
        },
        {
            "tweet": "RT @Shyam17: #ShashiTharoor speeches.#IndianPolitics, #IndianNationalCongress,#IncredibleIndia,#Indian.https://t.co/dwTvPIWslX https://t.co\u2026",
            handle: "@indianable",
            "timestamp": "Sun Apr 16 20:59:43 +0000 2017"
        },
        {
            "tweet": "#ShashiTharoor speeches.#IndianPolitics, #IndianNationalCongress,#IncredibleIndia,#Indian.https://t.co/dwTvPIWslX https://t.co/14cKXcCBGU",
            handle: "@Shyam17",
            "timestamp": "Fri Mar 06 10:37:38 +0000 2009"
        },
        {
            "tweet": "RT @Shyam17: #ShashiTharoor speeches.#IndianPolitics, #IndianNationalCongress,#IncredibleIndia,#Indian.https://t.co/dwTvPIERup https://t.co\u2026",
            handle: "@indianable",
            "timestamp": "Sun Apr 16 20:59:43 +0000 2017"
        },
        {
            "tweet": "#ShashiTharoor speeches.#IndianPolitics, #IndianNationalCongress,#IncredibleIndia,#Indian.https://t.co/dwTvPIERup https://t.co/QS9scfE33g",
            handle: "@Shyam17",
            "timestamp": "Fri Mar 06 10:37:38 +0000 2009"
        },
        {
            "tweet": "Congratulations @BJP4India and 14th Indian #PersidentKovind for this amazing victory against @meira_kumar\u2026 https://t.co/BJjNrYxPcE",
            handle: "@HarnitSoni",
            "timestamp": "Thu Jul 28 05:05:08 +0000 2016"
        },
        {
            "tweet": "RT @Shyam17: #ShashiTharoor speeches.#IndianPolitics, #IndianNationalCongress,#IncredibleIndia,#Indian.https://t.co/dwTvPIERup https://t.co\u2026",
            handle: "@indianable",
            "timestamp": "Sun Apr 16 20:59:43 +0000 2017"
        },
        {
            "tweet": "#ShashiTharoor speeches.#IndianPolitics, #IndianNationalCongress,#IncredibleIndia,#Indian.https://t.co/dwTvPIERup https://t.co/EH47JxYLpl",
            handle: "@Shyam17",
            "timestamp": "Fri Mar 06 10:37:38 +0000 2009"
        },
        {
            "tweet": "#ShashiTharoor speeches.#IndianPolitics, #IndianNationalCongress,#IncredibleIndia,#Indian.https://t.co/dwTvPIERup https://t.co/PGzDWHA7Gs",
            handle: "@Shyam17",
            "timestamp": "Fri Mar 06 10:37:38 +0000 2009"
        },
        {
            "tweet": "\u091c\u094b \u0906\u0924\u0902\u0915\u0940 \u0938\u0947 \u0915\u0930\u0947 \u092a\u094d\u092f\u093e\u0930,\n\u0909\u0938\u0947 \u0909\u092a\u0930\u093e\u0937\u094d\u091f\u094d\u0930\u092a\u0924\u093f \u092c\u0928\u093e\u0928\u0947 \u0938\u0947 \u0915\u0948\u0938\u0947 \u0915\u0930\u0947 \u0907\u0928\u0915\u093e\u0930\n#indiannationalcongress #GopalKrishnaGandhi #GopalGandhi",
            handle: "@AnilSoharu",
            "timestamp": "Wed Sep 16 12:09:47 +0000 2009"
        },
        {
            "tweet": "#ShashiTharoor speeches.#IndianPolitics, #IndianNationalCongress,#IncredibleIndia,#Indian.https://t.co/dwTvPIERup https://t.co/TkwJdBTBCr",
            handle: "@Shyam17",
            "timestamp": "Fri Mar 06 10:37:38 +0000 2009"
        },
        {
            "tweet": "#ShashiTharoor speeches.#IndianPolitics, #IndianNationalCongress,#IncredibleIndia,#Indian.https://t.co/dwTvPIERup https://t.co/bBzbHyLZp3",
            handle: "@Shyam17",
            "timestamp": "Fri Mar 06 10:37:38 +0000 2009"
        },
        {
            "tweet": "Violence Does Beget Violence: KULDIP NAYAR https://t.co/iNslYnfdFP #India #IndianPolitics #BJP #ModiSarkar #Politics",
            handle: "@TheCitizen_in",
            "timestamp": "Thu Dec 26 10:06:29 +0000 2013"
        },
        {
            "tweet": "Appeasement of Minorities is a Myth: RAM PUNIYANI https://t.co/JePHX9XIHo #India #Politics #Secularism #Myths #IndianPolitics",
            handle: "@TheCitizen_in",
            "timestamp": "Thu Dec 26 10:06:29 +0000 2013"
        },
        {
            "tweet": "RT @adityamisr: Transferred 26 times in 17 yrs...!!! Hats off @D_Roopa_IPS. Feel proud, you are rewarded for good work. #indianpolitics #Sw\u2026",
            handle: "@arunprasathtwit",
            "timestamp": "Thu Sep 30 07:02:13 +0000 2010"
        },
        {
            "tweet": "Transferred 26 times in 17 yrs...!!! Hats off @D_Roopa_IPS. Feel proud, you are rewarded for good work.\u2026 https://t.co/oOkH2o1uCz",
            handle: "@adityamisr",
            "timestamp": "Sun Sep 14 05:15:46 +0000 2014"
        },
        {
            "tweet": "@IndiaToday Transferred 26 times in 17 yrs...!!! Hats off @D_Roopa_IPS. Feel proud, you are rewarded for good work.\u2026 https://t.co/ETFF4FllAH",
            handle: "@adityamisr",
            "timestamp": "Sun Sep 14 05:15:46 +0000 2014"
        },
        {
            "tweet": "RT @Shyam17: #ShashiTharoor speeches.#IndianPolitics, #IndianNationalCongress,#IncredibleIndia,#Indian.https://t.co/dwTvPIERup https://t.co\u2026",
            handle: "@indianable",
            "timestamp": "Sun Apr 16 20:59:43 +0000 2017"
        },
        {
            "tweet": "#ShashiTharoor speeches.#IndianPolitics, #IndianNationalCongress,#IncredibleIndia,#Indian.https://t.co/dwTvPIERup https://t.co/tt8bvABVT4",
            handle: "@Shyam17",
            "timestamp": "Fri Mar 06 10:37:38 +0000 2009"
        },
        {
            "tweet": "#Nepotism is a new form of #casteism .. This exactly how we moved from Karma based caste to Birth based caste. #Bollywood #IndianPolitics",
            handle: "@umesh_gawade",
            "timestamp": "Thu Dec 11 17:17:03 +0000 2008"
        },
        {
            "tweet": "@mebhaskardas ur ideas nd voices of  #FakeCases #GenderBiasedLaw #498A #MRA will only become #business opportunity 4 #indianpolitics",
            handle: "@avi_imgrid",
            "timestamp": "Sun May 21 09:44:39 +0000 2017"
        },
        {
            "tweet": "\u092a\u091f\u0947\u0932 \u092e\u0947\u0902  \u0938\u0930\u0926\u093e\u0930 \u0915\u0947 \u0917\u0941\u0923 \u0925\u0947 \u0964\n\u0932\u0947\u0915\u093f\u0928 \u0928\u0947\u0939\u0930\u0942 \u092e\u0947 \u092a\u0902\u0921\u093f\u0924 \u0915\u0947 \u090f\u0915 \u092d\u0940 \u0917\u0941\u0923 \u0928\u0939\u0940\u0902 \u0927\u0947\u0964\n#indianPolitics #india #bjp #congress #modi",
            handle: "@KushalDave218",
            "timestamp": "Sat Aug 27 20:46:41 +0000 2011"
        },
        {
            "tweet": "\u0938\u0930\u0915\u093e\u0930 \u0938\u094d\u0935\u091a\u094d\u091b \u0930\u093e\u091c\u0928\u0940\u0924\u093f\u0915 \u0905\u0928\u0941\u0926\u093e\u0928 \u0915\u0940 \u0926\u093f\u0936\u093e \u092e\u0947\u0902 \u0915\u093e\u092e \u0915\u0930 \u0930\u0939\u0940 : #\u091c\u0947\u091f\u0932\u0940\n@arunjaitley @BJP4India #indianpolitics #Politics\u2026 https://t.co/0cBvgJDvL0",
            handle: "@livetodayonline",
            "timestamp": "Tue Apr 05 06:37:24 +0000 2016"
        },
        {
            "tweet": "RT @hanziiam: @ashvinkms @HasibaAmin they were announcing that they'll ban beef if they'll win the elections in up #indianpolitics \ud83d\ude07",
            handle: "@hanziiam",
            "timestamp": "Sat Mar 29 11:26:19 +0000 2014"
        },
        {
            "tweet": "RT @hanziiam: @ajay2501 @HasibaAmin Bjp- you should stop eating beef in india (so that we can export it more) #indianpolitics",
            handle: "@hanziiam",
            "timestamp": "Sat Mar 29 11:26:19 +0000 2014"
        },
        {
            "tweet": "@ajay2501 @HasibaAmin Bjp- you should stop eating beef in india (so that we can export it more) #indianpolitics",
            handle: "@hanziiam",
            "timestamp": "Sat Mar 29 11:26:19 +0000 2014"
        },
        {
            "tweet": "@ashvinkms @HasibaAmin they were announcing that they'll ban beef if they'll win the elections in up #indianpolitics \ud83d\ude07",
            handle: "@hanziiam",
            "timestamp": "Sat Mar 29 11:26:19 +0000 2014"
        },
        {
            "tweet": "Pic1: Emperor walked naked after #Modi became PM.\nPic2: someone saw him walking naked and revealed it to public.\u2026 https://t.co/WdZZCCZ7W0",
            handle: "@champakChampion",
            "timestamp": "Mon Jan 11 08:14:51 +0000 2010"
        },
        {
            "tweet": "@ashoswai #MasterStroke by #modi",
            handle: "@Jai74863750",
            "timestamp": "Tue Apr 12 07:11:17 +0000 2016"
        },
        {
            "tweet": "RT @RosMathieson: After a deal in Sept 2014: #Australia Ships First #Uranium to #India for Testing https://t.co/8VV6jtnKxs #Modi",
            handle: "@DrIanHall",
            "timestamp": "Sun Mar 29 10:34:41 +0000 2009"
        },
        {
            "tweet": "RT @adrenna9: @PMOIndia #DonkeyOfTheDay #Modi get #CAG Audit done then see #Bars of #Jail #JaiLavakusaFirstLook \ud83d\ude06\ud83d\ude06 #ieWorld #MannKiBaat #Mu\u2026",
            handle: "@LaxmanUdmale",
            "timestamp": "Sun Aug 28 17:29:59 +0000 2016"
        },
        {
            "tweet": "#bol #Bacchan \nStill our #Army doesn't have\nenough #Ammunition \nas there is a situation of\n#war at #Border \n#Modi j\u2026 https://t.co/JpC3MnhalG",
            handle: "@shingne_sanket",
            "timestamp": "Sun May 08 11:22:47 +0000 2016"
        },
        {
            "tweet": "After a deal in Sept 2014: #Australia Ships First #Uranium to #India for Testing https://t.co/8VV6jtnKxs #Modi",
            handle: "@RosMathieson",
            "timestamp": "Thu May 10 06:06:20 +0000 2012"
        },
        {
            "tweet": "' #BJP \u0914\u0930 #Modi \u0915\u093e \u092e\u0941\u0915\u093e\u092c\u0932\u093e \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f #\u0915\u093e\u0902\u0917\u094d\u0930\u0947\u0938 \u0915\u0947 \u092a\u093e\u0938 \u0915\u094b\u0908 \u091a\u0947\u0939\u0930\u093e \u0928\u0939\u0940\u0902'\nhttps://t.co/FCbgHoaBX3\n#Congress",
            handle: "@ZeeMPCG",
            "timestamp": "Sat Dec 21 19:54:25 +0000 2013"
        },
        {
            "tweet": "@BJP4India @malviyamit @arunjaitley BJP will ensure Enough &amp;no shortage of Cow meat to Goa,Kerala,NE states.\nUnder\u2026 https://t.co/2ptrIug6KC",
            handle: "@Khan_hits",
            "timestamp": "Sun May 11 11:09:13 +0000 2014"
        },
        {
            "tweet": "#BlackMoney 71941 Crore found,now how much #Modi giving in each account. Leave Swiss accounts, charity begins at home.Oh..Was it a #jumla !!",
            handle: "@ME_CALLING_SELF",
            "timestamp": "Sat Sep 19 16:05:21 +0000 2009"
        },
        {
            "tweet": "RT @FinancialXpress: #Modi govt working on electoral bonds, reveals Jaitley, says Parliament, EC failed to check opaque political funding h\u2026",
            handle: "@tracyashish",
            "timestamp": "Sat Jul 25 05:13:37 +0000 2015"
        },
        {
            "tweet": "RT @adrenna9: @PMOIndia #DonkeyOfTheDay #Modi get #CAG Audit done then see #Bars of #Jail #JaiLavakusaFirstLook \ud83d\ude06\ud83d\ude06 #ieWorld #MannKiBaat #Mu\u2026",
            handle: "@satyabrataAppy",
            "timestamp": "Sat Jul 02 13:27:51 +0000 2016"
        },
        {
            "tweet": "PM #Modi wants to hurt sentiments of Congressmen via 'Indu Sarkar': #Moily\nhttps://t.co/AWzgDuNd7r",
            handle: "@NewsNationTV",
            "timestamp": "Thu Dec 27 06:54:37 +0000 2012"
        },
        {
            "tweet": "RT @DrMashrumLugati: #Modi \u0915\u0947 #MannKiBaat \u0914\u0930 \u0905\u092c #ArunJaitley \u0915\u0947 #DhanKiBaat \u0915\u0947 \u092c\u093e\u0926 \u0905\u092c \u091c\u0928\u0924\u093e \u0915\u0930\u0947\u0917\u0940 #FunKiBaat.\n#Budget2017",
            handle: "@satyabrataAppy",
            "timestamp": "Sat Jul 02 13:27:51 +0000 2016"
        },
        {
            "tweet": "RT @profpaVarghese: #Modi is slowly getting corruption out of India. Bribe, hoarding, tax evasion have all come down drastically. This'll h\u2026",
            handle: "@kapurpremk",
            "timestamp": "Tue Feb 10 04:59:17 +0000 2015"
        },
        {
            "tweet": "https://t.co/O0dEskH0on\n\n#telangana #telugunews #sports https://t.co/MM7FwomE7L",
            handle: "@telanganawadi_1",
            "timestamp": "Fri Dec 05 10:30:10 +0000 2014"
        },
        {
            "tweet": "https://t.co/UKhzLBqQGd\n\u0c30\u0c4b\u0c21\u0c4d\u0c21\u0c41 \u0c09\u0c28\u0c4d\u0c28 \u0c2a\u0c4d\u0c30\u200c\u0c24\u0c3f \u0c17\u0c4d\u0c30\u0c3e\u0c2e\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2c\u200c\u0c38\u0c4d\u0c38\u0c41 #TNews #Telangana https://t.co/kZLfCr7uWH",
            handle: "@TNewstg",
            "timestamp": "Sat Mar 15 06:59:33 +0000 2014"
        },
        {
            "tweet": "https://t.co/YgUbf8l0Kt\n\n#telangana #telugunews  @nritrs https://t.co/nfaV9KXsyr",
            handle: "@Janamsakshi1",
            "timestamp": "Thu Nov 20 11:59:19 +0000 2014"
        },
        {
            "tweet": "https://t.co/YgUbf8l0Kt\n\n#telangana #telugunews https://t.co/etrTuyspzi",
            handle: "@Janamsakshi1",
            "timestamp": "Thu Nov 20 11:59:19 +0000 2014"
        },
        {
            "tweet": "https://t.co/aJddroNIl0\n\n#telangana #telugunews @TJagruthi https://t.co/O4CoGuDrIZ",
            handle: "@janamsakshiD",
            "timestamp": "Thu Nov 20 13:58:53 +0000 2014"
        },
        {
            "tweet": "https://t.co/aJddroNIl0\n\n#telangana #telugunews https://t.co/dRL5GZrNrD",
            handle: "@janamsakshiD",
            "timestamp": "Thu Nov 20 13:58:53 +0000 2014"
        },
        {
            "tweet": "https://t.co/YgUbf8l0Kt\n\n#telangana #telugunews @KTRTRS @KTR_News @bonthurammohan https://t.co/x7HlheF1Al",
            handle: "@Janamsakshi1",
            "timestamp": "Thu Nov 20 11:59:19 +0000 2014"
        },
        {
            "tweet": "RT @Janamsakshi1: https://t.co/YgUbf8l0Kt\n\n#telangana #telugunews #sports @RajMithali https://t.co/zDOkus2HjJ",
            handle: "@Janamsakshi1",
            "timestamp": "Thu Nov 20 11:59:19 +0000 2014"
        },
        {
            "tweet": "RT @RSchwarze: Thrilled (and inspired): @UFZ ranks globally most relevant #thinktank in support of #ClimateChange policies in 2016 https://\u2026",
            handle: "@SueEhlerding",
            "timestamp": "Thu Jan 08 09:20:26 +0000 2009"
        },
        {
            "tweet": "RT @ngarainstitute: Ngara Institute's Mission Statement. #Ngara #NgaraInstitute #Australia #Politics #Auspol #Activist #Thinktank https://t\u2026",
            handle: "@ngarainstitute",
            "timestamp": "Wed Aug 26 05:29:15 +0000 2015"
        },
        {
            "tweet": "RT @RSchwarze: Thrilled (and inspired): @UFZ ranks globally most relevant #thinktank in support of #ClimateChange policies in 2016 https://\u2026",
            handle: "@TrumpvsScience",
            "timestamp": "Thu Jun 09 11:13:38 +0000 2016"
        },
        {
            "tweet": "RT @RSchwarze: Thrilled (and inspired): @UFZ ranks globally most relevant #thinktank in support of #ClimateChange policies in 2016 https://\u2026",
            handle: "@roomeezon",
            "timestamp": "Tue Sep 16 21:16:11 +0000 2008"
        },
        {
            "tweet": "Thrilled (and inspired): @UFZ ranks globally most relevant #thinktank in support of #ClimateChange policies in 2016 https://t.co/vutr06sXgz",
            handle: "@RSchwarze",
            "timestamp": "Tue Nov 30 14:10:36 +0000 2010"
        },
        {
            "tweet": "Le sens de l' #audace \ud83d\udc49\ud83c\udffb\ud83d\udc49\ud83c\udffb\ud83d\udc49\ud83c\udffbD\u00e9couvrez le jeune #thinktank #libredansleton de la soci\u00e9t\u00e9 civile qui monte \ud83d\udd1d \ud83c\udf40\ud83d\udca1https://t.co/7uGoGLkn82",
            handle: "@AudacieuseF",
            "timestamp": "Wed Sep 28 13:15:56 +0000 2016"
        },
        {
            "tweet": "Success is not always measured by how much \ud83d\udcb0 you have..#ThinkTank",
            handle: "@seobizhub",
            "timestamp": "Fri Jun 06 09:14:15 +0000 2014"
        },
        {
            "tweet": "Want to get involved in a #ThinkTank ? @Science_Academy offers opportunities for #EMCRs https://t.co/gHusyJUhFH",
            handle: "@TheASMR1",
            "timestamp": "Thu Sep 13 11:23:35 +0000 2012"
        },
        {
            "tweet": "@Kieza_cmail An overseas tour hosted by @grahamhancock is on my bucket list . He hosts some really intriguing tours #ThinkTank",
            handle: "@Iamtruthseeker2",
            "timestamp": "Sun Apr 05 14:40:31 +0000 2009"
        },
        {
            "tweet": "Back to basics. 1 to 1... none to accomodate theoretically or neither options vacant. \ud83d\ude44 #ThinkTank",
            handle: "@fmarin_ES",
            "timestamp": "Sun Mar 15 18:20:57 +0000 2015"
        },
        {
            "tweet": "Building the Foundation: What Goes Behind Building a Website https://t.co/Sh1B50Su7j #ThinkStrategy #thinktank #marketing #strategy",
            handle: "@ThinkStrategyUS",
            "timestamp": "Sat Dec 21 18:56:40 +0000 2013"
        },
        {
            "tweet": "RT @aigeas: \u03b4\u03b5\u03ba\u03ac\u03b4\u03b5\u03c2 #ThinkTank \u03b1\u03c0\u03b5\u03c1\u03b3\u03ac\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9 \u03c0\u03c9\u03c2 \u03b8\u03b1 \u03b4\u03bf\u03c5\u03bb\u03b5\u03cd\u03b5\u03b9\u03c2 \u03c4\u03b6\u03ac\u03bc\u03c0\u03b1.",
            handle: "@Manos_K_A",
            "timestamp": "Sun Feb 14 15:45:57 +0000 2016"
        },
        {
            "tweet": "\u03b4\u03b5\u03ba\u03ac\u03b4\u03b5\u03c2 #ThinkTank \u03b1\u03c0\u03b5\u03c1\u03b3\u03ac\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9 \u03c0\u03c9\u03c2 \u03b8\u03b1 \u03b4\u03bf\u03c5\u03bb\u03b5\u03cd\u03b5\u03b9\u03c2 \u03c4\u03b6\u03ac\u03bc\u03c0\u03b1.",
            handle: "@aigeas",
            "timestamp": "Wed Apr 28 21:09:22 +0000 2010"
        },
        {
            "tweet": "This Summer, I'm off to meet the dinosaurs at #ThinkTank https://t.co/IWaqUxXMX8",
            handle: "@SpencerMelia",
            "timestamp": "Mon Oct 20 06:51:42 +0000 2014"
        },
        {
            "tweet": "Back to basics. 1 to 1... none to accomodate theoretically or neither options vacant. \ud83d\ude44 #ThinkTank",
            handle: "@Shivz85",
            "timestamp": "Sat Jan 02 07:23:12 +0000 2016"
        }
    ];
}



})(window, Vue, moment, _);

