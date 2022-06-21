// let food;
// if (money > 100) {
//     food = "Pizza";
// } else {
//     food = "barger"
// }

//Ternary:
//Condition ? true  : false

let food = money > 100 ? "Pizza" : "barger";

const userActive = true;
if (userActive === true) {
    cssClass = 'active';
} else {
    cssClass = 'disabled';
}
cssClass = userActive ? 'active' : 'disabled';

userActive ? displayUser() : hideUser;
userActive && displayUser();
userActive || displayUser();