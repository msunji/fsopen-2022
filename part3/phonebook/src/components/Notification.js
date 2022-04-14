const Notification = ({ message, error }) => {
  return (
    <div className={`notification ${error ? 'error' : 'success'}`}>
      {message}
    </div>
  );
};

export default Notification;
