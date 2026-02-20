//==============CONDITIONAL STATEMENTS====================

/**********************-------SWITCH CONDITION-----*******************************************/

const day = "monday";

switch (day) {
  case "monday":
    console.log(`First day of the week i.e ${day}`);
    break;
  case "tuesday":
    console.log(`Second day of the week i.e ${day}`);
    break;
  case "wednesday":
    console.log(`Third day of the week i.e ${day}`);
    break;
  case "thursday":
    console.log(`Fourth day of the week i.e ${day}`);
    break;
  case "friday":
    console.log(`Last work day of the week i.e ${day} weekend is coming up`);
    break;
  case "saturday":
  case "sunday":
    console.log(`It's weekend`);
		break;
	default:
		console.log(`INVALID DAY INPUT`);
		break;
}
