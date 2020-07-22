import {
  MODIFY_DETAILS,
  ADD_COLUMN,
  ADD_ROW,
  EDIT_TABLE,
  EDIT_TITLE,
  SET_PROJECT_STATUS,
} from "../actions/types";
import {FaRegUserCircle} from "react-icons/fa";
export const progressStatus = [
  "Working",
  "Done",
  "Stuck",
  "Waiting",
 // "Pending",
];
export const columnTypes = ["Status", "Text", "People", "Timeline", "Date"];

export const colors = {
  Working: "#ffc761",
  Done: "#28b485",
  Stuck: "#ff3131",
  Waiting: "#7e6fff",
 // Pending: "#2998ff",
};
const initialState = {
  titles: ["Things to do", "Owner", "My status", "Status", "date", "contact"],
  content: [
    ["item1", "phani", "july1", "Working", "june1", "8500235068"],
    ["item2", "Harsha", "july2", "Stuck", "june2", "xxxxxxxxxx"],
    ["item3", "venky", "july3", "Waiting", "june3", "xxxxxxxxxx"],
    ["item4", "ashok", "july4", "Done", "june4", "xxxxxxxxxx"],
    ["item5", "dileep", "july5","Stuck", "june5", "xxxxxxxxxx"],
   
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECT_STATUS:
      return {
        ...state,
        content: state.content.map((row, i) =>
          row.map((col, j) => {
            if (action.payload.row === i && action.payload.col === j) {
              return action.payload.status;
            } else return col;
          })
        ),
      };
    case EDIT_TABLE:
      return {
        ...state,
        content: state.content.map((row, i) => {
          return row.map((cel, j) => {
            if (
              i === action.payload.rowIndex &&
              j === action.payload.colIndex
            ) {
              return action.payload.cellContent;
            } else return cel;
          });
        }),
      };
    case MODIFY_DETAILS:
      return {
        titles: action.payload.titles,
        content: action.payload.content,
      };

    case ADD_ROW:
      return {
        ...state,
        content: [
          ...state.content,
          new Array(state.content[0].length).fill("").map((elem, index) => {
            if (state.titles[index] === "Things to do") {
              return "Add Row";
            }
          }),
        ],
      };
    case ADD_COLUMN:
      return {
        ...state,
        titles: state.titles.concat(action.payload.columnTitle),
        content: state.content.map((childArr) => childArr.concat("")),
      };

    case EDIT_TITLE:
      return {
        ...state,
        titles: state.titles.map((elem, i) => {
          if (i === action.payload.titleIndex) {
            return action.payload.newTitle;
          } else {
            return elem;
          }
        }),
      };

    default:
      return state;
  }
};
