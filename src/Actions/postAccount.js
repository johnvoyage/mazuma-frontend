// import { createAccount } from "../Components/API/accounts";
// // accountName, description, subcategoryId, props.userId
// export const postAccount = (
//   accountName,
//   description,
//   subcategoryId,
//   userId
// ) => {
//   console.log("here");
//   return dispatch => {
//     dispatch({ type: "ASYNC_START" });
//     return createAccount(accountName, description, subcategoryId, userId).then(
//       accountsJson => {
//         console.log(accountsJson);
//         //RENAME
//         dispatch({ type: "SET_USERS_ACCOUNTS", accountsJson });
//       }
//     );
//   };
// };
