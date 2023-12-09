import { Event_CountTime } from "./src/Counting_Time";
import { TimeNow } from "./src/Time_Now";

//npm run dev

window.onload = function () {
  Event_CountTime();
  setInterval(TimeNow, 1 * 1000); //1000ms=1s

}
