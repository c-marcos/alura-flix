export type DataType = {
   id: string;
   title: string;
   category: string;
   linkImg: string;
   linkVideo: string;
   description: string;
 };
 
 export type DataState = {
   type: string;
   data: DataType[];
 }[];
 
 export type ActionType =
   | { type: "ADD_ITEM"; payload: DataType }
   | { type: "UPDATE_ITEM"; payload: DataType }
   | { type: "DELETE_ITEM"; payload: { id: string } }
   | { type: "SET_INITIAL_DATA"; payload: DataState };
 
 export const dataReducer = (state: DataState, action: ActionType): DataState => {
   switch (action.type) {
     case "SET_INITIAL_DATA":
       return action.payload;
     case "ADD_ITEM":
       return state.map((group) =>
         group.type === action.payload.category
           ? { ...group, data: [...group.data, action.payload] }
           : group
       );
     case "UPDATE_ITEM":
       return state.map((group) => ({
         ...group,
         data: group.data.map((item) =>
           item.id === action.payload.id ? action.payload : item
         ),
       }));
     case "DELETE_ITEM":
       return state.map((group) => ({
         ...group,
         data: group.data.filter((item) => item.id !== action.payload.id),
       }));
     default:
       return state;
   }
 };
 