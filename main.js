import {pies} from "./data.js";
import {buttons, pieForm, pieBuilder} from "./domMethods.js";
import {handleFormSubmit, deletePie, pieFormEvents, handleButtonClick, buttonEvents} from "./events.js";
import {filterPies} from "./filter.js";

const init = () => {
  // this starts the app
  buttons(); // PUT DOM ELEMENTS FIRST
  buttonEvents(); // EVENT LISTNERS AFTER
  pieBuilder(pies);
  pieForm();
  pieFormEvents();
};

init();
