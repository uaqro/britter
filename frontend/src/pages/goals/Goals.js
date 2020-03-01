// import React, { useState, useEffect, useContext, createContext } from 'react';
// import MY_SERVICE from '../../services/index';

// const Goals = props => {
//   const [modalHandler, setModal] = useState(false);
//   return (
//     <GoalsLayout>
//       {ctx.user.spendGoals.map(element => {
//         const dayli = element.goal / element.daysToGoal;
//         return (
//           <>
//             <GoalCard goal={element} />
//             <button onClick={() => MY_SERVICE.updateGoal(element._id, dayli)}>
//               {`Add ${dayli}`}
//             </button>
//           </>
//         );
//       })}
//       {ctx.user.spendGoals.length < 3 ? (
//         <GoalModal
//           show={modalHandler}
//           handle={setModal}
//           onClick={() => setModal(!modalHandler)}
//         />
//       ) : (
//         <></>
//       )}
//     </GoalsLayout>
//   );
// };