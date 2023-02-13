import React from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";
export type UsersType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

function App() {
  const [users, setUsers] = React.useState<UsersType[]>([]);
  const [invites, setInvites] = React.useState<number[]>([]);
  const [isLoading, setLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  React.useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении пользователей");
      })
      .finally(() => setLoading(false));
  }, []);
  const onChangeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  const onClickInvite = (index: number) => {
    if (invites.includes(index)) {
      setInvites((prev) => prev.filter((id) => id !== index));
    } else {
      setInvites((prev) => [...prev, index]);
    }
  };
  return (
    <div className="App">
      {success ? (
        <Success count={invites.length} />
      ) : (
        <Users
          items={users}
          isLoading={isLoading}
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
          invites={invites}
          onClickInvite={onClickInvite}
          setSuccess={setSuccess}
        />
      )}
    </div>
  );
}

export default App;
