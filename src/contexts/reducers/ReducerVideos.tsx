import { CategoryType, TechnologyType } from "../../Types/TypeVideo";

export type DataType = {
  id: string;
  title: string;
  category: CategoryType;
  linkImg: string;
  linkVideo: string;
  description: string;
};

export type DataState = {
  type: TechnologyType;
  data: DataType[];
}[];

export type ActionType =
  | { type: "ADD_ITEM"; payload: { data: DataType; type: TechnologyType } }
  | {
      type: "UPDATE_ITEM";
      payload: {
        data: DataType;
        type: {
          anterior: TechnologyType;
          selecionado: TechnologyType;
          newId: string;
        };
      };
    }
  | { type: "DELETE_ITEM"; payload: { id: string; category: CategoryType } }
  | { type: "SET_INITIAL_DATA"; payload: DataState };

export const dataReducer = (
  state: DataState,
  action: ActionType
): DataState => {
  switch (action.type) {
    case "SET_INITIAL_DATA":
      return action.payload;

    case "ADD_ITEM":
      return state.map((group) => {
        if (group.type === action.payload.type){
          return { ...group, data: [...group.data, action.payload.data] };
        }else{
          return group;
        }
      });

    case "UPDATE_ITEM":
      console.log(action.payload);
      return state.map((group) => {
        if (group.type === action.payload.type.selecionado) {
          if (group.type === action.payload.type.anterior) {
            return {
              ...group,
              data: group.data.map((item) => {
                if (item.id === action.payload.data.id) {
                  return action.payload.data;
                } else {
                  return item;
                }
              }),
            };
          } else {
            return {
              ...group,
              data: [
                ...group.data,
                { ...action.payload.data, id: action.payload.type.newId },
              ],
            };
          }
        } else {
          return group;
        }
      });

    case "DELETE_ITEM":
      return state.map((group) => ({
        ...group,
        data: group.data.filter((item) => {
          if (item.category === action.payload.category) {
            return item.id !== action.payload.id;
          } else {
            return item;
          }
        }),
      }));

    default:
      return state;
  }
};
