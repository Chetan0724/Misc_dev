import One from "./componentstwo/One";
import Person from "./componentstwo/Person";
import Product from "./componentstwo/Product";
import Card from "./componentstwo/Card";
import Weather from "./componentstwo/Weather";
import UserStatus from "./componentstwo/UserStatus";
import Greeting from "./componentstwo/Greeting";

const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

// const Password = ({ isValid }) =>
//   isValid ? <ValidPassword /> : <InvalidPassword />;

const Password = ({ isValid }) => {
  if (isValid) {
    return <ValidPassword />;
  }
  return <InvalidPassword />;

  // return isValid ? <ValidPassword /> : <InvalidPassword />;
};

const AppTwo = () => {
  return (
    <div>
      <section>
        <Password isValid={true} />
      </section>
      <One />
      <Person name="Ram" age={25} />
      <Product name="keyboard" price={2250} />
      <Card>
        <h1>My Card</h1>
        <p>This is some content for card 1</p>
      </Card>
      <Card>
        <h1>My Card 2</h1>
        <p>This is some content for card 2</p>
      </Card>
      <Card>
        <h1>My Card 3</h1>
        <p>This is some content for card 3</p>
      </Card>

      <Weather temperature={15} />
      <UserStatus loggedIn={true} isAdmin={false} />
      <Greeting timeOfDay="morning" />
    </div>
  );
};

export default AppTwo;