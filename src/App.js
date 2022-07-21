import "./styles.css";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
require("dayjs/locale/fr");
require("dayjs/locale/en");
require("dayjs/locale/de");
dayjs.extend(utc);
dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

const translateDateLocale = (language) => {
  switch (language) {
    case "en":
      dayjs.updateLocale("en", {
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        weekdays: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        monthsShort: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        calendar: {
          lastDay: "[Yesterday at] LT",
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          lastWeek: "[last] dddd [at] LT",
          nextWeek: "dddd [at] LT",
          sameElse: "L"
        }
      });
      break;
    case "de":
      dayjs.updateLocale("de", {
        relativeTime: {
          future: "afaka %s",
          past: "%s lasa",
          s: "segondra kely",
          m: "iray minitra",
          mm: "%d minitra",
          h: "ora iray",
          hh: "%d ora",
          d: "iray andro",
          dd: "%d andro",
          M: "iray volana",
          MM: "%d volana",
          y: "iray taona",
          yy: "%d taona"
        },
        weekdaysShort: ["Alah", "Alat", "Tal", "Alar", "Alak", "Zoma", "Sab"],
        weekdays: [
          "Alahady",
          "Alatsinainy",
          "Talata",
          "Alarobia",
          "Alakamisy",
          "Zoma",
          "Sabotsy"
        ],
        monthsShort: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jon",
          "Jol",
          "Aog",
          "Sep",
          "Okt",
          "Nov",
          "Des"
        ],
        months: [
          "Janoary",
          "Febroary",
          "Martsa",
          "Aprily",
          "May",
          "Jona",
          "Jolay",
          "Aogositra",
          "Septambra",
          "Oktobra",
          "Novambra",
          "Desambra"
        ],
        calendar: {
          lastDay: "[Omaly t@] LT",
          sameDay: "[Androany t@] LT",
          nextDay: "[Rahampitso @] LT",
          lastWeek: "[farany teo] dddd [t@] LT",
          nextWeek: "dddd [@] LT",
          sameElse: "L"
        }
      });
      break;
    default:
      dayjs.updateLocale("fr", {
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans"
        },
        weekdaysShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
        weekdays: [
          "Dimanche",
          "Lundi",
          "Mardi",
          "Mercredi",
          "Jeudi",
          "Vendredi",
          "Samedi"
        ],
        monthsShort: [
          "Janv",
          "Fevr",
          "Mars",
          "Avril",
          "Mai",
          "Juin",
          "Juil",
          "Aout",
          "Sept",
          "Oct",
          "Nov",
          "Dec"
        ],
        months: [
          "Janvier",
          "Fevrier",
          "Mars",
          "Avril",
          "Mai",
          "Juin",
          "Juillet",
          "Aout",
          "Septembre",
          "Octobre",
          "Novembre",
          "Decembre"
        ],
        calendar: {
          lastDay: "[Hier à] LT",
          sameDay: "[Ajourd'hui à] LT",
          nextDay: "[Demain à] LT",
          lastWeek: "[dernier] dddd [à] LT",
          nextWeek: "dddd [à] LT",
          sameElse: "L"
        }
      });
      break;
  }
};

// availalbe languages: de (mg), fr (by default) and en
dayjs.locale("de");
translateDateLocale("de");

console.log("from now", dayjs(1658066183520).fromNow());
console.log(dayjs.utc(1658066183520).startOf("day").format("dddd/MMMM/YY"));

const App = () => {
  return (
    <div className="App">
      <div className="main">
        <h1>Translate date with dayjs</h1>
        <h3>
          Languages use: <code>English (en), French(fr), Malagasy(mg)</code>
        </h3>
        <span>
          PS: The malagasy locale is not available with momentjs / dayjs, so I
          hack it with other existing locale
        </span>
      </div>
      <footer>
        <a href="https://tiavina-michael-ralainirina.herokuapp.com/">
          Tiavina Michael Ralainirina
        </a>
      </footer>
    </div>
  );
};

export default App;
