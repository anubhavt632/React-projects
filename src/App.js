import "./App.css";
import Message from "./Components/Greeting";
// import Greeting from "./Components/Greeting/index";
// import WelcomeMessage from "./Components/Greeting/WelcomeMessage";

// // function App() {
// //   return <h1>Hello World</h1>;
// // }

// const App = () => (
//   <div>
//     <h1>Hello!</h1>
//     <WelcomeMessage timing="morning" />
//     <WelcomeMessage timing="afternoon" />
//     <WelcomeMessage timing="evening" />
//     <Greeting />
//   </div>
// );

// export default App;
import Profile from "./Components/Profile";
const profileDetails = [
  {
    id: 1,
    imageUrl: "https://img.freepik.com/free-icon/man_318-233556.jpg",
    name: "Alice Johnson",
    role: "Software Engineer",
  },
  {
    id: 2,
    imageUrl:
      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?w=900&t=st=1720014802~exp=1720015402~hmac=2325226f5f2da75297a0e3d9ab531a628960e0526e13cabc09c9563cc11d274b",
    name: "Bob Smith",
    role: "Product Manager",
  },
  {
    id: 3,
    imageUrl: "https://img.freepik.com/free-icon/man_318-233556.jpg",
    name: "Carol Williams",
    role: "UX Designer",
  },
  {
    id: 4,
    imageUrl: "https://img.freepik.com/free-icon/man_318-233556.jpg",
    name: "David Brown",
    role: "Data Scientist",
  },
];

const App = () => {
  return (
    <div className="list-container ">
      <h1>Profile List</h1>
      <ul>
        {profileDetails.map((eachObj) => (
          <Profile key={eachObj.id} userDetails={eachObj} />
        ))}
      </ul>
      <Message />
      {/* <Profile userDetails={profileDetails[0]} />
      <Profile userDetails={profileDetails[1]} />
      <Profile userDetails={profileDetails[2]} />
      <Profile userDetails={profileDetails[3]} /> */}
    </div>
  );
};
export default App;
