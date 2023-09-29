const Customer = ({ customer }) => {
  return (
    <div>
      <CustomerProfile
        image={customer.image}
        name={customer.name}
        id={customer.id}
      />
      <CustomerInfo
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    </div>
  );
};

const CustomerProfile = (props) => {
  return (
    <div>
      <img src={props.image} alt="profile" />
      <h2>
        {props.name}({props.id})
      </h2>
    </div>
  );
};

const CustomerInfo = (props) => {
  return (
    <div>
      <p>{props.birthday}</p>
      <p>{props.gender}</p>
      <p>{props.job}</p>
    </div>
  );
};

export default Customer;
