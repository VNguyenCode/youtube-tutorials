import React from 'react';
import './App.css';
import {
  atom,
  RecoilRoot,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const usernameState = atom({
  key: 'username2',
  default: 'Red',
});

const countState = selector({
  key: 'count',
  get: ({ get }) => {
    const username = get(usernameState);
    return username.length;
  },
});

function App() {
  return <Nav />;
}

function Nav() {
  const username = useRecoilValue(usernameState);
  return (
    <div className="nav">
      <p>{username}</p>
    </div>
  );
}

function Body() {
  const username = useRecoilValue(usernameState);
  return (
    <div className="body">
      <Profile />
      <Count />
    </div>
  );
}

function Profile() {
  const [username, setUsername] = useRecoilState(usernameState);
  return (
    <div>
      <h2>Profile:</h2>
      <p>{username}</p>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
    </div>
  );
}

function Count() {
  const count = useRecoilValue(countState);
  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
