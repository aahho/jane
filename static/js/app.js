(function (window, Vue, moment) {

	var ELEMENTS = {
		sidenav: '#sidenavList',
		tweets: '#tweetslist',
		feeds: '#feedslist',
		appContent: '#appContent'
	};

	var tweets_json = [
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
}]
									
					
	var viewSelectedComponent = {};

	var sidenavList = new Vue({
		el: ELEMENTS.sidenav,
		delimiters: ["[[", "]]"],
		data: {
			items: [
				{
					id: 'feeds',
					title: 'News Feed',
					className: 'ti-rss-alt',
					subitems: null
				},
				{
					id: 'dataAggr',
					title: 'Data Aggregation',
					className: 'ti-menu-alt',
					subitems: [
						{
							id: 'hashSocial',
							title: 'Social Signals',
							className: 'ti-flickr'
						},
						{
							id: 'hashManage',
							title: 'Manage Aggr',
							className: 'ti-hummer'
						}
					]
				},
				{
					id: 'tweets',
					title: 'Mentions',
					className: 'ti-tag',
					subitems: [
						{
							id: 'hashapple',
							title: '#apple',
							className: 'ti-tag'
						},
						{
							id: 'hasmakeinindia',
							title: '#makeinindia',
							className: 'ti-tag'
						},
						{
							id: 'hashpolitics',
							title: '#politics',
							className: 'ti-tag'
						},
						{
							id: 'hashsummer',
							title: '#summer',
							className: 'ti-tag'
						},
						{
							id: 'hashfml',
							title: '#fml',
							className: 'ti-tag'
						}
					]
				}
			],
			activeItem: {
				id: 'feeds',
				title: 'News Feed',
				className: 'ti-rss-alt',
				subitems: null
			},
			activeSubitem: {},
		},
		methods: {
			setActive: function (item, isSub, idx) {
				console.log(this.items);
				if(item.subitems !== null && !isSub) {
					this.activeItem = item;
					this.activeSubitem = item.subitems[0];
				} else if(item.subitems === null){
					this.activeItem = item;
					this.activeSubitem = {};
				} else if(isSub) {
					this.activeSubitem = item
					this.activeItem = this.items[idx]
					console.log(item, isSub, idx);
				}

				switch(this.activeItem.id) {
					case 'feeds':
						appContent.$data.currentView = 'feedslist';
						break;
					case 'tweets':
						appContent.$data.currentView = 'tweetslist';
						break;
					default: appContent.$data.currentView = 'empty';
				}

			}
		}
	});

	var appContent = new Vue({
		el: ELEMENTS.appContent,
		delimiters: ["[[", "]]"],
		data: {
			currentView: 'feedslist'
		},
		components: {
			feedslist: {
				template: ELEMENTS.feeds,
				delimiters: ["[[", "]]"],
				data: function () {
				  return {
				  	feeds: tweets_json
				  }
				}
			},
			tweetslist: {
			  template: ELEMENTS.tweets,
			  delimiters: ["[[", "]]"],
			  data: function () {
			  	return {
				    tweets: tweets_json
				}
			  }
			},
			empty: {
				template: '<h1>Nothing here</h1>'
			}
		}
	});
}(window, Vue, moment));