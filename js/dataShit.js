/*
check of alle form dingen ingevuld zijn
*/





data = blaha call data

functie = check.form

for each date in alldates {
	morning = 0
	midday = 0
	evening = 0
	night = 0
	timeslots = [];
	for (i = 0; i < date.cases.length; i++) {
		if (data.cases[i].functionArea == functie) {
			timeslots.append(data.cases[i].timePosted);
		}
	}
	
	for (i = 0; i < timeslots.length; i++) {
		//check to add all the timeslots to the according time of day
		if timeslots[i]
	}
	
}

/*
doorzoek data naar form dingen:

	dingen die de data moet weten:

		- functie

	dingen die wij van de data krijgen:

		- wanneer de meeste mensen in die sector online zijn

dit verwerken we en dan krijgen we een weekdag met tijdslot (21-05-2020 avond)

dit wordt daar terug gestuurd

output data naar id.outputPubDate