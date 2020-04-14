/*
check of alle form dingen ingevuld zijn
*/
// ----check if form is complete----

function callNudge() {
  var x = document.getElementById("form_searches_0_functie");
  functie = x.value;
  if (functie !== "") {
	  CreateNudge(functie);
  }
}

// ----on complete form----

function countTimeOfDay(data) {
	try {
		morningCount = data.toString().match(/Morning/g).length;
	} catch (err) {
		morningCount = 0;
	}
	try {
		middayCount = data.toString().match(/Midday/g).length;
	}  catch (err) {
		middayCount = 0;
	}
	try {
		var eveningCount = data.toString().match(/Evening/g).length;
	}  catch (err) {
		eveningCount = 0;
	}
	try {
		var nightCount = data.toString().match(/Night/g).length;
	}  catch (err) {
		nightCount = 0;
	}
	
	var optimalPostTime = "";
	
	var highestTime = Math.max(morningCount, middayCount, eveningCount, nightCount);
		switch (highestTime) {
			case morningCount:
				optimalPostTime = "ochtend";
				break;
			case middayCount:
				optimalPostTime = "middag";
				break;
			case eveningCount:
				optimalPostTime = "avond";
				break;
			case nightCount:
				optimalPostTime = "nacht";
		}
	return optimalPostTime;
}

function CreateNudge(functie) {
	
	processedData = [];
	
	currentHighest = 0;
	returnData = [];
	for (const singleDate of data.allDates) {
		console.log(singleDate);
		var morning = 0;
		var midday = 0;
		var evening = 0;
		var night = 0;
		var optimalPostTime = "";
		var timeslots = [];
		for (i = 0; i < singleDate.cases.length; i++) {
			if (singleDate.cases[i].functionArea == functie) {
				timeslots.push(singleDate.cases[i].timePosted);
			}
		}
			
		for (i = 0; i < timeslots.length; i++) {
			//check to add all the timeslots to the according time of day
			if (timeslots[i] === 23 ||
				timeslots[i] === 0 ||
				timeslots[i] === 1 ||
				timeslots[i] === 2 ||
				timeslots[i] === 3 ||
				timeslots[i] === 4 ||
				timeslots[i] === 5 ) {
				night++;
			}
			else if (timeslots[i] === 6 ||
				timeslots[i] === 7||
				timeslots[i] === 8 ||
				timeslots[i] === 9 ||
				timeslots[i] === 10 ||
				timeslots[i] === 11 ||
				timeslots[i] === 12) {
				morning++;
			}
			else if (timeslots[i] === 13 ||
				timeslots[i] === 14 ||
				timeslots[i] === 15 ||
				timeslots[i] === 16 ||
				timeslots[i] === 17 ||
				timeslots[i] === 18) {
				midday++;
			}
			else {
				evening++;
			}
		}
		
		var highestTime = Math.max(morning, midday, evening, night);
		console.log(highestTime);
		switch (highestTime) {
			case morning:
				optimalPostTime = "Morning";
				break;
			case midday:
				optimalPostTime = "Midday";
				break;
			case evening:
				optimalPostTime = "Evening";
				break;
			case night:
				optimalPostTime = "Night";
		}
		
		console.log("morning: " + morning.toString());
		console.log("midday: " + midday.toString());
		console.log("evening: " + evening.toString());
		console.log("night: " + night.toString());
		
		var currentDate = new Date(singleDate.date);
		processedData.push([timeslots.length, currentDate.toLocaleDateString('en-US', {weekday: 'long'}), optimalPostTime]);
	}
	
	
	mondayCasesTotal = 0;
	mondayTimeOfDay = [];	
	tuesdayCasesTotal = 0;
	tuesdayTimeOfDay = [];
	wednesdayCasesTotal = 0;
	wednesdayTimeOfDay = [];
	thursdayCasesTotal = 0;
	thursdayTimeOfDay = [];
	fridayCasesTotal = 0;
	fridayTimeOfDay = [];
	saturdayCasesTotal = 0;
	saturdayTimeOfDay = [];	
	sundayCasesTotal = 0;
	sundayTimeOfDay = [];

	
	for (const processedCase of processedData) {
		switch(processedCase[1]) {
			case "Monday":
				mondayCasesTotal += processedCase[0];
				mondayTimeOfDay.push(processedCase[2]);
				break;
			case "Tuesday":
				tuesdayCasesTotal += processedCase[0];
				tuesdayTimeOfDay.push(processedCase[2]);
				break;
			case "Wednesday":
				wednesdayCasesTotal += processedCase[0];
				wednesdayTimeOfDay.push(processedCase[2]);
				break;
			case "Thursday":
				thursdayCasesTotal += processedCase[0];
				thursdayTimeOfDay.push(processedCase[2]);
				break;
			case "Friday":
				fridayCasesTotal += processedCase[0];
				fridayTimeOfDay.push(processedCase[2]);
				break;
			case "Saturday":
				saturdayCasesTotal += processedCase[0];
				saturdayTimeOfDay.push(processedCase[2]);
				break;
			case "Sunday":
				sundayCasesTotal += processedCase[0];
				sundayTimeOfDay.push(processedCase[2]);
		}
	}
	
	optimalPostDay = "";
	
	var highestCases = Math.max(mondayCasesTotal, tuesdayCasesTotal, wednesdayCasesTotal, thursdayCasesTotal, fridayCasesTotal, saturdayCasesTotal, sundayCasesTotal);
		switch (highestCases) {
			case mondayCasesTotal:
				optimalPostDay = "maandag";
				optimalTimeOfDay = countTimeOfDay(mondayTimeOfDay);
				break;
			case tuesdayCasesTotal:
				optimalPostDay = "dinsdag";
				optimalTimeOfDay = countTimeOfDay(tuesdayTimeOfDay);
				break;
			case wednesdayCasesTotal:
				optimalPostDay = "woensdag";
				optimalTimeOfDay = countTimeOfDay(wednesdayTimeOfDay);
				break;
			case thursdayCasesTotal:
				optimalPostDay = "donderdag";
				optimalTimeOfDay = countTimeOfDay(thursdayTimeOfDay);
				break;
			case fridayCasesTotal:
				optimalPostDay = "vrijdag";
				optimalTimeOfDay = countTimeOfDay(fridayTimeOfDay);
				break;
			case saturdayCasesTotal:
				optimalPostDay = "zaterdag";
				optimalTimeOfDay = countTimeOfDay(saturdayTimeOfDay);
				break;
			case sundayCasesTotal:
				optimalPostDay = "zondag";
				optimalTimeOfDay = countTimeOfDay(sundayTimeOfDay);
		}
		
	showNudge({functie, optimalPostDay, optimalTimeOfDay});
}

function showNudge(data) {
	var nudge = `Wil je de dienst ${data.optimalPostDay} in de ${data.optimalTimeOfDay} uitzetten? Dan zijn zzp’ers met de functie ${data.functie} vaker online.`;
	$( "#dialog-data" ).text(nudge);
	$( "#dialog-message" ).dialog("show");
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

*/